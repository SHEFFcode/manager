import { EMAIL_CHANGED } from '../constants/constants'

export const emailChanged = text => ({ type: EMAIL_CHANGED, payload: text })
