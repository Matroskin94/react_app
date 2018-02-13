import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
        const Child = this.props.queryRess.length ? ResultLocations : ResultQueries;
        const result = this.props.queryRess.length ? this.props.queryRess : this.props.query;

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

Searchfield.propTypes = {
    setNewQuery: PropTypes.func,
    queryRess: PropTypes.array,
    query: PropTypes.array
};

Searchfield.defaultProps = {
    setNewQuery: '',
    queryRess: [],
    query: []
};

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
