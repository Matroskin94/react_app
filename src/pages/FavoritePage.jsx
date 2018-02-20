import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Favorite/Header.jsx';
import Results from '../components/SearchResults/ResultLocations.jsx';

class Favorite extends PureComponent {
    static propTypes = {
        favorites: PropTypes.array
    };
    static defaultProps = {
        favorites: []
    };

    render() {
        return (
            <div>
                <Header />
                <Results results={this.props.favorites} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.searchReducer.favorites
    };
}

export default connect(mapStateToProps)(Favorite);
