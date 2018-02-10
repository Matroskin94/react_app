import React, { Component } from 'react';
import Header from '../components/Favorite/Header.jsx';
import FavItem from '../components/Favorite/FavItem.jsx';
import styles from '../styles/Styles.css';

class Favorite extends Component {
    render() {
        return (
            <div className={styles.page}>
                <Header />
                <FavItem />
            </div>
        );
    }
}

export default Favorite;
