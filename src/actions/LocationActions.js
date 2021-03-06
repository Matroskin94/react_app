import axios from 'axios';
import { QUERY_SELECTED, CLEAR_RESULTS } from '../constants/constants';
import { API_LINK, COUNTRY_UK, PRETTY_1, ACTION_SEARCH_LISTINGS,
    ENCODING_JSON, LISTING_TYPE_BUY } from '../constants/queryConstants';
import { extractData } from '../utils/SearchUtils';
import { searchAction, loadingAction } from './SearchActions';

export const chooseQueryAction = data => ({
    type: QUERY_SELECTED,
    payload: data
});

export const clearResultsAction = () => ({
    type: CLEAR_RESULTS,
    payload: ''
});

export const getLocationAction = geolocation =>
    dispatch => {
        geolocation.then(resolve => {
            const searchObject = { centre_point: resolve };

            return dispatch(searchAction(dispatch)(searchObject));
        });
    };


export const chooseLocationsAction = (searchProperty, currentPage = 1) =>
    dispatch => {
        dispatch(loadingAction(true));
        axios.get(API_LINK, {
            params: {
                country: COUNTRY_UK,
                pretty: PRETTY_1,
                action: ACTION_SEARCH_LISTINGS,
                encoding: ENCODING_JSON,
                listing_type: LISTING_TYPE_BUY,
                page: currentPage,
                ...searchProperty
            }
        })
            .then(response => {
                const results = extractData(response.data.response.listings);

                return dispatch(chooseQueryAction({ results, searchProperty, currentPage }));
            });
    };
