import React from 'react';
import PropTypes from 'prop-types';
import Instruction from '../components/PropSearch/Instruction.jsx';
import Header from '../components/PropSearch/Header.jsx';
import Searchfield from '../components/PropSearch/SearchField.jsx';

const PropSearchPage = props => (
    <div>
        <Header />
        <Instruction />
        <Searchfield history={props.history} />
    </div>
);

PropSearchPage.propTypes = {
    history: PropTypes.object
};

PropSearchPage.defaultProps = {
    history: {}
};

export default PropSearchPage;
