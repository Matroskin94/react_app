import filterAddreses from '../utils/SearchUtils';

export default function filterByAddress({ query, locations }, text) {
    const newQuery = filterAddreses(query, text, true);
    var queryRess = filterAddreses(locations, text, false);

    if (newQuery.length === 1) {
        newQuery[0].matches = queryRess.length;
        query.splice(query.indexOf(newQuery[0]), 1);
        query.unshift(newQuery[0]);
    } else {
        query.unshift({ address: text, matches: queryRess.length });
    }
    return { query, locations, queryRess };
}

