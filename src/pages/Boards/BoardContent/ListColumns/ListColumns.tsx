import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { ColumnProps } from '@/interface'

interface IProps {
  columns: ColumnProps[]
}

const ListColumns = ({ columns }: IProps) => {
  return (
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
        <Column key={column._id} column={column} />
      ))}

      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
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
    </Box>
  )
}

export default ListColumns
