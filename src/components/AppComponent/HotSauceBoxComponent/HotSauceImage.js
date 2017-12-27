import React from 'react';

function HotSauceImage({ imageURL, title }) {
    return (
            <img alt={title} src={imageURL} />
    );
}
export default HotSauceImage;