import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { chooseLocationsAction } from '../../actions/LocationActions';
import { searchAction } from '../../actions/SearchActions';
import { geolocationService } from '../../actions/ActionService';
import { initFavoritesAction } from '../../actions/FavoriteActions';
import ResultQueries from './ResultQueries.jsx';
import changeHistory from './ChangeHistory.jsx';
import { noop } from '../../utils/SearchUtils';
import styles from './SearchField.css';

@changeHistory()
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
            this.props.loadQuery({ centre_point: result });
            this.props.historyPush({ url: '/results/?', query: `centre_point=${result}` });
        });
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    handleLinkClick = (queryAsObject, queryAsString) => {
        this.props.loadQuery(queryAsObject);
        this.props.historyPush({ url: '/results/?', query: queryAsString });
    }

    render() {
        return (
            <div>
                <TextField
                    onChange={this.handleInputChange}
                    type='text'
                    label='Input your query'
                    placeholder='city'
                    multiline
                    margin='normal'
                    value={this.state.inputValue}
                />
                <Button
                    variant='raised'
                    size='small'
                    color='primary'
                    onClick={this.handleGoClick}
                >
                    Go
                </Button>
                <Button
                    variant='raised'
                    size='small'
                    color='primary'
                    onClick={this.handleLocationClick}
                >
                    My Location
                </Button>
                <ResultQueries onLinkClick={this.handleLinkClick} results={this.props.queries} />
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
