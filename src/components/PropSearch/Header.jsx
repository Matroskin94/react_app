import React from 'react';
import { Link } from 'react-router-dom';
import gridStyles from '../../styles/GridStyles.css';

const Header = () => (
    <div className={gridStyles.row}>
        <div className={`${gridStyles.col12} ${gridStyles.cols}`}>
            <Link to='/favorite' >Faves </Link><br />
            <h3>Property cross</h3>
        </div>
    </div>
);

export default Header;
