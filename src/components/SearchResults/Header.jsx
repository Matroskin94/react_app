import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <div>
        <h3>Results: {props.searchWord}</h3>
    </div>
);

Header.propTypes = {
    searchWord: PropTypes.string
};

Header.defaultProps = {
    searchWord: ''
};

export default Header;
