import React from 'react';
import PropTypes from 'prop-types';
import ResultsHeader from './ResultsHeader.jsx';
import LoadingHeader from './LoadingHeader.jsx';

const Header = props => {
    const headerText = props.isLoading ?
        <LoadingHeader /> :
        <ResultsHeader
            queries={props.queries}
            address={props.address}
            currentPage={props.currentPage}
            isResultsEmpty={props.isResultsEmpty}
        />;

    return (
        <div>
            {headerText}
        </div>
    );
};

Header.propTypes = {
    queries: PropTypes.array,
    address: PropTypes.object,
    currentPage: PropTypes.number,
    isResultsEmpty: PropTypes.bool,
    isLoading: PropTypes.bool
};

Header.defaultProps = {
    queries: [],
    address: {},
    currentPage: 1,
    isResultsEmpty: true,
    isLoading: true
};

export default Header;
