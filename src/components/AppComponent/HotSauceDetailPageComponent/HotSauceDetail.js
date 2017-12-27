import React from 'react';
// reusing already existing component to build the Detail Page Component
import HotSauceTitle from '../HotSauceBoxComponent/HotSauceTitle';
import HotSauceImage from '../HotSauceBoxComponent/HotSauceImage';
import HotSauceDescription from './HotSauceDescription';

class HotSauceDetail extends React.Component {
    render() {
        // Render nothing if the "show" prop passed from App Component is false
        if (!this.props.show) {
            return null;
        }
        // deconstruct the sauce object passed from the parent
        const { imageURL, title, description } = this.props.sauce;
        return (
            <div className="HotSauceDetail-wrapperContainer">
                <div className="HotSauceDetail-leftContainer">
                    <div className="HotSauceDetail-headerContainer">
                        <a href="#" onClick={() => this.props.onClick()}>
                            &lt;&nbsp; BACK TO HOT SAUCE LIST
                        </a>
                        <HotSauceTitle title={title} />
                    </div>
                    <div className="HotSauceDetail-imageContainer">
                        <HotSauceImage
                            imageURL={imageURL}
                            title={title}
                        />
                    </div>
                </div>
                <div className="HotSauceDetail-rightDescriptionContainer">
                    <HotSauceDescription description={description} />
                </div>
            </div>
        );
    }
}
export default HotSauceDetail;