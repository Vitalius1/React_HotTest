import React from 'react';

class HotSauceImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {imageURL, title} = this.props// deconstructing object
        return (
            <img src={imageURL} alt={title}/>
        );
    }
}
export default HotSauceImage;