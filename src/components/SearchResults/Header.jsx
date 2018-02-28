import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const headerText = props.isResultsEmpty ?
        'Nothing found, try another query' :
        `${20 * props.currentPage} of ${props.matches} matches`;

    return (
        <div>
            <h3>{headerText}</h3>
        </div>
    );
};

Header.propTypes = {
    matches: PropTypes.number,
    currentPage: PropTypes.number,
    isResultsEmpty: PropTypes.bool
};

Header.defaultProps = {
    matches: 0,
    currentPage: 1,
    isResultsEmpty: true
};

export default Header;
