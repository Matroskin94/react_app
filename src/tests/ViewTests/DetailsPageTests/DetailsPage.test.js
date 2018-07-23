import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Header from '../../../components/Details/Header.jsx';
import ChangeHistory from '../../../components/PropSearch/ChangeHistory.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
	context: {
		router: {
			history: {
				push: jest.fn()
			}
		}
	},
	router: {
		history: {
				push: jest.fn()
		}
	},
	subscribe: jest.fn(),
	dispatch: jest.fn(),
	clearActions: jest.fn(),
	replaceReducer: jest.fn(),
	getState: jest.fn(),
});

describe('Details page testing', () => {
	it('Details header test', () => {
		const onFavoriteClickMock = jest.fn();
		const historyBackMock = jest.fn();
		// Необходимо прокинуть контекст с ним работает компонент обёртка
		const wrapper = shallow(
				<Provider store={store}>
					<Header
						handleFavoriteClick={onFavoriteClickMock}
						isFavorite="true"
						historyBack={historyBackMock}
					/>
				</Provider>
			);

		expect(wrapper.prop('isFavorite')).toEqual('true');
		expect(wrapper.prop('handleFavoriteClick')).toEqual(onFavoriteClickMock);
		expect(wrapper).toMatchSnapshot();
	});
});