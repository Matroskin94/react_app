import React from 'react';
import loadingAnimation from '../../styles/LoadingAnimation.css';

const LoadingHeader = () => (
    <div className={loadingAnimation.spinner}>
        <div className={loadingAnimation.bounce1} />
        <div className={loadingAnimation.bounce2} />
        <div className={loadingAnimation} />
    </div>
);

export default LoadingHeader;
