import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';
import { noop } from '../utils/SearchUtils';
import { chooseLocationsAction, clearResultsAction } from '../actions/LocationActions';

class ResultsPage extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        loadQuery: PropTypes.func,
        clearResults: PropTypes.func,
        location: PropTypes.object,
        currentPage: PropTypes.number,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        queryRessults: [],
        clearResults: noop,
        loadQuery: noop,
        location: {},
        currentPage: 1,
        isLoading: false
    };

    componentDidMount() {
        const property = this.getProperty();

        window.addEventListener('scroll', this.handleScroll, false);
        this.props.loadQuery(property, 1);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
        this.props.clearResults();
    }

    getProperty = () => {
        const { address, locationBased } = queryString.parse(this.props.location.search);

        return locationBased === 'true' ?
            { centre_point: address } :
            { place_name: address };
    }

    handleScroll = () => {
        const property = this.getProperty();
        const lastPage = this.props.queryRessults.length / 20 + 1;

        if (document.body.scrollHeight - document.body.clientHeight < window.scrollY + 200
            && !this.props.isLoading
            && lastPage !== this.props.currentPage) {
            this.props.loadQuery(property, this.props.currentPage + 1);
        }
    }

    render() {
        return (
            <div>
                <SearchHeader />
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
        loadQuery: (query, page) => dispatch(chooseLocationsAction(query, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
