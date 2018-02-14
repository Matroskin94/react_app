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
        return (
            <div>
                <input onChange={this.handleInputChange} type='text' value={this.state.inputValue} />
                <button onClick={this.handleSearchClick}>Go</button>
                <button onClick={this.handleLocationClick}>My Location </button>
                {this.props.queryRessults.length ?
                    <ResultLocations results={this.props.queryRessults} /> :
                    <ResultQueries results={this.props.queries} />}
            </div>
        );
    }
}

Searchfield.propTypes = {
    setNewQuery: PropTypes.func,
    queryRessults: PropTypes.array,
    queries: PropTypes.array
};

Searchfield.defaultProps = {
    setNewQuery: '',
    queryRessults: [],
    queries: []
};

function mapStateToProps(state) {
    return {
        queries: state.searchReducer.queries,
        locations: state.searchReducer.locations,
        queryRessults: state.searchReducer.queryRessults,
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
