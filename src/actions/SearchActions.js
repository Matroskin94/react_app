import axios from 'axios';
import { GO_PRESSED, LOADING_STARTED } from '../constants/constants';
import { API_LINK, COUNTRY_UK, PRETTY_1, ACTION_SEARCH_LISTINGS, ENCODING_JSON, LISTING_TYPE_BUY } from '../constants/queryConstants';

export const searchResultAction = data => ({
    type: GO_PRESSED,
    payload: data
});

export const loadingAction = data => ({
    type: LOADING_STARTED,
    payload: data
});

export const searchAction = searchProperty =>
    dispatch => axios.get(API_LINK, {
        params: {
            country: COUNTRY_UK,
            pretty: PRETTY_1,
            action: ACTION_SEARCH_LISTINGS,
            encoding: ENCODING_JSON,
            listing_type: LISTING_TYPE_BUY,
            page: '1',
            ...searchProperty
        }
    })
        .then(response => {
            const currentQuery = {
                address: searchProperty,
                matches: response.data.response.total_results
            };

            localStorage.setItem('currentQuery', JSON.stringify(currentQuery));
            dispatch(searchResultAction({
                address: searchProperty,
                matches: response.data.response.total_results
            }));
        });

