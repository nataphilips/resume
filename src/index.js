import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styleguide/global'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById('root')
)

serviceWorker.unregister()
