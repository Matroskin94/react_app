import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import styles from '../styles/styles.css';

const Layout = ({ children }) => (
    <div className={styles.wrapper}>
        <Grid
            container
            justify='center'
            spacing={24}
        >
            <Grid
                className={styles.content}
                item xs={12}
                sm={12} md={8}
                lg={8}
            >
                {children}
            </Grid>
        </Grid>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node
};

Layout.defaultProps = {
    children: null
};

export default Layout;
