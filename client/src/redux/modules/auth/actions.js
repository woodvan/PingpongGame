import {
  setAuthenticating,
  setAuthenticated,
  setPlayers,
} from './reducer'
import { push } from 'connected-react-router'
import API from "../../../services/API";
import {
  sendSuccessNotification,
  sendErrorNotification
} from '../../../services/Notification';
import {apiurl} from "../../../config";

/**
 * fetch current user info
 */
 export const fetchCurrentUser = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(setAuthenticating(true))
      API.get(`${apiurl}/list/`)
      .then(response=>{
        dispatch(setPlayers(response.data))
        dispatch(setAuthenticated(true))
        dispatch(setAuthenticating(false))
        resolve(response)
      })
      .catch(error=>{
        dispatch(setAuthenticating(false))
        reject(error)
      })
    })
  }
}

export const register = ((payload) => {
  return async dispatch => {
    return new Promise(async (resolve, reject)=>{
      API.post(`${apiurl}/list/`, payload)
      .then(response=>{
        dispatch(setPlayers(response.data));
        dispatch(sendSuccessNotification("New player was added successfully"));
        dispatch(push(`/`));
        resolve(response);
      })
      .catch(error=>{
        dispatch(sendErrorNotification("Unfortunately, new player was not added"));
        reject(error)
      })
    })
  }
})

export const matchGame = ((payload) => {
  return async dispatch => {
    return new Promise(async (resolve, reject)=>{
      API.post(`${apiurl}/match/`, payload)
      .then(response=>{
        dispatch(setPlayers(response.data));
        dispatch(sendSuccessNotification("Match result was added successfully"));
        dispatch(push(`/ranking`));
        resolve(response);
      })
      .catch(error=>{
        dispatch(sendErrorNotification("Unfortunately, match result was not added"));
        reject(error)
      })
    })
  }
})