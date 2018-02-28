import React from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';

const Header = props => {
    const getQueryMatches = () =>
        props.queries.find(item =>
            shallowequal(item.address, props.address)).matches;
    const headerText = props.isResultsEmpty ?
        'Nothing found, try another query' :
        `${20 * props.currentPage} of ${getQueryMatches()} matches`;

    return (
        <div>
            <h3>{headerText}</h3>
        </div>
    );
};

Header.propTypes = {
    queries: PropTypes.array,
    address: PropTypes.object,
    currentPage: PropTypes.number,
    isResultsEmpty: PropTypes.bool
};

Header.defaultProps = {
    queries: [],
    address: {},
    currentPage: 1,
    isResultsEmpty: true
};

export default Header;
