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
