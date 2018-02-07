import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { searchAction } from '../../actions/SearchActions.js';

class Searchfield extends Component {
    onSearch = ( event ) => {
        return this.props.setNewQuery((document.getElementById('searchField').value));
    }
    render() {
        let i = 0;
        const listItems = this.props.queryRess.map((item) =>
          <tr key = {i++}><td>{item.address} ({item.maches})</td></tr>
        );

        return (
            <div>
                <input type='text' id='searchField' />
                <button onClick={this.onSearch} className='button' id='go-button'>Go</button>
                <button className='button' id='location-button'>My Location </button>
                <table><tbody>{listItems}</tbody></table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('STATE', state);
    return { 
        query: state.search_reducer.query,
        locations: state.search_reducer.locations,
        queryRess: state.search_reducer.queryRess
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
