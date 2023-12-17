import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box, Tooltip, Typography } from '@mui/material'

import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Divider from '@mui/material/Divider'
import CloudIcon from '@mui/icons-material/Cloud'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const BoardContent = () => {
  const [anchorEl, setAnchorEl] = React.useState<
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
  return (
    <>
      <Box
        sx={{
          width: '100%',
          p: '10px 0',
          height: (theme) =>
            theme.trello.boardContentHeight,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark'
              ? '#34495e'
              : '#1976d2',
          display: 'flex'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            '&::-webkit-scrollbar-track': {
              m: '0 10px'
            }
          }}
        >
          <Box
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
                height: COLUMN_HEADER_HEIGHT,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Header Content
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
                    aria-expanded={
                      open ? 'true' : undefined
                    }
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
                  MenuListProps={{
                    'aria-labelledby':
                      'basic-column-dropdown'
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      Add new card
                    </ListItemText>
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
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      Remove this column
                    </ListItemText>
                  </MenuItem>
                </Menu>
              </div>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: '0 5px',
                m: '0 5px',
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) =>
                  `calc(${
                    theme.trello.boardContentHeight
                  } - ${theme.spacing(
                    5
                  )}  - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`
              }}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1199a93b420b1e8c/65733dbaff29a6040a17ea2b/Power_Rank_Chelsea_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>
                    TRaanf mINH ddUWCS
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    p: '0 4px 8px 4px'
                  }}
                >
                  <Button
                    size="small"
                    startIcon={<PeopleAltIcon />}
                  >
                    10
                  </Button>
                  <Button
                    size="small"
                    startIcon={<ModeCommentIcon />}
                  >
                    10
                  </Button>
                  <Button
                    size="small"
                    startIcon={<AttachmentIcon />}
                  >
                    10
                  </Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button
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
          </Box>

          <Box
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
                height: COLUMN_HEADER_HEIGHT,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Header Content
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
                    aria-expanded={
                      open ? 'true' : undefined
                    }
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
                  MenuListProps={{
                    'aria-labelledby':
                      'basic-column-dropdown'
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      Add new card
                    </ListItemText>
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
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>
                      Remove this column
                    </ListItemText>
                  </MenuItem>
                </Menu>
              </div>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: '0 5px',
                m: '0 5px',
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) =>
                  `calc(${
                    theme.trello.boardContentHeight
                  } - ${theme.spacing(
                    5
                  )}  - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`
              }}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1199a93b420b1e8c/65733dbaff29a6040a17ea2b/Power_Rank_Chelsea_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>
                    TRaanf mINH ddUWCS
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    p: '0 4px 8px 4px'
                  }}
                >
                  <Button
                    size="small"
                    startIcon={<PeopleAltIcon />}
                  >
                    10
                  </Button>
                  <Button
                    size="small"
                    startIcon={<ModeCommentIcon />}
                  >
                    10
                  </Button>
                  <Button
                    size="small"
                    startIcon={<AttachmentIcon />}
                  >
                    10
                  </Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: 'pointer',
                  overflow: 'unset',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    '&:last-child': {
                      p: 1.5
                    }
                  }}
                >
                  <Typography>Lizard</Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button
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
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default BoardContent
