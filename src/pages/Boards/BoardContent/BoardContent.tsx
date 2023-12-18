import { Box } from '@mui/material'

import ListColumns from './ListColumns/ListColumns'
import { BoardProps } from '@/interface'
import { mapOrder } from '@/utils/sorts'

interface IProps {
  board: BoardProps
}

const BoardContent = ({ board }: IProps) => {
  const orderedColumns = mapOrder(
    board?.columns,
    board?.columnOrderIds,
    '_id'
  )
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
        <ListColumns columns={orderedColumns} />
      </Box>
    </>
  )
}

export default BoardContent
