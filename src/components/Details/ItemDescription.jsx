import React from 'react';
import PropTypes from 'prop-types';

const ItemDescription = props => (
    <div>
        <p>Beds: {props.itemDescription.bedroom_number || 0}<br />
            Bathrooms: {props.itemDescription.bathroom_number || 0}<br />
            Car spaces: {props.itemDescription.car_spaces || 0}
        </p>
        <p>
            {props.itemDescription.summary}
        </p>
        <a href={props.itemDescription.lister_url}>Show full information</a>
    </div>
);

export default ItemDescription;

ItemDescription.propTypes = {
    itemDescription: PropTypes.object
};

ItemDescription.defaultProps = {
    itemDescription: {}
};
