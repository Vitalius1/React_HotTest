import React from 'react';



class Detail extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        // deconstruct the sauce prop
        const {imageURL, title, subtitle, description} = this.props.sauce;

        return (
            <div className='detail-page'>
                <a href="#" onClick={() => this.props.onClick()}>
                    <h2>&lt; BACK TO HOT SAUCE LIST</h2>
                </a>
                <img src={imageURL} alt={title}/>
            </div>
        );
    }
}
export default Detail;