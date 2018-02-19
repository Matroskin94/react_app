import React from 'react';
import PropTypes from 'prop-types';

const ItemDescription = ({ itemDescription = {} }) => {
    const {
        bedrooms = 0,
        bathrooms = 0,
        cars = 0,
        summary,
        listerURL
    } = itemDescription;

    return (
        <div>
            <p>
                Beds: {bedrooms}
            </p>
            <p>
                Bathrooms: {bathrooms}
            </p>
            <p>
                Car spaces: {cars}
            </p>
            <p>
                {summary}
            </p>
            <a href={listerURL}>
                Show full information
            </a>
        </div>
    );
};

ItemDescription.propTypes = {
    itemDescription: PropTypes.object
};

ItemDescription.defaultProps = {
    itemDescription: {}
};

export default ItemDescription;
