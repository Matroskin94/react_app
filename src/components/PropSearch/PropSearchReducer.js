import { GO_PRESSED, LETTER_TYPED } from '../../constants/constants.js';
import { queries, savedLocations } from '../../data/data.json';

const initialState = {
    query: queries,
    locations: savedLocations,
    queryRess: [],
    searchWord: ''
};

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

export default function PropSearchReducer(state = initialState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case GO_PRESSED: {          
            const newQuery = findAddress(newState.query, action.payload, true);

            newState.queryRess = findAddress(newState.locations, action.payload, false);
            if (newQuery.length === 1) {
                newQuery[0].matches = newState.queryRess.length;
                newState.query.splice(newState.query.indexOf(newQuery[0]), 1);
                newState.query.unshift(newQuery[0]);
            } else {
                newState.query.unshift({ 'address': action.payload, 'matches': newState.queryRess.length });
            }

            return { ...newState, queryRess: newState.queryRess, query: newState.query };
        }
        case LETTER_TYPED: {
            return { ...newState, searchWord: action.payload };
        }
        default: {
            return state;
        }  
    }
}
