import { EMPLOYEE_UPDATE } from '../constants/constants'

const INITIAL_STATE = { name: '', phone: '', shift: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
