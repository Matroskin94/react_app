import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import PropSearch from './components/PropSearch/PropSearchPage.jsx';
import AppRouter from './components/AppRouter.jsx';

render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>,
    document.getElementById('root')
);
