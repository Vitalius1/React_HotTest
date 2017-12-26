import React from 'react';

class HotSauceRemoveButton extends React.Component {
    constructor(props) {
        super(props);

        this._handleClickCaptured = this._handleClickCaptured.bind(this);
        this._handleKeyDownCaptured = this._handleKeyDownCaptured.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
    }

    _handleClickCaptured(e) { // capture the click event from bubbling-up
        e.stopPropagation();
        this.props.onClickClose(this.props.id);
    }

    _handleKeyDownCaptured(e) { // capture the keyDown event from bubbling-up
        e.stopPropagation();
        if (e.key === 'Backspace') {
            this.props.onClickClose(this.props.id)
        }
    }

    _handleBlur() {
        this.props.handleBlur()
    }

    render() {
        if (!this.props.isMouseInside) {
            return null;
        }
        return (
            <div onClickCapture={this._handleClickCaptured}
                onKeyDownCapture={this._handleKeyDownCaptured}>
                <span
                    onKeyDown={this.handleKeyDown}
                    tabIndex={0}
                    onBlur={this._handleBlur}
                    className='close'
                    onClick={this.handleClick}
                >
                    &times;
                </span>
            </div>
        );
    }
}
export default HotSauceRemoveButton;