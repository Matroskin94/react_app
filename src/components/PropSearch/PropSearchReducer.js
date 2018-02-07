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

            newState.queryRess = findAddress(newState.locations, action.payload, false);

            return newState;
        }
        default: {
            return state;
        }  
    }
}
