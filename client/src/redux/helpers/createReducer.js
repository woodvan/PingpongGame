/* eslint-disable no-prototype-builtins */
// https://redux.js.org/recipes/reducing-boilerplate#generating-reducers
function createReducer(name, initialState, handlers) {
    function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
      }
      return state
    }
    return reducer
  }
export default createReducer 