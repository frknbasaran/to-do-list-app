import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import auth from './auth';
import task from './task';

export default combineReducers({
    auth,
    task,
    routing:routerReducer
})