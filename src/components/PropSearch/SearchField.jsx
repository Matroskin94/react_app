import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchAction } from '../../actions/SearchActions';
import { chooseLocationsAction, getLocationAction } from '../../actions/LocationActions';
import { GeolocationService } from '../../actions/ActionService';
import ResultQueries from './ResultQueries.jsx';
import { noop } from '../../utils/SearchUtils';

class Searchfield extends Component {
    static propTypes = {
        findAddressQuery: PropTypes.func,
        chooseQuery: PropTypes.func,
        getLocation: PropTypes.func,
        queries: PropTypes.array
    };

    static defaultProps = {
        findAddressQuery: noop,
        chooseQuery: noop,
        getLocation: noop,
        queries: []
    };
    state = {
        inputValue: ''
    };

    handleSearchClick = () => {
        const searchObject = { place_name: this.state.inputValue, locationBased: false };

        this.props.findAddressQuery(searchObject);
    }

    handleLocationClick = () => {
        const geolocation = new GeolocationService();

        this.props.getLocation(geolocation);
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
        findAddressQuery: place => dispatch(searchAction(dispatch)(place)),
        chooseQuery: query => dispatch(chooseLocationsAction(dispatch)(query)),
        getLocation: geolocation => dispatch(getLocationAction(dispatch)(geolocation))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
