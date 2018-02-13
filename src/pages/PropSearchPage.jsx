import React from 'react';
import Instruction from '../components/PropSearch/Instruction.jsx';
import Header from '../components/PropSearch/Header.jsx';
import Searchfield from '../components/PropSearch/SearchField.jsx';

const PropSearchPage = props => (
    <div>
        <Header />
        <Instruction />
        <Searchfield />
    </div>
);

export default PropSearchPage;
