import { pick } from 'ramda';

const filterArray = array => {
    const keysArray = ['title', 'img_url', 'thumb_url', 'lister_url', 'price', 'price_currency',
        'summary', 'bathroom_number', 'bedroom_number', 'car_spaces'];

    return array.map(item => {
        const resultObject = pick(keysArray, item);

        return Object.keys(resultObject).length === keysArray.length ?
            { ...resultObject, isFavorite: false } : false;
    }).filter(item => item !== false);
};

export const extractData = data => {
    const result = Array.isArray(data) ? filterArray(data) : [];

    return result;
};

export const checkError = data => {
    const { application_response_code: responseCode } = data.response;
    const errors = {
        200: 'ambiguous location',
        201: 'unknown location',
        202: 'misspelled location',
        210: 'coordinate error',
        500: 'internal Nestoria error',
        900: 'bad request'
    };
    const error = errors[responseCode];

    if (error) {
        return {
            responseCode,
            responseText: error
        };
    }
    return false;
};

export const noop = () => {};

export const addFavoriteToLocal = item => {
    const favoritesList = localStorage.getItem('favoritesList');
    const favoritesArray = favoritesList ? JSON.parse(favoritesList) : [];

    item.isFavorite = true;
    favoritesArray.push(item);
    localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
};

export const getFavoritesFromLocal = () => {
    const favoritesList = localStorage.getItem('favoritesList');

    return favoritesList ? JSON.parse(favoritesList) : [];
};

export const deleteFavoriteFromLocal = dellItem => {
    const favoritesList = localStorage.getItem('favoritesList');
    const resultList = JSON.parse(!favoritesList ? [] : favoritesList).filter(item => item.title !== dellItem.key);

    localStorage.setItem('favoritesList', JSON.stringify(resultList));
};
