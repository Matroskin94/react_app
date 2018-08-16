import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div data-test='searchHeader'>
        <Link to='/favorite' data-test='favesLink'>Faves </Link>
        <h3>Property cross</h3>
    </div>
);

export default Header;
