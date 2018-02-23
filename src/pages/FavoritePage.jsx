import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/FavoriteResults/Header.jsx';
import Results from '../components/SearchResults/ResultLocations.jsx';
import { initFavoritesAction } from '../actions/FavoriteActions';
import { noop } from '../utils/SearchUtils';

class Favorite extends PureComponent {
    static propTypes = {
        favorites: PropTypes.array,
        isFavoritesLoaded: PropTypes.bool,
        getFavoritesFromLocal: PropTypes.func
    };
    static defaultProps = {
        favorites: [],
        isFavoritesLoaded: false,
        getFavoritesFromLocal: noop
    };

    componentDidMount() {
        if (!this.props.isFavoritesLoaded) {
            this.props.getFavoritesFromLocal();
        }
    }

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
        favorites: state.searchReducer.favorites,
        isFavoritesLoaded: state.searchReducer.isFavoritesLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getFavoritesFromLocal: () => dispatch(initFavoritesAction())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
