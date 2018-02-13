import { GO_PRESSED, LETTER_TYPED } from '../../constants/constants';
import { queries, locations } from '../../data/data.json';
import filterByAddress from '../../actions/ActionService';

const initialState = {
    query: queries,
    location: locations,
    queryRess: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case GO_PRESSED: {
            const newState = filterByAddress({
                query: state.query,
                locations: state.location
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
            return { ...state };
        }
    }
}
