import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <div>
        <h3>{props.resultsString}</h3>
    </div>
);

Header.propTypes = {
    resultsString: PropTypes.string
};

Header.defaultProps = {
    resultsString: ''
};

export default Header;
