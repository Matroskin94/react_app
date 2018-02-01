import React from 'react';

const Instruction = props => ({
    render: function() {
        return (
            <div>
                <p>Use the form below to search for houses to buy. You can search by
                place-name, postcode, or click "My location", to search in your
                current location!
                </p>
            </div>
        );
    }
});

export { Instruction };
