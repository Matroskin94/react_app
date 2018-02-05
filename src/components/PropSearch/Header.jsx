import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/favorite' >Faves </Link>
                <h3>Property cross</h3>
            </div>
        );
    }
}

export default Header;
