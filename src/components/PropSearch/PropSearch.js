import React from 'react';
import { Instruction } from './Instruction';
import { Header } from './Header';
import { Searchfield } from './Searchfield';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const PropSearch = props => ({
    render: function() {
        return (
            <div className='root-div'>
                <Header />
                <Instruction />
                <Searchfield />
            </div>
        );
    }
});

export { PropSearch };
