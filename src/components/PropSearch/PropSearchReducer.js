import { GO_PRESSED, LOCATION_PRESSED, QUERY_SELECTED } from '../../constants/constants';
import filterByAddress from '../../actions/ActionService';

const initialState = {
    queries: [],
    locations: [],
    isLoadedTrigger: false,
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
                isLoadedTrigger: !state.isLoadedTrigger
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
                isLoadedTrigger: !state.isLoadedTrigger

            };
        }
        default: {
            return { ...state };
        }
    }
}
