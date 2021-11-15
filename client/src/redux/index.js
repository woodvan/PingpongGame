import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import thunkMiddleware from 'redux-thunk'

import reducer from './rootReducer'

export const history = createBrowserHistory()

export default createStore(
  reducer(history),
  composeWithDevTools(
    applyMiddleware(...[thunkMiddleware, routerMiddleware(history)]),
  ),
)
