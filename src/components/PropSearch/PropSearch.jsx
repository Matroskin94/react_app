import React from 'react';
import Instruction from './Instruction.jsx';
import Header from './Header.jsx';
import Searchfield from './Searchfield.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const PropSearch = props => (
    <div className='root-div'>
        <Header />
        <Instruction />
        <Searchfield />
    </div> 
);

export default PropSearch;
