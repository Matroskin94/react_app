import React from 'react';
import PropTypes from 'prop-types';
import SuccessHeader from './SuccessHeader.jsx';
import FailHeader from './FailHeader.jsx';

const ResultsHeader = props => {
    const getQueryMatches = props.currentQueryInfo;
    const results = getQueryMatches.matches !== 0 ?
        <SuccessHeader
            resultsLength={props.resultsLength}
            matches={getQueryMatches.matches}
            currentPage={props.currentPage}
        /> :
        <FailHeader />;

    return (
        <div>
            { results }
        </div>
    );
};

ResultsHeader.propTypes = {
    currentQueryInfo: PropTypes.object,
    currentPage: PropTypes.number,
    resultsLength: PropTypes.number
};

ResultsHeader.defaultProps = {
    currentQueryInfo: {},
    currentPage: 1,
    resultsLength:0
};

export default ResultsHeader;
