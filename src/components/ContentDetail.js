// ContentDetail.js

import React from 'react';

const ContentDetail = ({ imageUrl, altText, description }) => {
    return (
        <div className="container-content">
            <div className="detail">
                <div className="title"></div>
                <img src={imageUrl} alt={altText} className="img-content" />
                <h3>{description}</h3>
            </div>
        </div>
    );
};

export default ContentDetail;
