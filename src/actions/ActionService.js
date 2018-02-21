export function rebuildQueriesList(queries, query) {
    const searchProperty = query.place_name ? query.place_name : query.centre_point;
    const currentQuery = queries.find(element => element.address === searchProperty);
    const queryList = currentQuery ?
        [currentQuery, ...queries.filter(item => currentQuery !== item)] :
        [{
            address: searchProperty,
            matches: query.resultsNum,
            loactionBased: query.locationBased
        }, ...queries];

    return queryList;
}

export function deleteFromFavorite(favorites, item) {
    return favorites.filter(element => element.key !== item.key);
}

export class GeolocationService {
    locationError = reject => err => reject(err);
    locationSucces = resolve => result => {
        const { longitude: lng, latitude: lat } = result.coords;
        const coordinates = `${lng},${lat}`;

        return resolve(coordinates);
    }
    getCoordinates = () => (
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(this.locationSucces(resolve), this.locationError(reject));
        })
            .catch(err => {
                console.log('Geolocation error:', err);
            }));
}
