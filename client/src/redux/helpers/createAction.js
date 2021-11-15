// https://redux.js.org/recipes/reducing-boilerplate#generating-action-creators
function createAction(namespace, name, data) {
    const type = `${namespace}/${name}`
    let action = payload => ({ type, payload })
    if (data) {
      action = (...args) => ({ type, payload: data(...args) })
    }
    action.Type = type
    return action
  }
export default createAction