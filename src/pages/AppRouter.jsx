import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import FavoritePage from './FavoritePage.jsx';
import PropSearchPage from './PropSearchPage.jsx';
import { Provider } from 'react-redux';
import initStore from '../store/AppStore.js';

const store = initStore();

const AppRouter = props => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={PropSearchPage} />
                <Route path='/favorite' component={FavoritePage} />
            </div>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
