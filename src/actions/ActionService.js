import findAddress from '../utils/SearchUtils';

export function searchByAddress({ query, locations, queryRess }, text) {
    const newQuery = findAddress(query, text, true);

    queryRess = findAddress(locations, text, false);
    if (newQuery.length === 1) {
        newQuery[0].matches = queryRess.length;
        query.splice(query.indexOf(newQuery[0]), 1);
        query.unshift(newQuery[0]);
    } else {
        query.unshift({ 'address': text, 'matches': queryRess.length });
    }
    return { query, locations, queryRess };
}

