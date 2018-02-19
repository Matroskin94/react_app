import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import FavoritePage from './FavoritePage.jsx';
import PropSearchPage from './PropSearchPage.jsx';
import initStore from '../store/AppStore';
import Layout from './Layout.jsx';
import DetailsPage from './DetailsPage.jsx';
import ResultsPage from './ResultsPage.jsx';

const store = initStore();

const AppRouter = props => (
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={PropSearchPage} />
                    <Route path='/favorite' component={FavoritePage} />
                    <Route path='/results/:type' component={ResultsPage} />
                    <Route path='/details' component={DetailsPage} />
                </Switch>
            </Layout>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
