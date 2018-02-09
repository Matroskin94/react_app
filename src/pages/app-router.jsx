import React from 'react';
import { Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import FavoritePage from './favorite-page.jsx';
import PropSearchPage from './prop-search-page.jsx';
import { Provider } from 'react-redux';
import initStore from '../store/app-store.js';
import styles from '../styles/styles.css';

const store = initStore();

const AppRouter = props => (
    <div className={styles.page}>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={PropSearchPage} />
                    <Route path='/favorite' component={FavoritePage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </div>
);

export default AppRouter;
