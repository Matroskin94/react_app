import axios from 'axios';
import { QUERY_SELECTED, ANOTHER_QUERY_SELECTED } from '../constants/constants';
import * as queryConstants from '../constants/queryConstants';
import { extractData } from '../utils/SearchUtils';
import { searchAction, loadingAction } from './SearchActions';

export const chooseQueryAction = data => ({
    type: QUERY_SELECTED,
    payload: data
});

export const chooseAnotherQueryAction = data => ({
    type: ANOTHER_QUERY_SELECTED,
    payload: data
});

export const getLocationAction = dispatch => geolocation =>
    () => {
        geolocation.then(resolve => {
            const searchObject = { centre_point: resolve, locationBased: true };

            return dispatch(searchAction(dispatch)(searchObject));
        });
    };


export const chooseLocationsAction = dispatch => (searchProperty, currentPage) => {
    dispatch(loadingAction(true));
    return () => {
        axios.get(queryConstants.API_LINK, {
            params: {
                country: queryConstants.COUNTRY_UK,
                pretty: queryConstants.PRETTY_1,
                action: queryConstants.ACTION_SEARCH_LISTINGS,
                encoding: queryConstants.ENCODING_JSON,
                listing_type: queryConstants.LISTING_TYPE_BUY,
                page: currentPage,
                ...searchProperty
            }
        })
            .then(response => {
                const results = extractData(response.data);

                return currentPage === 1 ?
                    dispatch(chooseQueryAction({ results, searchProperty, currentPage })) :
                    dispatch(chooseAnotherQueryAction({ results, searchProperty, currentPage }));
            });
    };
};
