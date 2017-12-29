import React from 'react';

class HotSauceRemoveButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClickCaptured = this.handleClickCaptured.bind(this);
        this.handleKeyDownCaptured = this.handleKeyDownCaptured.bind(this);
    }

    handleClickCaptured(event) { // capture the click event from bubbling-up
        event.stopPropagation();
        this.props.onClickRemove(this.props.sauceId);
    }

    handleKeyDownCaptured(event) { // capture the keyDown event from bubbling-up
        event.stopPropagation();
        if (event.key === "Backspace") {
            this.props.onClickRemove(this.props.sauceId)
        }
    }

    handleBlur() { // notify the parent (HotSauceBox) that the focus left remove button
        this.props.handleBlur()
    }

    render() {
        // only return the element when mouse hovers the HotSauceBox specific to this remove button
        if (!this.props.isMouseInside) {
            return null;
        }
        return (
            <div onClickCapture={this.handleClickCaptured}
                onKeyDownCapture={this.handleKeyDownCaptured}>
                <span
                    tabIndex={0}
                    className="HotSauceBox-removeButton"
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                    onKeyDown={this.handleKeyDown}
                >
                    &#10005;
                </span>
            </div>
        );
    }
}
export default HotSauceRemoveButton;