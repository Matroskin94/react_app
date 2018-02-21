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
        const searchObject = { place_name: this.state.inputValue, locationBased: false };

        this.props.setNewQuery(searchObject);
    }

    handleLocationClick = () => {
        const geolocation = new GeolocationService();

        geolocation.getCoordinates()
            .then(resolve => {
                const searchObject = { centre_point: resolve, locationBased: true };

                return this.props.locationQuery(searchObject);
            });
    }

    handleQueryClick = address => {
        const location = this.props.queries.find(item => item.address === address);
        const property = location.locationBased ?
            { centre_point: address } :
            { place_name: address };

        this.props.chooseQuery(property);
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
        setNewQuery: place => dispatch(searchAction(dispatch)(place)),
        chooseQuery: query => dispatch(chooseLocationsAction(dispatch)(query)),
        locationQuery: coordinates => dispatch(searchAction(dispatch)(coordinates))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
