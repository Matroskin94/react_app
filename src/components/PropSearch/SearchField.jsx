import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../../actions/SearchActions';
import ResultLocations from './ResultLocations.jsx';
import ResultQueries from './ResultQueries.jsx';

class Searchfield extends Component {
    state = {
        inputValue: ''
    };

    handleSearchClick = () => {
        this.props.setNewQuery(this.state.inputValue);
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    render() {
        //const listResults = this.props.queryRess.length !== 0 ? this.createSearchResList() : this.createQueriesList();
        //const listQueries = this.props.queryRess.length === 0 ? this.createQueriesList() : [];
        let Child = ResultQueries;
        let result = this.props.queryRess;

        if (this.props.queryRess.length !== 0){
            Child = ResultLocations;
        } else {
            result = this.props.query;
        }

        return (
            <div>
                <input onChange={this.handleInputChange} type='text' value={this.state.inputValue} />
                <button onClick={this.handleSearchClick}>Go</button>
                <button>My Location </button>
                <Child result={result} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        query: state.searchReducer.query,
        locations: state.searchReducer.locations,
        queryRess: state.searchReducer.queryRess,
        searchWord: state.searchReducer.searchWord
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewQuery: text => {
            dispatch(searchAction(text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
