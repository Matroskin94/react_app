import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { chooseLocationsAction, getLocationAction } from '../../actions/LocationActions';
import { geolocationService } from '../../actions/ActionService';
import { initFavoritesAction } from '../../actions/FavoriteActions';
import ResultQueries from './ResultQueries.jsx';
import ChangeHistory from './ChangeHistory.jsx';
import { noop } from '../../utils/SearchUtils';

@ChangeHistory('/results/?centre_point=')
class Searchfield extends PureComponent {
    static propTypes = {
        historyPush: PropTypes.func, // Метод из декоратора ChangeHistory для перехода по ссылке
        chooseQuery: PropTypes.func,
        getLocation: PropTypes.func,
        getFavoritesFromLocal: PropTypes.func,
        queries: PropTypes.array,
        isFavoritesLoaded: PropTypes.bool
    };

    static defaultProps = {
        historyPush: noop,
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
            this.props.historyPush(result);
        });
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
                <ResultQueries results={this.props.queries} />
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
