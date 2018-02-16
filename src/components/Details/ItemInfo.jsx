import React from 'react';
import PropTypes from 'prop-types';

const ItemInfo = props => (
    <div>
        <h3>{props.itemInfo.price_currency} {props.itemInfo.price} </h3>
        <h4>{props.itemInfo.title}</h4>
        <div>
            <img alt='' src={props.itemInfo.img_url} />
        </div>
    </div>
);

ItemInfo.propTypes = {
    itemInfo: PropTypes.object
};

ItemInfo.defaultProps = {
    itemInfo: {}
};

export default ItemInfo;
