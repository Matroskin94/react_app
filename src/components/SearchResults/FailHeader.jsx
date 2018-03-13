import React from 'react';
import { Link } from 'react-router-dom';

const FailHeader = () => (
    <div>
        <Link to='/'> BACK </Link>
        <h3>Nothing found, try another query</h3>
    </div>
);

export default FailHeader;
