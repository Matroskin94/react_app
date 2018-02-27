import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { chooseLocationsAction, getLocationAction } from '../../actions/LocationActions';
import { geolocationService } from '../../actions/ActionService';
import { initFavoritesAction } from '../../actions/FavoriteActions';
import ResultQueries from './ResultQueries.jsx';
import WrapperComponent from './WrapperComponent.jsx';
import { noop } from '../../utils/SearchUtils';

@WrapperComponent
class Searchfield extends PureComponent {
    static propTypes = {
        chooseQuery: PropTypes.func,
        getLocation: PropTypes.func,
        getFavoritesFromLocal: PropTypes.func,
        queries: PropTypes.array,
        isFavoritesLoaded: PropTypes.bool
    };

    static defaultProps = {
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

    handleLocationClick = () => {
        geolocationService().then(result => {
            this.props.goToResults(result);
        });
    }

    handleQueryClick = address => {
        this.props.chooseQuery({centre_point: address}, 1);
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
                <button>
                    <Link to={`/results/?place_name=${this.state.inputValue}`}>Go</Link>
                </button>
                <button onClick={this.handleLocationClick}> My Location</button>
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
        chooseQuery: (query, page) => dispatch(chooseLocationsAction(query, page)),
        getLocation: geolocation => dispatch(getLocationAction(geolocation)),
        getFavoritesFromLocal: () => dispatch(initFavoritesAction())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
