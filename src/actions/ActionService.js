import { filterAddreses } from '../utils/SearchUtils';

export default function filterByAddress(queries, locations, text) {
    const newQuery = filterAddreses(queries, text, true);
    const queryRessults = filterAddreses(locations, text, false);

    if (newQuery.length === 1) {
        newQuery[0].matches = queryRessults.length;
        queries.splice(queries.indexOf(newQuery[0]), 1);
        queries.unshift(newQuery[0]);
    } else {
        queries.unshift({ address: text, matches: queryRessults.length });
    }
    return { queries, queryRessults };
}
