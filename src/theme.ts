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
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
            borderWidth: '1px !important'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          }
        })
      }
    }
  }
  // ...other properties
})

export default theme
