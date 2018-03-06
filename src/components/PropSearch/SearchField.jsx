import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseLocationsAction } from '../../actions/LocationActions';
import { searchAction } from '../../actions/SearchActions';
import { geolocationService } from '../../actions/ActionService';
import { initFavoritesAction } from '../../actions/FavoriteActions';
import ResultQueries from './ResultQueries.jsx';
import ChangeHistory from './ChangeHistory.jsx';
import { noop } from '../../utils/SearchUtils';
import gridStyles from '../../styles/GridStyles.css';

//@ChangeHistory()
class Searchfield extends PureComponent {
    static propTypes = {
        historyPush: PropTypes.func, // Метод из декоратора ChangeHistory для перехода по ссылке
        getFavoritesFromLocal: PropTypes.func,
        loadQuery: PropTypes.func,
        queries: PropTypes.array,
        isFavoritesLoaded: PropTypes.bool
    };

    static defaultProps = {
        historyPush: noop,
        getFavoritesFromLocal: noop,
        loadQuery: noop,
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

    handleGoClick = () => {
        this.props.loadQuery({ place_name: this.state.inputValue });
        this.props.historyPush({ url: '/results/?', query: `place_name=${this.state.inputValue}` });
    }

    handleLocationClick = () => {
        geolocationService().then(result => {
            this.props.historyPush({ url: '/results/?', query: `centre_point=${result}` });
        });
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    handleLinkClick = (propertyObj, propertyString) => {
        this.props.loadQuery(propertyObj);
        this.props.historyPush({ url: '/results/?', query: propertyString });
    }

    render() {
        return (
            <div>
                <div className={gridStyles.row}>
                    <div className={`${gridStyles.col4} ${gridStyles.cols}`}>
                        <input
                            onChange={this.handleInputChange}
                            type='text'
                            value={this.state.inputValue}
                        />
                    </div>
                    <div className={`${gridStyles.col6} ${gridStyles.cols}`}>
                        <button onClick={this.handleGoClick}>Go</button>
                        <button onClick={this.handleLocationClick}> My Location</button>
                    </div>
                </div>
                <div className={gridStyles.row}>
                    <ResultQueries onHandleLinkClick={this.handleLinkClick} results={this.props.queries} />
                </div>
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
        loadQuery: place => dispatch(searchAction(place)),
        chooseQuery: (query, page) => dispatch(chooseLocationsAction(query, page)),
        getFavoritesFromLocal: () => dispatch(initFavoritesAction())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
