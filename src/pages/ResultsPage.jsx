import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';
import { noop } from '../utils/SearchUtils';
import { chooseLocationsAction } from '../actions/LocationActions';

class ResultsPage extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        loadQuery: PropTypes.func,
        location: PropTypes.object,
        currentPage: PropTypes.number,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        queryRessults: [],
        loadQuery: noop,
        location: {},
        currentPage: 1,
        isLoading: false
    };

    componentDidMount() {
        const property = this.getProperty();

        this.props.loadQuery(property, [], 1);
    }

    getProperty = () => {
        const { address, locationBased } = queryString.parse(this.props.location.search);

        return locationBased === 'true' ?
            { centre_point: address } :
            { place_name: address };
    }

    handleScroll = () => {
        const property = this.getProperty();

        if (document.body.scrollHeight - document.body.clientHeight === window.scrollY && !this.props.isLoading) {
            this.props.loadQuery(property, this.props.queryRessults, this.props.currentPage + 1);
        }
    }

    render() {
        return (
            <div onWheel={this.handleScroll}>
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
        loadQuery: (query, currentResults, page) => dispatch(chooseLocationsAction(dispatch)(query, currentResults, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
