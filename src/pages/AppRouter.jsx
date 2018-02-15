import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import FavoritePage from './FavoritePage.jsx';
import PropSearchPage from './PropSearchPage.jsx';
import initStore from '../store/AppStore';
import Layout from './Layout.jsx';
import DetailsPage from './DetailsPage.jsx';

const store = initStore();

const AppRouter = props => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path='/' component={PropSearchPage} />
                    <Route path='/favorite' component={FavoritePage} />
                    <Route path='/details' component={DetailsPage} />
                </Layout>
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
