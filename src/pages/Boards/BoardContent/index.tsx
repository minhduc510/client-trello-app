import { Box } from '@mui/material'

const BoardContent = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: (theme) =>
            `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h1>Board Content</h1>
      </Box>
    </>
  )
}

export default BoardContent
