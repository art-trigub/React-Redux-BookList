import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(thunkMiddleware))