import React from 'react';

class Detail extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        // deconstruct the sauce prop
        const { imageURL, title, subtitle, description } = this.props.sauce;

        return (
            <div className='detail-page'>
                <div className='left-title-image'>
                    <div className='header-title'>
                        <a href="#" onClick={() => this.props.onClick()}>
                            &lt;&nbsp; BACK TO HOT SAUCE LIST
                        </a>
                        <h1>{title}</h1>
                    </div>
                    <div className='detail-image'>
                        <img src={imageURL} alt={title} />
                    </div>
                </div>

                <div className='right-description'>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}
export default Detail;