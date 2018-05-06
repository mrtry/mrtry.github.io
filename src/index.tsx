import * as React from 'react'
import { render } from 'react-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiTypography: {
      headline: {
        color: 'teal',
        marginTop: '16px',
        marginBottom: '16px',
      },
      title: {
        marginTop: '16px',
        marginBottom: '16px',
      },
    },
  },
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
)

render(
  <Root />,
  document.getElementById('root') as HTMLElement,
)

registerServiceWorker()