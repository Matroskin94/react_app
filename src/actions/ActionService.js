import { filterAddreses } from '../utils/SearchUtils';

export default function filterByAddress(queries, query) {
    const newQuery = filterAddreses(queries, query.word);

    if (newQuery) {
        queries.splice(queries.indexOf(newQuery), 1);
        queries.unshift(newQuery);
    } else {
        queries.unshift({ address: query.word, matches: query.resultsNum });
    }
    return queries;
}
