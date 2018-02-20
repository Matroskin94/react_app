export function rebuildQueriesList(queries, query) {
    const newQuery = queries.find(element => element.address === query.word);
    const newQueryList = queries.slice();

    if (newQuery) {
        newQueryList.splice(newQueryList.indexOf(newQuery), 1);
        newQueryList.unshift(newQuery);
    } else {
        newQueryList.unshift({
            address: query.word,
            matches: query.resultsNum,
            locationBased: query.locationBased
        });
    }
    return newQueryList;
}

export function deleteFromFavorite(favorites, item) {
    return favorites.filter(element => element.key !== item.key);
}

export class GeolocationService {
    getCoordinates = () => (
        new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(result => {
                const { longitude: lng, latitude: lat } = result.coords;
                const coordinates = `${lng},${lat}`;

                resolve(coordinates);
            });
        }))
}
