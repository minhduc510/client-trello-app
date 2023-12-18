import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      appBarHeight: React.CSSProperties['height']
      boardBarHeight: React.CSSProperties['height']
      boardContentHeight: React.CSSProperties['height']
      columnHeaderHeight: React.CSSProperties['height']
      columnFooterHeight: React.CSSProperties['height']
    }
  }
  interface ThemeOptions {
    trello?: {
      appBarHeight?: React.CSSProperties['height']
      boardBarHeight?: React.CSSProperties['height']
      boardContentHeight?: React.CSSProperties['height']
      columnHeaderHeight?: React.CSSProperties['height']
      columnFooterHeight?: React.CSSProperties['height']
    }
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    span: true
    h7: true
  }
}

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '58px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
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
      styleOverrides: {
        body: {
          'h1, h2, h3, h4, h5, h6, p': {
            margin: 0
          },
          '*::-webkit-scrollbar': {
            width: '7px',
            height: '7px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
            borderRadius: '5px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf'
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
            borderRadius: '5px'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '0.875rem'
          }
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
