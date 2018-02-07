import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { search } from '../../actions/SearchActions.js';

class Searchfield extends Component {
    onSearch(text) {
        console.log('Go pressed');
    }
    render() {
        return (
            <div>
                <input type='text' id='searchField' />
                <button onClick={onSearch} className='button' id='go-button'>Go</button>
                <button className='button' id='location-button'>My Location </button>
                <p>{this.props.queries_list}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        queries_list: state.PorpSearchReducer.query
    }
}


function mapContextToProps(dispatch) {
    return {
        onSearch: bindActionCreators(search, dispatch)
    }
}


export default connect(mapStateToProps)(Searchfield);
