import React from 'react';



class Detail extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        
        return (
            <div className='detail-page'>
                <h1>Hello Detail Paige!</h1>
            </div>
            // {/* <div className='tile'>
            //     <Image url={this.props.sauce.imageURL} />
            //     <div className='label'>
            //         <Title title={this.props.sauce.title} />
            //         <Subtitle subtitle={this.props.sauce.subtitle} />
            //     </div>
            // </div> */}
        );
    }
}
export default Detail;