import React, { Component } from 'react';

class Searchfield extends Component {
    render() {
        return (
            <div>
                <input type='text' id='searchField' />
                <button className='button' id='go-button'>Go</button>
                <button className='button' id='location-button'>My Location </button>
            </div>
        );
    }
}

export default Searchfield;
