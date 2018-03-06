import React from 'react';
import Instruction from '../components/PropSearch/Instruction.jsx';
import Header from '../components/PropSearch/Header.jsx';
import Searchfield from '../components/PropSearch/SearchField.jsx';
import gridStyles from '../styles/GridStyles.css';

const PropSearchPage = props => (
    <div className={gridStyles.container}>
        <Header />
        <Instruction />
        <Searchfield />
    </div>
);

export default PropSearchPage;
