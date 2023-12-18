import { Box } from '@mui/material'

import ListColumns from './ListColumns/ListColumns'

const BoardContent = () => {
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
        <ListColumns />
      </Box>
    </>
  )
}

export default BoardContent
