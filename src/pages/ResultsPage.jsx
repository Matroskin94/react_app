import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';
import { noop } from '../utils/SearchUtils';
import { chooseLocationsAction, clearResultsAction } from '../actions/LocationActions';
import { getCurrentQueryInfoAction } from '../actions/SearchActions';
import ParseURL from '../components/SearchResults/ParseURL.jsx';

@ParseURL()
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
        currentQueryInfo:{},
        isLoading: false
    };

    componentDidMount() {
        const searchProperty = this.props.getURLParams(['search']);

        this.props.searchResults(searchProperty.search);
        this.props.getQueryFromLocalStorage('currentQuery');
    }

    componentWillUnmount() {
        this.props.clearResults();
    }

    handleScroll = () => {
        const property = this.props.getURLParams(['search']).search;

        if (document.body.scrollHeight - document.body.clientHeight === window.scrollY && !this.props.isLoading) {
            this.props.searchResults(property, this.props.currentPage + 1);
        }
    }

    render() {
        return (
            <div>
                <SearchHeader
                    isResultsEmpty={this.props.queryRessults.length === 0}
                    currentQueryInfo={this.props.currentQueryInfo}
                    currentPage={this.props.currentPage}
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
