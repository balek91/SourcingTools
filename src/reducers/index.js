import { combineReducers } from 'redux'
import counter from './counter'
import search from './search'
import themes from './themes'

export default combineReducers({
  counter,
  search,
  themes
})
