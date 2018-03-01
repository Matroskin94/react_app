import React from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';
import SuccessHeader from './SuccessHeader.jsx';
import FailHeader from './FailHeader.jsx';

const ResultsHeader = props => {
    const getQueryMatches = props.queries.length !== 0 ?
        props.queries.find(item =>
            shallowequal(item.address, props.address)) :
        0;
    const results = getQueryMatches && getQueryMatches.matches !== 0 ?
        <SuccessHeader
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
    queries: PropTypes.array,
    address: PropTypes.object,
    currentPage: PropTypes.number
};

ResultsHeader.defaultProps = {
    queries: [],
    address: {},
    currentPage: 1
};

export default ResultsHeader;
