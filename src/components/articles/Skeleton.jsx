import React from 'react';
import './Skeleton.css';
const Skeleton = () => {
    return (
        <div className="skeleton-article">
            <div className="skeleton-image"></div>
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
        </div>
    );
};

export default Skeleton;
