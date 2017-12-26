import React from 'react';

class CloseButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleClick(e) {
        e.stopPropagation();
        this.props.onClickClose(this.props.id);
    }
    
    render() {
        if(!this.props.isMouseInside){
            return null;
        }
        return (
            <div onClickCapture={this.handleClick.bind(this)}>
                <span tabIndex={0} className='close' onClick={this.handleCl}>&times;</span>
            </div>
        );
    }
}
export default CloseButton;