import { GO_PRESSED, LOCATION_PRESSED, ADD_FAVORITE, DELETE_FAVORITE,
    INIT_FAVORITE, QUERY_SELECTED, LOADING_STARTED, CLEAR_RESULTS,
    QUERY_DATA_FROM_LOCAL } from '../../constants/constants';
import { rebuildQueriesList, deleteFromFavorite } from '../../actions/ActionService';

const initialState = {
    queries: [],
    queryRessults: [],
    favorites: [],
    currentPage: 0,
    currentQueryInfo: {},
    isLoading: false,
    isFavoritesLoaded: false,
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case GO_PRESSED: {
            const query = rebuildQueriesList(
                state.queries,
                action.payload
            );

            return {
                ...state,
                isLoading: false,
                queries: query,
                currentQueryInfo: action.payload

            };
        };
        case LOADING_STARTED: {
            return {
                ...state,
                isLoading: action.payload
            };
        };
        case LOCATION_PRESSED: {
            return {
                ...state,
                isLoading: false,
                queryRessults: { ...action.results }
            };
        };
        case ADD_FAVORITE: {
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            };
        };
        case DELETE_FAVORITE: {
            action.payload.isFavorite = false;
            return {
                ...state,
                favorites: deleteFromFavorite(
                    state.favorites,
                    action.payload
                )
            };
        };
        case INIT_FAVORITE: {
            return {
                ...state,
                favorites: action.payload,
                isFavoritesLoaded: true
            };
        };
        case QUERY_DATA_FROM_LOCAL: {
            return {
                ...state,
                currentQueryInfo: action.payload
            };
        };
        case QUERY_SELECTED: {
            return {
                ...state,
                isLoading: false,
                queryRessults: state.queryRessults.concat(action.payload.results),
                searchWord: action.payload.word,
                currentPage: action.payload.currentPage
            };
        };
        case CLEAR_RESULTS: {
            return {
                ...state,
                queryRessults: []
            };
        };

        default: {
            return { ...state };
        };
    }
}
