import { EMAIL_CHANGED } from '../constants/constants'
const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { email: action.payload }
      break
    default:
      return state
  }
}