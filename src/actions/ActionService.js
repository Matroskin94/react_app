export function rebuildQueriesList(queries, query) {
    const searchProperty = query.place_name ? query.place_name : query.centre_point;
    const newQuery = queries.find(element => element.address === searchProperty);
    const newQueryList = newQuery ?
        [].concat(newQuery)
            .concat(queries.slice(0, queries.indexOf(newQuery)))
            .concat(queries.slice(queries.indexOf(newQuery) + 1)) :
        [].concat({
            address: searchProperty,
            matches: query.resultsNum,
            loactionBased: query.locationBased
        }).concat(queries.slice());

    return newQueryList;
}

export function deleteFromFavorite(favorites, item) {
    return favorites.filter(element => element.key !== item.key);
}

export class GeolocationService {
    getCoordinates = () => (
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(result => {
                const { longitude: lng, latitude: lat } = result.coords;
                const coordinates = `${lng},${lat}`;

                resolve(coordinates);
            });
        })
            .catch(err => {
                console.log('Geolocation error:', err);
            }));
}
