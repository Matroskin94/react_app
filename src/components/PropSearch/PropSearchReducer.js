import { GO_PRESSED, LOCATION_PRESSED, QUERY_SELECTED } from '../../constants/constants';
import filterByAddress from '../../actions/ActionService';

const initialState = {
    queries: [],
    locations: [],
    queryRessults: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case LOCATION_PRESSED: {
            return { ...state };
        }
        case QUERY_SELECTED: {
            return {
                ...state,
                queryRessults: action.payload.results,
                searchWord: action.payload.word
            };
        }

        case GO_PRESSED: {
            const newQueryList = filterByAddress(
                state.queries,
                action.payload
            );

            return {
                ...state,
                queries: newQueryList

            };
        }
        default: {
            return { ...state };
        }
    }
}
