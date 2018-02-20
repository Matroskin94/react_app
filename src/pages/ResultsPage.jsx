import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Results from '../components/SearchResults/ResultLocations.jsx';
import SearchHeader from '../components/SearchResults/Header.jsx';

class ResultsPage extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        searchWord: PropTypes.string
    };

    static defaultProps = {
        queryRessults: [],
        searchWord: ''
    };

    render() {
        return (
            <div>
                <SearchHeader searchWord={this.props.searchWord} />
                <Results results={this.props.queryRessults} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        queryRessults: state.searchReducer.queryRessults,
        searchWord: state.searchReducer.searchWord
    };
}

export default connect(mapStateToProps)(ResultsPage);
