import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';
import { noop } from '../utils/SearchUtils';
import { getCurrentQueryInfoAction } from '../actions/SearchActions';
import { chooseLocationsAction, clearResultsAction } from '../actions/LocationActions';
import parseURL from '../components/SearchResults/ParseURL.jsx';

@parseURL()
class ResultsPage extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        searchResults: PropTypes.func,
        clearResults: PropTypes.func,
        getQueryFromLocalStorage: PropTypes.func,
        getURLParams: PropTypes.func, // Метод из декоратора ParseURL для получения параметров loaction
        currentPage: PropTypes.number,
        currentQueryInfo: PropTypes.object,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        queryRessults: [],
        clearResults: noop,
        searchResults: noop,
        getQueryFromLocalStorage: noop,
        getURLParams: noop,
        currentPage: 1,
        currentQueryInfo: {},
        isLoading: false
    };
    constructor(props) {
        super(props);
        this.state = {
            searchProperty: props.getURLParams(['search']).search || {}
        };
    }

    componentDidMount() {
        this.props.searchResults(this.state.searchProperty);
        this.props.getQueryFromLocalStorage('currentQuery');
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
        this.props.clearResults();
    }

    handleScroll = () => {
        if (document.body.scrollHeight - document.body.clientHeight < window.scrollY + 300 && !this.props.isLoading) {
            this.props.searchResults(this.state.searchProperty, this.props.currentPage + 1);
        }
    }

    render() {
        return (
            <div>
                <SearchHeader
                    isLoading={this.props.isLoading}
                    currentPage={this.props.currentPage}
                    currentQueryInfo={this.props.currentQueryInfo}
                    resultsLength={this.props.queryRessults.length}
                />
                <Results results={this.props.queryRessults} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentQueryInfo: state.searchReducer.currentQueryInfo,
        queryRessults: state.searchReducer.queryRessults,
        currentPage: state.searchReducer.currentPage,
        isLoading: state.searchReducer.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getQueryFromLocalStorage: itemKey => dispatch(getCurrentQueryInfoAction(itemKey)),
        clearResults: () => dispatch(clearResultsAction()),
        searchResults: (query, page) => dispatch(chooseLocationsAction(query, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
