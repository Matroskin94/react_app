import { GO_PRESSED, LOCATION_PRESSED, QUERY_SELECTED, ADD_FAVORITE, DELETE_FAVORITE } from '../../constants/constants';
import { rebuildQueriesList, deleteFromFavorite } from '../../actions/ActionService';
import { getFavoritesFromLocal } from '../../utils/SearchUtils';

const initialState = {
    queries: [],
    locations: [],
    queryRessults: [],
    favorites: getFavoritesFromLocal(),
    userLocation: {},
    isLoading: false,
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
        case QUERY_SELECTED: {
            return {
                ...state,
                isLoading: false,
                queryRessults: action.payload.results,
                searchWord: action.payload.word
            };
        }

        default: {
            return { ...state };
        }
    }
}
