import React from 'react';

class CloseButton extends React.Component {
    handleClick(e) {
        e.stopPropagation();
        console.log('****');
        this.props.onClickClose(this.props.id);
    }
    render() {
        return (
            <div onClickCapture={this.handleClick.bind(this)}>
                <span className='close' onClick={this.handleCl}>&times;</span>
            </div>
        );
    }
}
export default CloseButton;