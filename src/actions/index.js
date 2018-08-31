import firebase from 'firebase'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
} from '../constants/constants'

export const emailChanged = text => ({ type: EMAIL_CHANGED, payload: text })
export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
})

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(err => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user)
          })
          .catch(err => loginUserFail(dispatch, err))
      })
  }
}

function loginUserSuccess(dispatch, user) {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  })
}

function loginUserFail(dispatch, err) {
  dispatch({ type: LOGIN_USER_FAIL, payload: err })
}
