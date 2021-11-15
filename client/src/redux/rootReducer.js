import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import notifyReducer from 'react-redux-notify'
/**
 * All reducers must be imported here
 */
import * as auth from './modules/auth/reducer'
/**
 * current.name is the name defined in the reducer.js
 * current.default is the default export from the reducer file
 */
const allReducers = [
  auth,
].reduce((all, current) => {
  return Object.assign({}, all, { [current.namespace]: current.default })
}, {})

export default history =>
  combineReducers({
    ...allReducers,
    router: connectRouter(history),
    notifications: notifyReducer
  })
