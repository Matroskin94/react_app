import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import TextField from 'material-ui/TextField';
import { chooseLocationsAction } from '../../actions/LocationActions';
import { searchAction } from '../../actions/SearchActions';
import { geolocationService } from '../../actions/ActionService';
import { initFavoritesAction } from '../../actions/FavoriteActions';
import ResultQueries from './ResultQueries.jsx';
import changeHistory from './ChangeHistory.jsx';
import { noop } from '../../utils/SearchUtils';
import stylesJS from './SearchFieldStyles';

@changeHistory()
@compose(withStyles(stylesJS), withWidth())
class Searchfield extends PureComponent {
    static propTypes = {
        historyPush: PropTypes.func, // Метод из декоратора ChangeHistory для перехода по ссылке
        getFavoritesFromLocal: PropTypes.func,
        loadQuery: PropTypes.func,
        queries: PropTypes.array,
        isFavoritesLoaded: PropTypes.bool,
        classes: PropTypes.object
    };

    static defaultProps = {
        historyPush: noop,
        getFavoritesFromLocal: noop,
        loadQuery: noop,
        queries: [],
        isFavoritesLoaded: false,
        classes: {}
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
            <Grid container>
                <Grid
                    item
                    xs={12} md={3}
                >
                    <TextField
                        onChange={this.handleInputChange}
                        type='text'
                        label='Input your query'
                        placeholder='city'
                        multiline
                        margin='normal'
                        value={this.state.inputValue}
                    />
                </Grid>
                <Grid
                    item
                    xs={12} md={9}
                >
                    <Button
                        className={this.props.classes.buttons}
                        variant='raised'
                        size='small'
                        onClick={this.handleGoClick}
                    >
                        Go
                    </Button>
                    <Button
                        className={this.props.classes.buttons}
                        variant='raised'
                        size='small'
                        onClick={this.handleLocationClick}
                    >
                        My Location
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <ResultQueries onLinkClick={this.handleLinkClick} results={this.props.queries} />
                </Grid>
            </Grid>
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
