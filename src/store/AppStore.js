import { createStore, applyMiddleware  } from 'redux';
import combineReducers from '../reducers.js';
import logger from 'redux-logger';


export default function initStore() {
    const initialState = {
        search_queries: []
    };
    const store = createStore(
        combineReducers,
        initialState,
        applyMiddleware(logger)
    );

    return store;
}
