import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store, {history} from './redux'
import { ConnectedRouter } from 'connected-react-router'
import { Notify } from 'react-redux-notify';
import Pingponggame from './Pingponggame'
import "./App.css";

class App extends Component {
  
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <Provider store={store}>
          <ConnectedRouter history={history} forceRefresh={!supportsHistory}>
              <Pingponggame/>
              <Notify/>
          </ConnectedRouter>
      </Provider>
    )
  }
}
export default App;
