import { combineReducers } from 'redux';
import PorpSearchReducer from './components/PropSearch/PropSearchReducer.js';

export default combineReducers({
    search_queries: PorpSearchReducer
});
