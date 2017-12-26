import React from 'react';

function HotSauceImage({ imageURL, title }) {
    return (
        <div className="HotSauceBox-imageContainer">
            <img alt={title} src={imageURL} />
        </div>
    );
}
export default HotSauceImage;