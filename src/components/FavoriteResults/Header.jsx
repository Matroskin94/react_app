import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div data-test='favHeader'>
        <Link to='/' data-test='favesBackLink'> BACK </Link>
        <h3 className='textCenter'>Favourites</h3>
    </div>
);

export default Header;
