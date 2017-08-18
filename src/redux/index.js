import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import ApiClient from '../utils/ApiClient'
import httpMiddleware from '../utils/Http'

const apiClient = new ApiClient();

const middleware = [
    thunk,
    httpMiddleware(apiClient)
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    autoRehydrate()
)

const _store = createStore(
    rootReducer,
    {},
    composedEnhancers
)

let _persistor = persistStore(_store);

export const persistor = _persistor;
const store = _store;
export default store;