import React from 'react';

const FavItem = props => ({
    render: function () {
        return (
            <div className='FavItem'>
                <div className='favImage' />
                <div className='favText'>
                    <p>Somewhere, nowhere</p>
                </div>
            </div>
        );
    }
});

export { FavItem }