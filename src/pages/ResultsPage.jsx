import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';
import { noop } from '../utils/SearchUtils';
import { chooseLocationsAction, clearResultsAction } from '../actions/LocationActions';
import Parser from '../components/SearchResults/Parser.jsx';

@Parser()
class ResultsPage extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        loadQueryResults: PropTypes.func,
        clearResults: PropTypes.func,
        parseQuery: PropTypes.func, // Метод из декоратора Parser для парсинга данных о запросе
        getURLParams: PropTypes.func, // Метод из декоратора Parser для получения параметров loaction
        currentPage: PropTypes.number,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        queryRessults: [],
        clearResults: noop,
        loadQueryResults: noop,
        parseQuery: noop,
        getURLParams: noop,
        currentPage: 1,
        isLoading: false
    };

    componentDidMount() {
        const searchProperty = this.props.getURLParams(['search']);

        this.props.loadQueryResults(searchProperty.search);
    }

    componentWillUnmount() {
        this.props.clearResults();
    }

    handleScroll = () => {
        const property = this.props.getURLParams(['search']).search;

        if (document.body.scrollHeight - document.body.clientHeight === window.scrollY && !this.props.isLoading) {
            this.props.loadQueryResults(property, this.props.currentPage + 1);
        }
    }

    render() {
        return (
            <div>
                <SearchHeader
                    isResultsEmpty={this.props.queryRessults.length === 0}
                    matches={this.props.parseQuery()}
                    currentPage={this.props.currentPage}
                />
                <Results results={this.props.queryRessults} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        queryRessults: state.searchReducer.queryRessults,
        currentPage: state.searchReducer.currentPage,
        isLoading: state.searchReducer.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearResults: () => dispatch(clearResultsAction()),
        loadQueryResults: (query, page) => dispatch(chooseLocationsAction(query, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
