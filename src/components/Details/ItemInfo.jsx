import React from 'react';
import PropTypes from 'prop-types';

const ItemInfo = ({ itemInfo = {} }) => {
    const {
        currency,
        price,
        title,
        imgURL
    } = itemInfo;

    return (
        <div>
            <h3>
                {currency} {price}
            </h3>
            <h4>
                {title}
            </h4>
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
