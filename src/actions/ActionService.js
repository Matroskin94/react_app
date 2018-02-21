export function rebuildQueriesList(queries, query) {
    const searchProperty = query.place_name ? query.place_name : query.centre_point;
    const currentQuery = queries.find(element => element.address === searchProperty);
    const newQueryList = currentQuery ?
        [currentQuery, ...queries.filter(item => currentQuery !== item)] :
        [{
            address: searchProperty,
            matches: query.resultsNum,
            loactionBased: query.locationBased
        }, ...queries];

    return newQueryList;
}

export function deleteFromFavorite(favorites, item) {
    return favorites.filter(element => element.key !== item.key);
}

const locationSucces = resolve => result => {
    const { longitude: lng, latitude: lat } = result.coords;
    const coordinates = `${lng},${lat}`;

    return resolve(coordinates);
};

const locationError = reject => err => reject(err);

export class GeolocationService {
    getCoordinates = () => (
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(locationSucces(resolve), locationError(reject));
        })
            .catch(err => {
                console.log('Geolocation error:', err);
            }));
}
