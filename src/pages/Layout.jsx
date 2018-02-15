import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Styles.css';

const Layout = ({ children }) => (
    <div className={styles.wrapper}>
        {children}
    </div>
);

export default Layout;

Layout.propTypes = {
    children: PropTypes.node
};

Layout.defaultProps = {
    children: null
};