const findAddress = (array, searchWord, strict) => {
    const ressArray = [];

    array.forEach(element => {
        if (!strict) {
            let foundPos = -1;

            foundPos = element.address.indexOf(searchWord, 0);
            if (foundPos >= 0) {
                ressArray.push(element);
            }
        } else if (element.address === searchWord) {
            ressArray.push(element);
        }
    });

    return ressArray;
};

export function searchByAddress(state, text) {
    const newQuery = findAddress(state.query, text, true);

    state.queryRess = findAddress(state.locations, text, false);
    if (newQuery.length === 1) {
        newQuery[0].matches = state.queryRess.length;
        state.query.splice(state.query.indexOf(newQuery[0]), 1);
        state.query.unshift(newQuery[0]);
    } else {
        state.query.unshift({ 'address': text, 'matches': state.queryRess.length });
    }
    return state;
}

