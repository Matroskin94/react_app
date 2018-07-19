import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import {
	searchResultAction,
	loadingAction,
	getCurrentQueryInfoAction,
	searchAction
} from '../../actions/SearchActions';

import { GO_PRESSED, LOADING_STARTED, QUERY_DATA_FROM_LOCAL } from '../../constants/constants';
import { favoritesList } from '../UtilTests/searchUtilsMocks';
import mockParameters from './actionTestMocks';

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.localStorage = localStorageMock;

describe('SearchActions tests', () => {
	// searchActions types test
	test('searchResultAction appropriate type text', () => {
		const searchAction = searchResultAction();

		expect(searchAction.type).toEqual(GO_PRESSED);
	});

	test('loadingAction appropriate type text', () => {
		const loadAction = loadingAction();

		expect(loadAction.type).toEqual(LOADING_STARTED);
	});

	test('getCurrentQueryInfoAction appropriate type text', () => {
		localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(favoritesList));

		const getQueryInfoAction = getCurrentQueryInfoAction();

		expect(getQueryInfoAction.type).toEqual(QUERY_DATA_FROM_LOCAL);
	});
});

describe('Async actions tests', () => {
	beforeEach(function () { // Запускаеться после каждого test
		    moxios.install();
		});

	afterEach(function () {
	   	moxios.uninstall();
	});

	// searchAction test
	test('test of async searchAction', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();

			request.respondWith({
				status: 200,
				response: mockParameters,
			});
		});

		const expectedActions = [{
			type: GO_PRESSED,
	        	payload: {
	        		address: { place_name: 'london' },
	        		matches: 8965
	        	}
		} 	
	    ];
	    const store = mockStore({});

	    return store.dispatch(searchAction({place_name: 'london'})).then(() => {
	      // return of async actions
	      console.log('store.getActions()', store.getActions());
	      expect(store.getActions()).toEqual(expectedActions);
	    });
	});
});