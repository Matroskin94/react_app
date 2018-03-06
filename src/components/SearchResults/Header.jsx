import React from 'react';
import PropTypes from 'prop-types';
import ResultsHeader from './ResultsHeader.jsx';
import LoadingHeader from './LoadingHeader.jsx';

const Header = ({
    isLoading, resultsLength, currentQueryInfo, currentPage
}) => (isLoading ?
    <LoadingHeader /> :
    <ResultsHeader
        resultsLength={resultsLength}
        currentQueryInfo={currentQueryInfo}
        currentPage={currentPage}
    />
);

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
