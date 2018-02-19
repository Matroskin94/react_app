import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/constants';

export function addFavoriteAction(item) {
    item.isFavorite = true;
    return ({
        type: ADD_FAVORITE,
        payload: item
    });
}

export function deleteFavoriteAction(item) {
    item.isFavorite = false;
    return ({
        type: DELETE_FAVORITE,
        payload: item
    });
}
