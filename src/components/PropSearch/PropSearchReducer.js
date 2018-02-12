import { GO_PRESSED, LETTER_TYPED } from '../../constants/constants.js';
import { queries, savedLocations } from '../../data/data.json';
import { searchByAddress } from '../../actions/ActionService.js';

const initialState = {
    query: queries,
    locations: savedLocations,
    queryRess: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case GO_PRESSED: {
            newState = searchByAddress(newState, action.payload);

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
            return state;
        }
    }
}
