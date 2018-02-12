import { combineReducers } from 'redux';
import PorpSearchReducer from './components/PropSearch/PropSearchReducer';

export default combineReducers({
    searchReducer: PorpSearchReducer
});
