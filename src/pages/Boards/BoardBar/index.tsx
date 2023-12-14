import { Box } from '@mui/material'

const BoardBar = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trello.boardBarHeight,
          backgroundColor: 'primary.dark',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h1>Board Bar</h1>
      </Box>
    </>
  )
}

export default BoardBar
