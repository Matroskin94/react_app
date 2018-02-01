import React from 'react';

const Header = props => ({
    render: function() {
        return (
            <div>
                <button className='button' id='faves-but'>Faves</button>
                <h3>Property cross</h3>
            </div>
        );
    }
});

export { Header };
