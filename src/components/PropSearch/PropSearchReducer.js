import { GO_PRESSED, LOCATION_PRESSED, QUERY_SELECTED } from '../../constants/constants';
import filterByAddress from '../../actions/ActionService';

const initialState = {
    queries: [],
    locations: [],
    isLoadedQueries: false,
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
                searchWord: action.payload.word,
                isLoadedQueries: !state.isLoadedQueries
            };
        }

        case GO_PRESSED: {
            const newState = state.queries;
            const newObj = filterByAddress(
                newState,
                action.payload
            );

            return {
                ...state,
                queries: newObj,
                isLoadedQueries: !state.isLoadedQueries

            };
        }
        default: {
            return { ...state };
        }
    }
}
