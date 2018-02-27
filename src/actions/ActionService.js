import shallowequal from 'shallowequal';

export function rebuildQueriesList(queries, query) {
    const currentQuery = queries.find(element => shallowequal(element.address, query.address));
    const queryList = currentQuery ?
        [currentQuery, ...queries.filter(item => !shallowequal(currentQuery.address, item.address))] :
        [query, ...queries];

    return queryList;
}

export function deleteFromFavorite(favorites, item) {
    return favorites.filter(element => element.key !== item.key);
}

export function geolocationService() {
    const locationError = reject => err => reject(err);
    const locationSucces = resolve => result => {
        const { longitude: lng, latitude: lat } = result.coords;
        const coordinates = `${lng},${lat}`;

        return resolve(coordinates);
    };

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(locationSucces(resolve), locationError(reject));
    });
}
