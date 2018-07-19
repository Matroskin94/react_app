import PropSearchReducer from '../../components/PropSearch/PropSearchReducer';
import { LOADING_STARTED, CLEAR_RESULTS } from '../../constants/constants';

import initialState from './reducerMockData';
import { searchResultsMock } from './reducerMocks';

describe('PropSearchReducer Testing', () => {
	// testing initial state
	test('should return initial state', () => {
		expect(PropSearchReducer(undefined, {})).toEqual(initialState);
	});

	// testing LOADING_STARTED action in reducer
	test('should handle loading started', () => {
		const loadingAction = {
			type: LOADING_STARTED,
			payload: true,
		};

		expect(PropSearchReducer(undefined, loadingAction))
			.toEqual(expect.objectContaining({ isLoading: true }));
	});

	// testing CLEAR_RESULTS action in reducer
	test('search results should be cleard', () => {
		const clearAction = {
			type: CLEAR_RESULTS,
		};
		const searchResults = JSON.stringify(searchResultsMock);

		expect(PropSearchReducer({ queryRessults: searchResults }, clearAction))
			.toEqual(expect.objectContaining({ queryRessults: [] }));
	});
});