import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/SearchActions.js';

class Searchfield extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch = store => {
        this.props.dispatch(search('Searching text'));
    }
    render() {
        //console.log(this.props.queries_list);
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
    return {
        queries_list: state.search_queries
    }
}

export default connect(mapStateToProps)(Searchfield);
