import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';
import { noop } from '../utils/SearchUtils';
import { chooseLocationsAction } from '../actions/LocationActions';

class ResultsPage extends Component {
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
        const { address, locationBased } = queryString.parse(this.props.location.search);
        const property = locationBased === 'true' ?
            { centre_point: address } :
            { place_name: address };

        if (!this.props.isLoading && this.props.queryRessults.length === 0) {
            this.props.loadQuery(property, 1);
        }
        window.onscroll = () => {
            if (document.body.scrollHeight - document.body.clientHeight === window.scrollY) {
                this.props.loadQuery(property, this.props.currentPage + 1);
            }
        };
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
        loadQuery: (query, page) => dispatch(chooseLocationsAction(dispatch)(query, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
