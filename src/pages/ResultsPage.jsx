import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';
import { noop } from '../utils/SearchUtils';
import { searchAction } from '../actions/SearchActions';
import { chooseLocationsAction, clearResultsAction } from '../actions/LocationActions';

class ResultsPage extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        queries: PropTypes.array,
        loadQueryResults: PropTypes.func,
        loadQuery: PropTypes.func,
        clearResults: PropTypes.func,
        location: PropTypes.object,
        currentPage: PropTypes.number,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        queryRessults: [],
        queries: [],
        clearResults: noop,
        loadQueryResults: noop,
        loadQuery: noop,
        location: {},
        currentPage: 1,
        isLoading: false
    };

    componentDidMount() {
        const searchProperty = queryString.parse(this.props.location.search);

        this.props.loadQuery(searchProperty);
        this.props.loadQueryResults(searchProperty, 1);
    }

    componentWillUnmount() {
        this.props.clearResults();
    }

    handleScroll = () => {
        const property = queryString.parse(this.props.location.search);

        if (document.body.scrollHeight - document.body.clientHeight === window.scrollY && !this.props.isLoading) {
            this.props.loadQueryResults(property, this.props.currentPage + 1);
        }
    }

    render() {
        return (
            <div>
                <SearchHeader
                    isResultsEmpty={this.props.queryRessults.length === 0}
                    address={queryString.parse(this.props.location.search)}
                    queries={this.props.queries}
                    currentPage={this.props.currentPage}
                />
                <Results results={this.props.queryRessults} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        queries: state.searchReducer.queries,
        queryRessults: state.searchReducer.queryRessults,
        currentPage: state.searchReducer.currentPage,
        isLoading: state.searchReducer.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearResults: () => dispatch(clearResultsAction()),
        loadQuery: place => dispatch(searchAction(place)),
        loadQueryResults: (query, page) => dispatch(chooseLocationsAction(query, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
