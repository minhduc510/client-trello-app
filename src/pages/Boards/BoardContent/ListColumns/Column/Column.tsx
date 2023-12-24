import { useState } from 'react'
import { toast } from 'react-toastify'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { useConfirm } from 'material-ui-confirm'
import {
  Box,
  Menu,
  Button,
  Tooltip,
  MenuItem,
  TextField,
  Typography
} from '@mui/material'

import Divider from '@mui/material/Divider'
import CloudIcon from '@mui/icons-material/Cloud'
import ClearIcon from '@mui/icons-material/Clear'
import AddCardIcon from '@mui/icons-material/AddCard'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import ListCards from './ListCards/ListCards'
import { CardBodyProps, ColumnProps } from '@/interface'

interface IProps {
  column: ColumnProps
  createNewCard?: (data: CardBodyProps) => void
  deleteColumnDetails?: (columnId: string) => void
}

const Column = ({
  column,
  createNewCard,
  deleteColumnDetails
}: IProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } })

  const dndKitColumnStyles = {
    touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? '0.5' : undefined
  }

  const [anchorEl, setAnchorEl] = useState<
    null | HTMLElement | (EventTarget & SVGSVGElement)
  >(null)
  const open = Boolean(anchorEl)
  const handleClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const orderedColumns = column?.cards
  const [openNewCardForm, setOpenNewCardForm] =
    useState<boolean>(false)
  const [newCardTitle, setNewCardTitle] =
    useState<string>('')

  const addNewCard = () => {
    if (!newCardTitle) {
      toast.error('Please enter column title!', {
        position: 'bottom-left'
      })
      return
    }
    const data = {
      title: newCardTitle,
      columnId: column._id,
      boardId: ''
    }
    if (createNewCard) {
      createNewCard(data)
    }
    setOpenNewCardForm(false)
    setNewCardTitle('')
  }
  const confirmDeleteColumn = useConfirm()
  const handleDeleteColumn = () => {
    confirmDeleteColumn({
      title: 'Delete column?',
      description:
        'This action will permanently delete your Column and its Card? Are you sure?',
      confirmationText: 'Confirm',
      cancellationText: 'Cancel'
    })
      .then(() => {
        if (deleteColumnDetails) {
          deleteColumnDetails(column._id)
        }
      })
      .catch(() => {})
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={dndKitColumnStyles}
        {...attributes}
      >
        <Box
          {...listeners}
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) =>
              theme.palette.mode === 'dark'
                ? '#333643'
                : '#ebecf0',
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) =>
              `calc(${
                theme.trello.boardContentHeight
              } - ${theme.spacing(5)})`
          }}
        >
          <Box
            sx={{
              height: (theme) =>
                `${theme.trello.columnHeaderHeight}`,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              variant="h7"
              sx={{ fontWeight: 'bold' }}
            >
              {column.title}
            </Typography>
            <div>
              <Tooltip title="More options">
                <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={
                    open
                      ? 'basic-menu-column-dropdown'
                      : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{
                    color: 'text.primary',
                    cursor: 'pointer'
                  }}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuItem
                  onClick={() => setOpenNewCardForm(true)}
                  sx={{
                    '&:hover': {
                      color: 'success.light',
                      '& .add-card-icon': {
                        color: 'success.light'
                      }
                    }
                  }}
                >
                  <ListItemIcon>
                    <AddCardIcon
                      fontSize="small"
                      className="add-card-icon"
                    />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <CloudIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>
                    Archive this column
                  </ListItemText>
                </MenuItem>
                <MenuItem
                  onClick={handleDeleteColumn}
                  sx={{
                    '&:hover': {
                      color: 'warning.dark',
                      '& .delete-forever-icon': {
                        color: 'warning.dark'
                      }
                    }
                  }}
                >
                  <ListItemIcon>
                    <DeleteForeverIcon
                      fontSize="small"
                      className="delete-forever-icon"
                    />
                  </ListItemIcon>
                  <ListItemText>
                    Remove this column
                  </ListItemText>
                </MenuItem>
              </Menu>
            </div>
          </Box>

          <ListCards cards={orderedColumns} />
          {!openNewCardForm ? (
            <Box
              onClick={() => setOpenNewCardForm(true)}
              sx={{
                height: (theme) =>
                  `${theme.trello.columnFooterHeight}`,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button
                sx={{
                  color: (theme) =>
                    `${
                      theme.palette.mode === 'dark'
                        ? 'white'
                        : theme.palette.primary.main
                    }`
                }}
                startIcon={<AddCardIcon fontSize="small" />}
              >
                Add new card
              </Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
            </Box>
          ) : (
            <Box
              sx={{
                mx: 2,
                py: 1,
                borderRadius: '6px',
                height: 'fit-content',
                display: 'flex',
                justifyContent: 'space-between',
                gap: 1
              }}
            >
              <TextField
                label="Enter card title..."
                type="text"
                size="small"
                variant="outlined"
                data-no-dnd="true"
                autoFocus
                value={newCardTitle}
                onChange={(e) =>
                  setNewCardTitle(e.target.value)
                }
                sx={{
                  marginTop: '2px',
                  minWidth: 120,
                  '& label': {
                    color: (theme) =>
                      theme.palette.success.light
                  },
                  '& label.Mui-focused': {
                    color: (theme) =>
                      theme.palette.success.light
                  },
                  '& input': {
                    color: (theme) =>
                      theme.palette.success.light
                  },
                  '& .MuiOutlinedInput-root': {
                    fieldset: {
                      borderColor: (theme) =>
                        theme.palette.success.light
                    },
                    '&:hover fieldset': {
                      borderColor: (theme) =>
                        theme.palette.success.light
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: (theme) =>
                        theme.palette.success.light
                    }
                  }
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  data-no-dnd="true"
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: (theme) =>
                      theme.palette.success.main,
                    '&:hover': {
                      bgColor: (theme) =>
                        theme.palette.success.main
                    }
                  }}
                  onClick={addNewCard}
                >
                  Add
                </Button>
                <ClearIcon
                  fontSize="small"
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover': {
                      color: (theme) =>
                        theme.palette.success.main
                    }
                  }}
                  onClick={() => setOpenNewCardForm(false)}
                />
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </>
  )
}

export default Column
