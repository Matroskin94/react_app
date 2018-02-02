import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import FavoritePage from './Favorite/FavoritePage.jsx';
import PropSearchPage from './PropSearch/PropSearchPage.jsx';

const AppRouter = props => (
    <div>
        <Route path='/' component={PropSearchPage} />
        <Route path='/favorite' component={FavoritePage} />
    </div>
);

export default AppRouter;
