import React from 'react';

const Searchfield = props => ({
    render: function() {
        return (
            <div>
                <input type='text' id='searchField' />
                <button className='button' id='go-button'>Go</button>
                <button className='button' id='location-button'>My Location </button>
            </div>
        );
    }
});

export { Searchfield };
