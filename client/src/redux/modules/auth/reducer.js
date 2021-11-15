import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'auth'

// =======================================
// Default state
// =======================================
const defaultState = {
  authenticating: true,
  authenticated: false,
  currentUser: null,
  setting: {
    working_hours_per_day: 0
  },
  error: null
}

// =======================================
// Action creators
// =======================================
export const setAuthenticating = createAction(namespace, 'SET_AUTHENTICATING')
export const setAuthenticated = createAction(namespace, 'SET_AUTHENTICATED')
export const setCurrentUser = createAction(namespace, 'SET_CURRENT_USER')
export const setPlayers = createAction(namespace, 'SET_PLAYERS')
export const setError = createAction(namespace, 'SET_ERROR')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setAuthenticating.Type]: (state, action) => ({
    ...state,
    authenticating: action.payload
  }),
  [setAuthenticated.Type]: (state, action) => ({
    ...state,
    authenticated: action.payload
  }),
  [setCurrentUser.Type]: (state, action) => ({
    ...state,
    currentUser: action.payload,
    error: null
  }),
  [setPlayers.Type]: (state, action) => ({
    ...state,
    players: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    currentUser: null,
    error: action.payload
  })
})

export default reducer
