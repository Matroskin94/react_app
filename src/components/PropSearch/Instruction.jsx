import React from 'react';
import classNames from 'classnames';
import gridStyles from '../../styles/GridStyles.css';

const Instruction = () => (
    <div className={gridStyles.row}>
        <div className={classNames(gridStyles.col12, gridStyles.cols)}>
            <p>Use the form below to search for houses to buy. You can search by
            place-name, postcode, or click My location, to search in your
            current location!
            </p>
        </div>
    </div>
);

export default Instruction;
