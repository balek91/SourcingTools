export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incrementCounter = house => ({
  type: 'INCREMENT_COUNTER',
  payload: house
})

export const decrementCounter = house => ({
  type: 'DECREMENT_COUNTER',
  payload: house
})
