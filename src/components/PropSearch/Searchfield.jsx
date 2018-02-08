import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../../actions/SearchActions.js';

class Searchfield extends Component {
    onSearch = () => {
        return this.props.setNewQuery((document.getElementById('searchField').value));
    }
    render() {
        const listItems = this.props.query.map( ({address, maches} = index, index)  =>
            <tr key={index}><td>{address} ({maches})</td></tr>);

        return (
            <div>
                <input type='text' id='searchField' />
                <button onClick={this.onSearch}>Go</button>
                <button>My Location </button>
                <table ><tbody>{listItems}</tbody></table>
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
