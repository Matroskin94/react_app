import React, { Component } from 'react';
import Header from '../components/Favorite/Header.jsx';
import FavItem from '../components/Favorite/FavItem.jsx';

class Favorite extends Component {
    render() {
        return (
            <div>
                <Header />
                <FavItem />
            </div>
        );
    }
}

export default Favorite;
