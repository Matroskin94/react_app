import React, { PureComponent } from 'react';
import Header from '../components/Favorite/Header.jsx';
import Results from '../components/SearchResults/ResultLocations.jsx';
import { getFavoritesFromLocal } from '../utils/SearchUtils';

class Favorite extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Results {...this.props} favorites={getFavoritesFromLocal()} />
            </div>
        );
    }
}

export default Favorite;
