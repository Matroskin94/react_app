import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to='/'> BACK </Link>
        <h3 className='textCenter'>Favourites</h3>
    </div>
);

export default Header;
