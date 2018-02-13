import React from 'react';
import styles from '../styles/Styles.css';

const Layout = ({ children }) => (
    <div className={styles.wrapper}>
        {children}
    </div>
);

export default Layout;
