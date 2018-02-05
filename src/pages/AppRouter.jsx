import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import FavoritePage from './FavoritePage.jsx';
import PropSearchPage from './PropSearchPage.jsx';

const AppRouter = props => (
    <BrowserRouter>
        <div>
            <Route path='/' component={PropSearchPage} />
            <Route path='/favorite' component={FavoritePage} />
        </div>
    </BrowserRouter>
);

export default AppRouter;
