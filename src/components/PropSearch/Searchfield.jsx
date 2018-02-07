import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { searchAction } from '../../actions/SearchActions.js';

class Searchfield extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(event) {
        return this.props.setNewQuery((document.getElementById('searchField').value));
    }
    render() {
        return (
            <div>
                <input type='text' id='searchField' />
                <button onClick={this.onSearch} className='button' id='go-button'>Go</button>
                <button className='button' id='location-button'>My Location </button> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('STATE', state);
    return { 
        query: state.search_reducer.query,
        locations: state.search_reducer.locations
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setNewQuery: text => {
            dispatch(searchAction(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
