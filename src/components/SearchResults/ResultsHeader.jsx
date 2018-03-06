import React from 'react';
import PropTypes from 'prop-types';
import SuccessHeader from './SuccessHeader.jsx';
import FailHeader from './FailHeader.jsx';

const ResultsHeader = props => (
    props.currentQueryInfo.matches !== 0 ?
        <SuccessHeader
            resultsLength={props.resultsLength}
            matches={props.currentQueryInfo.matches}
            currentPage={props.currentPage}
        /> :
        <FailHeader />
);

ResultsHeader.propTypes = {
    currentQueryInfo: PropTypes.object,
    currentPage: PropTypes.number,
    resultsLength: PropTypes.number
};

ResultsHeader.defaultProps = {
    currentQueryInfo: {},
    currentPage: 1,
    resultsLength: 0
};

export default ResultsHeader;
