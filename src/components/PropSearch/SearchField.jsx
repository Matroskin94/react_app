import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { searchAction } from '../../actions/SearchActions';
import { chooseLocationsAction, getLocationAction } from '../../actions/LocationActions';
import { geolocationService } from '../../actions/ActionService';
import { initFavoritesAction } from '../../actions/FavoriteActions';
import ResultQueries from './ResultQueries.jsx';
import { noop } from '../../utils/SearchUtils';

class Searchfield extends PureComponent {
    static propTypes = {
        findAddressQuery: PropTypes.func,
        chooseQuery: PropTypes.func,
        getLocation: PropTypes.func,
        getFavoritesFromLocal: PropTypes.func,
        queries: PropTypes.array,
        isFavoritesLoaded: PropTypes.bool
    };

    static defaultProps = {
        findAddressQuery: noop,
        chooseQuery: noop,
        getLocation: noop,
        getFavoritesFromLocal: noop,
        queries: [],
        isFavoritesLoaded: false
    };
    state = {
        inputValue: ''
    };

    componentDidMount() {
        if (!this.props.isFavoritesLoaded) {
            this.props.getFavoritesFromLocal();
        }
    }

    handleSearchClick = () => {
        const searchObject = { place_name: this.state.inputValue, locationBased: false };

        this.props.findAddressQuery(searchObject);
    }

    handleLocationClick = () => {
        this.props.getLocation(geolocationService());
    }

    handleQueryClick = address => {
        const location = this.props.queries.find(item => item.address === address);
        const property = location.locationBased ?
            { centre_point: address } :
            { place_name: address };

        this.props.chooseQuery(property, 1);
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    render() {
        return (
            <div>
                <input
                    onChange={this.handleInputChange}
                    type='text'
                    value={this.state.inputValue}
                />
                <button onClick={this.handleSearchClick}>
                    <Link to={`/results/?address=${this.state.inputValue}&locationBased=false`}>Go</Link>
                </button>
                <button onClick={this.handleLocationClick}>
                    <Link to={`/results/?address=${this.state.inputValue}&locationBased=true`}>My Location</Link>
                </button>
                <ResultQueries results={this.props.queries} onItemClick={this.handleQueryClick} />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        queries: state.searchReducer.queries,
        searchWord: state.searchReducer.searchWord,
        isFavoritesLoaded: state.searchReducer.isFavoritesLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        findAddressQuery: place => dispatch(searchAction(place)),
        chooseQuery: (query, page) => dispatch(chooseLocationsAction(query, page)),
        getLocation: geolocation => dispatch(getLocationAction(geolocation)),
        getFavoritesFromLocal: () => dispatch(initFavoritesAction())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
