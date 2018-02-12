import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import combineReducers from '../Reducers';


export default function initStore() {
    const store = createStore(
        combineReducers,
        applyMiddleware(logger)
    );

    return store;
}
