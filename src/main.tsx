import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ConfirmProvider } from 'material-ui-confirm'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

import App from './App.tsx'
import theme from './theme.ts'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <ConfirmProvider
      defaultOptions={{
        dialogProps: { maxWidth: 'xs' },
        cancellationButtonProps: { color: 'inherit' },
        confirmationButtonProps: {
          color: 'secondary',
          variant: 'outlined'
        }
      }}
    >
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </ConfirmProvider>
  </React.StrictMode>
)
