import { Box } from '@mui/material'

const AppBar = () => {
  return (
    <>
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
    </>
  )
}

export default AppBar
