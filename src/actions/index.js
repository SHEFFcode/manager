import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../constants/constants'

export const emailChanged = text => ({ type: EMAIL_CHANGED, payload: text })
export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
})
