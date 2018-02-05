import React from 'react';
import Header from '../components/Favorite/Header.jsx';
import FavItem from '../components/Favorite/FavItem.jsx';

const Favorite = props => (
    <div className='root-div'>
        <Header />
        <FavItem />
    </div>
);

export default Favorite;