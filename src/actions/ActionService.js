export default function filterByAddress(queries, query) {
    const newQuery = queries.find(element => element.address === query.word);
    const newQueryList = queries.slice();

    if (newQuery) {
        newQueryList.splice(newQueryList.indexOf(newQuery), 1);
        newQueryList.unshift(newQuery);
    } else {
        newQueryList.unshift({ address: query.word, matches: query.resultsNum });
    }
    return newQueryList;
}
