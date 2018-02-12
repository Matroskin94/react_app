import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import FavoritePage from './FavoritePage.jsx';
import PropSearchPage from './PropSearchPage.jsx';
import initStore from '../store/AppStore';
import styles from '../styles/Styles.css';

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
