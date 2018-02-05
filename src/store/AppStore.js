import { createStore } from 'redux';
import combineReducers from '../reducers.js';

export default function initStore(initialState) {
    const store = createStore(
        combineReducers,
        initialState
    );

    return store;
}
