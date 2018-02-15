import { GO_PRESSED, LETTER_TYPED, LOCATION_PRESSED } from '../../constants/constants';
import { queries, locations } from '../../data/data.json';
import filterByAddress from '../../actions/ActionService';

const initialState = {
    queries,
    locations,
    queryRessults: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case GO_PRESSED: {
            const newState = filterByAddress(
                state.queries,
                state.locations,
                action.payload
            );

            return {
                ...state,
                queryRessults: newState.queryRessults,
                queries: newState.queries
            };
        }
        case LOCATION_PRESSED: {
            return {
                ...state,
                queryRessults: action.payload
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
