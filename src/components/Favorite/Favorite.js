import React from 'react';
// import { Instruction } from './Instruction';
import { Header } from './Header';
import { FavItem } from './FavItem';

const Favorite = props => ({
    render: function() {
        return (
            <div className='root-div'>
                <Header />
                <FavItem />
            </div>
        );
    }
});

export { Favorite };
