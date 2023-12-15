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

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    span: true
  }
}

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {}
    },
    dark: {
      palette: {
        primary: {
          main: '#333232'
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
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '&:hover fieldset': {
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px !important'
          }
        }
      }
    }
  }
  // ...other properties
})

export default theme
