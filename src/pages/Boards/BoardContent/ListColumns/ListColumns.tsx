import { useState } from 'react'
import { toast } from 'react-toastify'
import AddBoxIcon from '@mui/icons-material/AddBox'
import ClearIcon from '@mui/icons-material/Clear'
import { Box, Button, TextField } from '@mui/material'
import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'

import {
  CardBodyProps,
  ColumnBodyProps,
  ColumnProps
} from '@/interface'
import Column from './Column/Column'

interface IProps {
  columns: ColumnProps[]
  createNewColumn: (data: ColumnBodyProps) => void
  createNewCard: (data: CardBodyProps) => void
  deleteColumnDetails: (columnId: string) => void
}

const ListColumns = ({
  columns,
  createNewColumn,
  createNewCard,
  deleteColumnDetails
}: IProps) => {
  const [openNewColumnForm, setOpenNewColumnForm] =
    useState<boolean>(false)
  const [newColumnTitle, setNewColumnTitle] =
    useState<string>('')

  const addNewColumn = () => {
    if (!newColumnTitle) {
      toast.error('Please enter column title!')
      return
    }
    const data = {
      title: newColumnTitle,
      boardId: ''
    }
    createNewColumn(data)
    setOpenNewColumnForm(false)
    setNewColumnTitle('')
  }

  const listIdColumns = columns.map((column) => column._id)
  return (
    <SortableContext
      items={listIdColumns}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'inherit',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            m: '0 10px'
          }
        }}
      >
        {columns?.map((column) => (
          <Column
            key={column._id}
            column={column}
            deleteColumnDetails={deleteColumnDetails}
            createNewCard={createNewCard}
          />
        ))}
        {!openNewColumnForm ? (
          <Box
            onClick={() =>
              setOpenNewColumnForm(!openNewColumnForm)
            }
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d'
            }}
          >
            <Button
              startIcon={<AddBoxIcon />}
              sx={{
                color: 'white',
                paddingTop: 1,
                width: '100%'
              }}
            >
              App new column
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <TextField
              label="Enter column title..."
              type="text"
              size="small"
              variant="outlined"
              autoFocus
              value={newColumnTitle}
              onChange={(e) =>
                setNewColumnTitle(e.target.value)
              }
              sx={{
                marginTop: '2px',
                minWidth: 120,
                '& label': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& input': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  fieldset: { borderColor: 'white' },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white'
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
                onClick={addNewColumn}
              >
                Add column
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
                onClick={() => setOpenNewColumnForm(false)}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ListColumns
