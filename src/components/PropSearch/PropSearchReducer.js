import { GO_PRESSED, LETTER_TYPED } from '../../constants/constants';
import { queries, locations } from '../../data/data.json';
import { searchByAddress } from '../../actions/ActionService';

const initialState = {
    query: queries,
    location: locations,
    queryRess: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case GO_PRESSED: {
            newState = searchByAddress({
                query: newState.query,
                locations: newState.location,
                queryRess: newState.queryRess
            }, action.payload);
            return {
                ...state,
                queryRess: newState.queryRess,
                query: newState.query
            };
        }
        case LETTER_TYPED: {
            return { ...state, searchWord: action.payload };
        }
        default: {
            return newState;
        }
    }
}
