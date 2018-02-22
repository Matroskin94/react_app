import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/constants';
import { addFavoriteToLocal, deleteFavoriteFromLocal } from '../utils/SearchUtils';

export function addFavoriteAction(item) {
    addFavoriteToLocal(item);
    return ({
        type: ADD_FAVORITE,
        payload: item
    });
}

export function deleteFavoriteAction(item) {
    deleteFavoriteFromLocal(item);
    return ({
        type: DELETE_FAVORITE,
        payload: item
    });
}
