import React, { Component } from 'react';
import Instruction from '../components/PropSearch/Instruction.jsx';
import Header from '../components/PropSearch/Header.jsx';
import Searchfield from '../components/PropSearch/Searchfield.jsx';
import SearchResult from '../components/PropSearch/SearchResult.jsx';

class PropSearchPage extends Component {
    constructor() {
        super();
        this.state = { type: 'INITIAL' };
    }
    render() {
        return (
            <div className='root-div'>
                <Header />
                <Instruction />
                <Searchfield />
                <SearchResult />
            </div>
        );
    }

}

export default PropSearchPage;