import { GO_PRESSED, LOCATION_PRESSED, QUERY_SELECTED } from '../../constants/constants';
import filterByAddress from '../../actions/ActionService';

const initialState = {
    queries: [],
    locations: [],
    asyncTrigger: false,
    queryRessults: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case LOCATION_PRESSED: {
            const newState = filterByAddress(
                state.queries.slice(),
                state.locations.slice(),
                action.payload
            );

            return {
                ...state,
                queryRessults: newState.queryRessults,
                queries: newState.queries
            };
        }
        case QUERY_SELECTED: {
            return {
                ...state,
                queryRessults: action.payload.results,
                searchWord: action.payload.word,
                asyncTrigger: !state.asyncTrigger
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
                asyncTrigger: !state.asyncTrigger

            };
        }
        default: {
            return { ...state };
        }
    }
}
