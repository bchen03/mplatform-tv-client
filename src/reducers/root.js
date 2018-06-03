import {combineReducers} from 'redux'
import {testReducer} from './test'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    test: testReducer,
    form: formReducer
});

export default rootReducer


