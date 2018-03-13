import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Details/Header.jsx';
import ItemInfo from '../components/Details/ItemInfo.jsx';
import ItemDescription from '../components/Details/ItemDescription.jsx';
import ChangeHistory from '../components/PropSearch//ChangeHistory.jsx';
import { addFavoriteAction, deleteFavoriteAction } from '../actions/FavoriteActions';
import { noop } from '../utils/SearchUtils';

class Details extends PureComponent {
    static propTypes = {
        favorites: PropTypes.array,
        activeItem: PropTypes.object,
        addToFavorite: PropTypes.func,
        deleteFromFavorite: PropTypes.func
    };

    static defaultProps = {
        favorites: [],
        activeItem: {},
        addToFavorite: noop,
        deleteFromFavorite: noop
    };

    onFavoriteClick = isFavorite => {
        isFavorite ? this.props.deleteFromFavorite(this.props.activeItem) :
            this.props.addToFavorite(this.props.activeItem);
    };

    isFavorite = () =>
        this.props.favorites.some(item => item.title === this.props.activeItem.title);

    render() {
        const {
            bathroom_number: bathrooms,
            bedroom_number: bedrooms,
            car_spaces: cars,
            img_url: imgURL,
            lister_url: listerURL,
            price,
            price_currency: currency,
            summary,
            title
        } = this.props.activeItem;
        const itemInfo = {
            price,
            currency,
            imgURL,
            title
        };
        const itemDescription = {
            bathrooms,
            bedrooms,
            cars,
            listerURL,
            summary
        };

        return (
            <div>
                <Header
                    handleFavoriteClick={this.onFavoriteClick}
                    isFavorite={this.isFavorite()}
                />
                <ItemInfo itemInfo={itemInfo} />
                <ItemDescription itemDescription={itemDescription} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.searchReducer.favorites,
        activeItem: state.detailsReducer.activeItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToFavorite: item => dispatch(addFavoriteAction(item)),
        deleteFromFavorite: item => dispatch(deleteFavoriteAction(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
