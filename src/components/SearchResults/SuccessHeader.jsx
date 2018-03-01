import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SuccessHeader = props => (
    <div>
        <Link to='/'> BACK </Link>
        <h3>{20 * props.currentPage} of {props.matches} matches</h3>
    </div>
);

SuccessHeader.propTypes = {
    matches: PropTypes.number,
    currentPage: PropTypes.number
};

SuccessHeader.defaultProps = {
    matches: 0,
    currentPage: 1
};

export default SuccessHeader;