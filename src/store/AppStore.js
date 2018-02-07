import { createStore, applyMiddleware  } from 'redux';
import combineReducers from '../reducers.js';
import logger from 'redux-logger';


export default function initStore() {
    const store = createStore(
        combineReducers,
        applyMiddleware(logger)
    );

    return store;
}
