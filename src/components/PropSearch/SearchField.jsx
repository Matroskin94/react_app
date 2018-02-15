import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchAction, searchLocationsAction } from '../../actions/SearchActions';
import goDetailsAction from '../../actions/DetailsActions';
import ResultLocations from './ResultLocations.jsx';
import ResultQueries from './ResultQueries.jsx';

class Searchfield extends Component {
    state = {
        inputValue: ''
    };

    handleSearchClick = () => {
        this.props.setNewQuery(this.state.inputValue);
    }

    handleLocationClick = () => {
        this.props.searchLocations(this.state.inputValue);
    }

    handleItemClick = item => {
        this.props.setActiveItem(item);
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} type='text' value={this.state.inputValue} />
                <button onClick={this.handleSearchClick}>Go</button>
                <button onClick={this.handleLocationClick}>My Location </button>
                {this.props.queryRessults.length ?
                    <ResultLocations handleItemClick={this.handleItemClick} results={this.props.queryRessults} /> :
                    <ResultQueries results={this.props.queries} />}
            </div>
        );
    }
}

Searchfield.propTypes = {
    setNewQuery: PropTypes.func,
    searchLocations: PropTypes.func,
    setActiveItem: PropTypes.func,
    queryRessults: PropTypes.array,
    queries: PropTypes.array
};

Searchfield.defaultProps = {
    setNewQuery: '',
    searchLocations: '',
    setActiveItem: '',
    queryRessults: [],
    queries: []
};

function mapStateToProps(state) {
    return {
        queries: state.searchReducer.queries,
        locations: state.searchReducer.locations,
        queryRessults: state.searchReducer.queryRessults,
        searchWord: state.searchReducer.searchWord,
        activeItem: state.detailsReducer.activeItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewQuery: text => {
            dispatch(searchAction(text));
        },
        searchLocations: text => {
            dispatch(searchLocationsAction(dispatch)('leeds'));
        },
        setActiveItem: item => {
            dispatch(goDetailsAction(item));
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
