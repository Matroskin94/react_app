import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to='/favorite' >Faves </Link><br />
        <Link to='/details'> Details </Link>
        <h3>Property cross</h3>
    </div>
);

export default Header;
