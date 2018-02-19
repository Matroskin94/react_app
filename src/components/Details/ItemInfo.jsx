import React from 'react';
import PropTypes from 'prop-types';

const ItemInfo = ({ itemInfo = {} }) => {
    const {
        price_currency: currency,
        price,
        title,
        img_url: imgURL
    } = itemInfo;

    return (
        <div>
            <h3>{currency} {price} </h3>
            <h4>{title}</h4>
            <div>
                <img alt='' src={imgURL} />
            </div>
        </div>
    );
};

ItemInfo.propTypes = {
    itemInfo: PropTypes.object
};

ItemInfo.defaultProps = {
    itemInfo: {}
};

export default ItemInfo;
