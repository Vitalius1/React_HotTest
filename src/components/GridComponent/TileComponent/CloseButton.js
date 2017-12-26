import React from 'react';

class CloseButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClickCaptured = this.handleClickCaptured.bind(this);
        this.handleKeyDownCaptured = this.handleKeyDownCaptured.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleClickCaptured(e) {
        e.stopPropagation();
        this.props.onClickClose(this.props.id);
    }
    
    handleKeyDownCaptured(e) {
        e.stopPropagation();
        if (e.key === 'Backspace') {
            this.props.onClickClose(this.props.id)
        }
    }

    handleBlur() {
    }

    render() {
        if (!this.props.isMouseInside) {
            return null;
        }
        return (
            <div onClickCapture={this.handleClickCaptured}
                onKeyDownCapture={this.handleKeyDownCaptured}>
                <span
                    onKeyDown={this.handleKeyDown}
                    tabIndex={0}
                    onBlur={this.handleBlur}
                    className='close'
                    onClick={this.handleClick}
                >&times;</span>
            </div>
        );
    }
}
export default CloseButton;