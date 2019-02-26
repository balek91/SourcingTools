import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './config/store'
import Routes from './config/routes'

class App extends React.Component {
  state = {
    connectedTheme: store.getState()
  }

  componentDidMount() {
    store.subscribe(() => this.setState({ connectedTheme: store.getState() }))
  }

  render() {
    const { connectedTheme } = this.state
    return (
      <ThemeProvider theme={connectedTheme.themes.currentTheme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
