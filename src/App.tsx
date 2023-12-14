import { Box, Container } from '@mui/material'

function App() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: '100vh'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: (theme) => theme.trello.appBarHeight,
            backgroundColor: 'primary.light',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <h1>App Bar</h1>
        </Box>
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
      </Container>
    </>
  )
}

export default App
