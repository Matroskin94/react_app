import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchAction } from '../../actions/SearchActions';
import { chooseLocationsAction } from '../../actions/LocationActions';
import { GeolocationService } from '../../actions/ActionService';
import ResultQueries from './ResultQueries.jsx';
import { noop } from '../../utils/SearchUtils';

class Searchfield extends Component {
    static propTypes = {
        locationQuery: PropTypes.func,
        setNewQuery: PropTypes.func,
        chooseQuery: PropTypes.func,
        queries: PropTypes.array
    };

    static defaultProps = {
        locationQuery: noop,
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

    handleLocationClick = () => {
        const geolocation = new GeolocationService();

        geolocation.getCoordinates()
            .then(resolve => {
                this.props.locationQuery(resolve);
            });
    }

    handleQueryClick = address => {
        const locationBased = this.props.queries.find(item => item.address === address && item.locationBased);

        this.props.chooseQuery(address, locationBased);
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} type='text' value={this.state.inputValue} />
                <button onClick={this.handleSearchClick}>Go</button>
                <button onClick={this.handleLocationClick}>My Location </button>
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
        userLocation: state.searchReducer.location,
        activeItem: state.detailsReducer.activeItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewQuery: text => dispatch(searchAction(dispatch)(text, false)),
        chooseQuery: (text, locationBased) => dispatch(chooseLocationsAction(dispatch)(text, locationBased)),
        locationQuery: coordinates => dispatch(searchAction(dispatch)(coordinates, true))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
