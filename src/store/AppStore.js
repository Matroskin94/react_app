import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import combineReducers from '../reducers';


export default function initStore() {
    const store = createStore(
        combineReducers,
        applyMiddleware(logger)
    );

    return store;
}
