import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      appBarHeight: React.CSSProperties['height']
      boardBarHeight: React.CSSProperties['height']
    }
  }
  interface ThemeOptions {
    trello?: {
      appBarHeight?: React.CSSProperties['height']
      boardBarHeight?: React.CSSProperties['height']
    }
  }
}

const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#5C8374',
          light: '#93B1A6',
          dark: '#183D3D',
          contrastText: '#fff'
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1, h2, h3, h4, h5, h6, p {
          margin: 0;
        }
      `
    }
  }
  // ...other properties
})

export default theme