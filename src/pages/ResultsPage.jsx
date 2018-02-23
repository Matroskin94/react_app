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
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        queryRessults: [],
        loadQuery: noop,
        location: {},
        isLoading: false
    };

    componentDidMount() {
        const { address, locationBased } = queryString.parse(this.props.location.search);

        if (!this.props.isLoading && this.props.queryRessults.length === 0) {
            const property = locationBased === 'true' ?
                { centre_point: address } :
                { place_name: address };

            this.props.loadQuery(property);
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
        isLoading: state.searchReducer.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadQuery: query => dispatch(chooseLocationsAction(dispatch)(query))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
