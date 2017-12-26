import React from 'react';
// importing sub-components which form the HotSauceBox Component
import HotSauceImage from './HotSauceImage';
import HotSauceTitle from './HotSauceTitle';
import HotSauceSubtitle from './HotSauceSubtitle';
import HotSauceRemoveButton from './HotSauceRemoveButton'


class HotSauceBox extends React.Component {
    constructor(props) {
        super(props);
        // initialize state when constructing the component
        this.state = {
            isMouseInside: false, // used to toggle the close button on each tile when mouse hovering
        };

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
        this._handleClickClose = this._handleClickClose.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleBlurFromCloseButton = this._handleBlurFromCloseButton.bind(this);
    }

    _handleKeyDown(event) { // Handling when HotSauceBox is in focus and press ENTER key
        if (event.key == 'Enter') {
            this.props.onClick(this.props.sauce.id);
        }
    }

    _handleMouseEnter() { // Hover-in mouse handler to show the close button
        this.setState({
            isMouseInside: true
        })
    }

    _handleMouseLeave() { // Hover-out mouse handler to hide the close button
        this.setState({
            isMouseInside: false
        })
    }

    _handleClickClose(id) { // pass the id to parent method to handle removing from list
        this.props.onClickClose(id);
    }

    _handleFocus() { // when HotSauceBox in focus by pressing TAB key --> show close button
        this.setState({
            isMouseInside: true
        })
    }

    _handleBlurFromCloseButton() { // when focus leaving close button --> hide it again
        this.setState({
            isMouseInside: false
        })
    }

    render() {
        const { title, subtitle, imageURL, id } = this.props.sauce; // deconstruct the sauce object
        return (
            <div
                onKeyDown={this._handleKeyDown}
                onFocus={this._handleFocus}
                tabIndex={0}
                className='tile'
                onClick={(id) => this.props.onClick(this.props.sauce.id)}
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
            >
                <HotSauceRemoveButton
                    onClickClose={this._handleClickClose}
                    id={id}
                    isMouseInside={this.state.isMouseInside}
                    handleBlur={this._handleBlurFromCloseButton}
                />
                <HotSauceImage
                    imageURL={imageURL}
                    title={title}
                />
                <div
                    className='label'>
                    <HotSauceTitle
                        title={title}
                    />
                    <HotSauceSubtitle
                        subtitle={subtitle}
                    />
                </div>
            </div>
        );
    }
}

export default HotSauceBox;