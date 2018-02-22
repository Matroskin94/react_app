export const extractData = data => {
    const result = data.response.listings.map((item, index) => ({
        key: index + item.title,
        isFavorite: false,
        title: item.title,
        img_url: item.img_url,
        thumb_url: item.thumb_url,
        lister_url: item.lister_url,
        price: item.price,
        price_currency: item.price_currency,
        summary: item.summary,
        bathroom_number: item.bathroom_number,
        bedroom_number: item.bedroom_number,
        car_spaces: item.car_spaces
    }));

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
    const favoritesList = localStorage.getItem('favoritesList') ?
        localStorage.getItem('favoritesList') : '[]';
    const favoritesArray = JSON.parse(favoritesList);

    item.isFavorite = true;
    favoritesArray.push(item);
    localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
};

export const getFavoritesFromLocal = () => {
    const favoritesList = localStorage.getItem('favoritesList') ?
        localStorage.getItem('favoritesList') : '[]';

    return JSON.parse(favoritesList);
};

export const deleteFavoriteFromLocal = dellItem => {
    const favoritesList = localStorage.getItem('favoritesList') ?
        localStorage.getItem('favoritesList') : '[]';
    const resultList = JSON.parse(favoritesList).filter(item => item.key !== dellItem.key);

    localStorage.setItem('favoritesList', JSON.stringify(resultList));
};
