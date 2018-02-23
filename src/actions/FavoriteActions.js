import { ADD_FAVORITE, DELETE_FAVORITE, INIT_FAVORITE } from '../constants/constants';

export function addFavoriteAction(item) {
    const favoritesList = localStorage.getItem('favoritesList');
    const favoritesArray = favoritesList ? JSON.parse(favoritesList) : [];

    item.isFavorite = true;
    favoritesArray.push(item);
    localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
    return ({
        type: ADD_FAVORITE,
        payload: item
    });
}

export function deleteFavoriteAction(dellItem) {
    const favoritesList = localStorage.getItem('favoritesList');
    const resultList = JSON.parse(!favoritesList ? [] : favoritesList).filter(item => item.key !== dellItem.key);

    localStorage.setItem('favoritesList', JSON.stringify(resultList));
    return ({
        type: DELETE_FAVORITE,
        payload: dellItem
    });
}

export function initFavoritesAction() {
    const favoritesList = localStorage.getItem('favoritesList');


    return ({
        type: INIT_FAVORITE,
        payload: favoritesList ? JSON.parse(favoritesList) : []
    });
}
