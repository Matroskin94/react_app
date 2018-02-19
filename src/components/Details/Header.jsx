import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/DetailsPage.css';
import { noop } from '../../utils/SearchUtils';

const Header = props => {
    const onFavoriteClick = () => {
        props.handleFavoriteClick(props.isFavorite);
    };
    const buttText = props.isFavorite ? '-' : '+';

    console.log(props.isFavorite);
    return (
        <div>
            <div className={styles.title}>
                <h1>Property details</h1>
            </div>
            <div className={styles.favoriteButton}>
                <button onClick={onFavoriteClick}>{buttText}</button>
            </div>
        </div>
    );
};

Header.propTypes = {
    handleFavoriteClick: PropTypes.func,
    isFavorite: PropTypes.bool
};

Header.defaultProps = {
    handleFavoriteClick: noop,
    isFavorite: false
};

export default Header;
