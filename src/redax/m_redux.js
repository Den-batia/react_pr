import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import {oneReduser} from './one-reduser'
import { reducer as formReducer } from 'redux-form'
import thunkMidleware from 'redux-thunk'
let redusers = combineReducers({
    one: oneReduser,
    form: formReducer,
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMidleware)))
// let store = createStore(redusers)

window.store = store;

export default store
