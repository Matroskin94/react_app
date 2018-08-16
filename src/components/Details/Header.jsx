import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import { noop } from '../../utils/SearchUtils';
import changeHistory from '../PropSearch/ChangeHistory.jsx';

export const Header = ({ handleFavoriteClick, historyBack, isFavorite }) => {
    const onFavoriteClick = () => {
        handleFavoriteClick(isFavorite);
    };

    const onBackClick = e => {
        e.preventDefault();
        historyBack();
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
    historyBack: PropTypes.func,
    handleFavoriteClick: PropTypes.func,
    isFavorite: PropTypes.bool
};

Header.defaultProps = {
    historyBack: noop,
    handleFavoriteClick: noop,
    isFavorite: false
};

export default changeHistory()(Header);
