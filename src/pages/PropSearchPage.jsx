import React, { Component } from 'react';
import Instruction from '../components/PropSearch/Instruction.jsx';
import Header from '../components/PropSearch/Header.jsx';
import Searchfield from '../components/PropSearch/SearchField.jsx';
import styles from '../styles/PropSearchPage.css';

class PropSearchPage extends Component {
    render() {
        return (
            <div className={styles.page}>
                <Header />
                <Instruction />
                <Searchfield />
            </div>
        );
    }

}

export default PropSearchPage;
