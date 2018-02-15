import { combineReducers } from 'redux';
import PorpSearchReducer from './components/PropSearch/PropSearchReducer';
import DetailsReducer from './components/Details/DetailsReducer';

export default combineReducers({
    detailsReducer: DetailsReducer,
    searchReducer: PorpSearchReducer
});
