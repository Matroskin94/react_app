import React, { PureComponent } from 'react';
// import { Instruction } from './Instruction';
import Header from './Header.jsx';
import FavItem from './FavItem.jsx';

const Favorite = props => (
    <div className='root-div'>
        <Header />
        <FavItem />
    </div>
);

export default Favorite;
