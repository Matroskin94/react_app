import { GO_PRESSED, QUERY_LINK, QUERY_SELECTED } from '../constants/constants';
import { checkError, extractData } from '../utils/SearchUtils';

export const searchResultAction = (word, resultsNum) => {
    return ({
        type: GO_PRESSED,
        payload: {
            word,
            resultsNum
        }
    });
};

export const chooseQueryAction = (results, word) => {
    return ({
        type: QUERY_SELECTED,
        payload: {
            results,
            word
        }
    });
};

export const searchAction = dispatch => text => {
    fetch(`${QUERY_LINK + text}`)
        .then(response => response.json())
        .then((response, reject) => {
            const error = checkError(response);

            if (!error) {
                dispatch(searchResultAction(text, response.response.total_results));
            }
        })
        .catch(reject => {
            console.log('REJECTED', reject);
        });
    return {
        type: 'SEARCH_PROCESS',
        payload: ''
    };
};

export const chooseLocationsAction = dispatch => text => {
    fetch(`${QUERY_LINK + text}`)
        .then(response => response.json())
        .then((response, reject) => {
            const error = checkError(response);

            if (!error) {
                const results = extractData(response);

                dispatch(chooseQueryAction(results, text));
            }
        })
        .catch(reject => {
            console.log('REJECTED', reject);
        });
    return {
        type: 'CHOOSING_LOCATION_PROCESS',
        payload: ''
    };
};
