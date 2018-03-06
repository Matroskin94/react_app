import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './DetailsPage.css';
import { noop } from '../../utils/SearchUtils';

const Header = ({ handleFavoriteClick, handleBackClick, isFavorite }) => {
    const onFavoriteClick = () => {
        handleFavoriteClick(isFavorite);
    };

    const onBackClick = e => {
        handleBackClick(e);
    };

    return (
        <div>
            <div className={styles.title}>
                <Link onClick={onBackClick} to='/'> BACK </Link>
                <h1>Property details</h1>
            </div>
            <div className={styles.favoriteButton}>
                <button onClick={onFavoriteClick}>{isFavorite ? '-' : '+'}</button>
            </div>
        </div>
    );
};

Header.propTypes = {
    handleBackClick: PropTypes.func,
    handleFavoriteClick: PropTypes.func,
    isFavorite: PropTypes.bool
};

Header.defaultProps = {
    handleBackClick: noop,
    handleFavoriteClick: noop,
    isFavorite: false
};

export default Header;
