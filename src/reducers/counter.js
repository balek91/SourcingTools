import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actions/counter'

const initialState = {
  gryffindor: 0,
  slytherin: 0,
  ravenclaw: 0,
  hufflepuff: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        [action.payload]: state[action.payload] + 1
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        [action.payload]: state[action.payload] - 1
      }
    default:
      return state
  }
}
