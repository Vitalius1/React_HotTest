import React from 'react';

class CloseButton extends React.Component {
    render() {
        return (
            <span className='close' onClick={(id) => this.props.onClickClose(this.props.id)}>&times;</span>
        );
    }
}
export default CloseButton;