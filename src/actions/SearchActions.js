import { GO_PRESSED, LOCATION_PRESSED } from '../constants/constants';
import { extractData, checkError } from '../utils/SearchUtils';

export function searchAction(text) {
    return ({
        type: GO_PRESSED,
        payload: text
    });
}

export function locationsResultAction(data) {
    return ({
        type: LOCATION_PRESSED,
        payload: data
    });
}

export const searchLocationsAction = dispatch => text => {
    fetch(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${text}`)
        .then(response => response.json())
        .then((response, reject) => {
            const error = checkError(response);

            if (!error) {
                const results = extractData(response);

                dispatch(locationsResultAction(results));
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
