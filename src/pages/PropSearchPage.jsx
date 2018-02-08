import React, { Component } from 'react';
import Instruction from '../components/PropSearch/Instruction.jsx';
import Header from '../components/PropSearch/Header.jsx';
import Searchfield from '../components/PropSearch/Searchfield.jsx';
import SearchResult from '../components/PropSearch/SearchResult.jsx';

class PropSearchPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Instruction />
                <Searchfield />
            </div>
        );
    }

}

export default PropSearchPage;
