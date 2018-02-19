import axios from 'axios';
import { QUERY_SELECTED } from '../constants/constants';
import { API_LINK, COUNTRY_UK, PRETTY_1, ACTION_SEARCH_LISTINGS, ENCODING_JSON, LISTING_TYPE_BUY } from '../constants/queryConstants';
import { extractData } from '../utils/SearchUtils';

export const chooseQueryAction = data => {
    return ({
        type: QUERY_SELECTED,
        payload: data
    });
};


export const chooseLocationsAction = dispatch => word => {
    return dispatch => {
        axios.get(`${API_LINK}`, {
            params: {
                country: COUNTRY_UK,
                pretty: PRETTY_1,
                action: ACTION_SEARCH_LISTINGS,
                encoding: ENCODING_JSON,
                listing_type: LISTING_TYPE_BUY,
                page: '1',
                place_name: word
            }
        })
            .then(response => {
                const results = extractData(response.data);

                return dispatch(chooseQueryAction({ results, word }));
            })
            .catch(reject => {
                console.log('REJECTED', reject);
            });
    }
};
