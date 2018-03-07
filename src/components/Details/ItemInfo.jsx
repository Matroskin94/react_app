import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemInfo.css';

const ItemInfo = ({ itemInfo = {} }) => {
    const {
        currency,
        price,
        title,
        imgURL
    } = itemInfo;

    return (
        <div className={styles.itemInfo}>
            <h3>{currency} {price}</h3>
            <h4>{title}</h4>
            <img alt={title} src={imgURL} />
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
