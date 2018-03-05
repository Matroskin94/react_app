import React from 'react';
import loadingAnimation from './LoadingAnimation.css';

const LoadingHeader = () => (
    <div className={loadingAnimation.spinner}>
        <div className={loadingAnimation.bounce1} />
        <div className={loadingAnimation.bounce2} />
        <div className={loadingAnimation.bounce3} />
    </div>
);

export default LoadingHeader;
