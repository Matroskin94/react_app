import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Details/Header.jsx';
import ItemInfo from '../components/Details/ItemInfo.jsx';
import ItemDescription from '../components/Details/ItemDescription.jsx';

class Details extends PureComponent {
    static propTypes = {
        activeItem: PropTypes.object
    };

    static defaultProps = {
        activeItem: {}
    };
    render() {
        const itemData = this.props.activeItem;
        const itemInfo = {
            price: itemData.price,
            price_currency: itemData.price_currency,
            img_url: itemData.img_url,
            title: itemData.title
        };
        const itemDescription = {
            bathroom_number: itemData.bathroom_number,
            bedroom_number: itemData.bedroom_number,
            car_spaces: itemData.car_spaces,
            lister_url: itemData.lister_url,
            summary: itemData.summary
        };

        return (
            <div>
                <Header />
                <ItemInfo itemInfo={itemInfo} />
                <ItemDescription itemDescription={itemDescription} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeItem: state.detailsReducer.activeItem
    };
}

export default connect(mapStateToProps)(Details);
