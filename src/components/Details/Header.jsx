import React from 'react';
import styles from '../../styles/DetailsPage.css';

const Header = props => (
    <div>
        <div className={styles.title}>
            <h1>Property details</h1>
        </div>
        <div className={styles.favoriteButton}>
            <button>+</button>
        </div>
    </div>
);

export default Header;
