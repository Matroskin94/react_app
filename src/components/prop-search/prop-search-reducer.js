import { GO_PRESSED, LETTER_TYPED } from '../../constants/constants.js';
import { queries, savedLocations } from '../../data/data.json';
import { searchByAddress } from '../../actions/action-service.js';

const initialState = {
    query: queries,
    locations: savedLocations,
    queryRess: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case GO_PRESSED: {
            const res = searchByAddress(newState, action.payload);

            return {
                ...newState,
                queryRess: res.queryRess,
                query: res.query
            };
        }
        case LETTER_TYPED: {
            return { ...newState, searchWord: action.payload };
        }
        default: {
            return state;
        }  
    }
}
