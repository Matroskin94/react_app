import React from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';

const ResultsHeader = props => {
    const getQueryMatches = props.queries.length !== 0 ?
        props.queries.find(item =>
            shallowequal(item.address, props.address)) :
        0;

    const results = getQueryMatches.matches !== 0 ?
        <h3>{20 * props.currentPage} of {getQueryMatches.matches} matches</h3> :
        <h3>Nothing found, try another query</h3>;

    return (
        <div>
            {results}
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
