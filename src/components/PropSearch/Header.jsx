import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to='/results/favorite' >Faves </Link><br />
        <h3>Property cross</h3>
    </div>
);

export default Header;
