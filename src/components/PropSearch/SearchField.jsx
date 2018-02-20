import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchAction } from '../../actions/SearchActions';
import { chooseLocationsAction } from '../../actions/LocationActions';
import ResultQueries from './ResultQueries.jsx';
import { noop } from '../../utils/SearchUtils';

class Searchfield extends Component {
    static propTypes = {
        setNewQuery: PropTypes.func,
        chooseQuery: PropTypes.func,
        queries: PropTypes.array
    };

    static defaultProps = {
        setNewQuery: noop,
        chooseQuery: noop,
        queries: []
    };
    state = {
        inputValue: ''
    };

    handleSearchClick = () => {
        this.props.setNewQuery(this.state.inputValue);
    }

    handleQueryClick = address => {
        this.props.chooseQuery(address);
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} type='text' value={this.state.inputValue} />
                <button onClick={this.handleSearchClick}>Go</button>
                <button>My Location </button>
                <ResultQueries results={this.props.queries} onItemClick={this.handleQueryClick} />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        queries: state.searchReducer.queries,
        locations: state.searchReducer.locations,
        searchWord: state.searchReducer.searchWord,
        activeItem: state.detailsReducer.activeItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewQuery: text => dispatch(searchAction(dispatch)(text)),
        chooseQuery: text => dispatch(chooseLocationsAction(dispatch)(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
