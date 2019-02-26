import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import reducers from '../reducers'

// used for async func use on redux
// import thunk from 'redux-thunk'

export const store = createStore(reducers, applyMiddleware(logger))
