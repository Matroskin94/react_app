import { GO_PRESSED, LOCATION_PRESSED, QUERY_SELECTED, ADD_FAVORITE, DELETE_FAVORITE } from '../../constants/constants';
import { filterByAddress, deleteFromFavorite } from '../../actions/ActionService';

const initialState = {
    queries: [],
    locations: [],
    queryRessults: [],
    favorites: [],
    searchWord: ''
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case LOCATION_PRESSED: {
            return { ...state };
        }
        case ADD_FAVORITE: {
            const newFavorites = state.favorites.slice();

            newFavorites.unshift(action.payload);
            return {
                ...state,
                favorites: newFavorites
            };
        }
        case DELETE_FAVORITE: {
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
