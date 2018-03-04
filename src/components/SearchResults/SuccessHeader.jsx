import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SuccessHeader = props => (
    <div>
        <Link to='/'> BACK </Link>
        <h3>{props.resultsLength} of {props.matches} matches</h3>
    </div>
);

SuccessHeader.propTypes = {
    matches: PropTypes.number,
    currentPage: PropTypes.number,
    resultsLength: PropTypes.number
};

SuccessHeader.defaultProps = {
    matches: 0,
    currentPage: 1,
    resultsLength: 0
};

export default SuccessHeader;
