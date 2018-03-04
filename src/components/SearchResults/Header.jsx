import React from 'react';
import PropTypes from 'prop-types';
import ResultsHeader from './ResultsHeader.jsx';
import LoadingHeader from './LoadingHeader.jsx';

const Header = props => {
    const headerText = props.isLoading ?
        <LoadingHeader /> :
        <ResultsHeader
            resultsLength={props.resultsLength}
            currentQueryInfo={props.currentQueryInfo}
            currentPage={props.currentPage}
        />;

    return (
        <div>
            {headerText}
        </div>
    );
};

Header.propTypes = {
    currentQueryInfo: PropTypes.object,
    currentPage: PropTypes.number,
    isLoading: PropTypes.bool,
    resultsLength: PropTypes.number
};

Header.defaultProps = {
    currentQueryInfo: {},
    currentPage: 1,
    isLoading: true,
    resultsLength: 0
};

export default Header;
