import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Styles.css';

const Layout = ({ children }) => (
    <div className={styles.wrapper}>
        {children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.array
};

Layout.defaultProps = {
    children: []
};

export default Layout;
