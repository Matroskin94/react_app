import { GO_PRESSED } from '../../constants/constants.js';
import { queries, savedLocations } from '../../data/data.json';

const initialState = {
    query: queries,
    locations: savedLocations,
    queryRess: []
};

const findAddress = (array, searchWord, strict) => {
    const ressArray = [];

    array.filter(element => {
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

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case GO_PRESSED: {
            const newState = Object.assign({}, state);
            const newQuery = findAddress(newState.query, action.payload, true);

            newState.queryRess = findAddress(newState.locations, action.payload, false);
            if (newQuery.length === 1) {
                newQuery[0].maches = newState.queryRess.length;
                newState.query.splice(newState.query.indexOf(newQuery[0]), 1);
                newState.query.unshift(newQuery[0]);
            } else {
                newState.query.unshift({ 'address': action.payload, 'maches': newState.queryRess.length });
            }

            return newState;
        }
        default: {
            return state;
        }  
    }
}
