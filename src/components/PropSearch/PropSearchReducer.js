import { GO_PRESSED, LOCATION_PRESSED, QUERY_SELECTED, ADD_FAVORITE, INIT_FAVORITE, DELETE_FAVORITE } from '../../constants/constants';
import { rebuildQueriesList, deleteFromFavorite } from '../../actions/ActionService';

const initialState = {
    queries: [],
    queryRessults: [],
    favorites: [],
    currentPage: 0,
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
                queries: query

            };
        }
        case 'LOADING_STARTED': {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        case LOCATION_PRESSED: {
            return {
                ...state,
                isLoading: false,
                queryRessults: { ...action.results }
            };
        }
        case ADD_FAVORITE: {
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            };
        }
        case DELETE_FAVORITE: {
            action.payload.isFavorite = false;
            return {
                ...state,
                favorites: deleteFromFavorite(
                    state.favorites,
                    action.payload
                )
            };
        }
        case INIT_FAVORITE: {
            return {
                ...state,
                favorites: action.payload,
                isFavoritesLoaded: true
            };
        }
        case QUERY_SELECTED: {
            return {
                ...state,
                isLoading: false,
                queryRessults: action.payload.results,
                searchWord: action.payload.word,
                currentPage: action.payload.currentPage
            };
        }

        default: {
            return { ...state };
        }
    }
}
