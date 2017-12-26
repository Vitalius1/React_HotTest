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
            isMouseInside: false, // used to toggle the remove button on each tile when mouse hovering
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleBlurFromRemoveButton = this.handleBlurFromRemoveButton.bind(this);
    }

    handleKeyDown(event) { // Handling when HotSauceBox is in focus and press ENTER key
        if (event.key == 'Enter') {
            this.props.onClick(this.props.sauce.id);
        }
    }

    handleMouseEnter() { // Hover-in mouse handler to show the remove button
        this.setState({
            isMouseInside: true
        });
    }

    handleMouseLeave() { // Hover-out mouse handler to hide the remove button
        this.setState({
            isMouseInside: false
        });
    }

    handleClickRemove(id) { // pass the id to parent method to handle removing from list
        this.props.onClickRemove(id);
    }

    handleFocus() { // when HotSauceBox in focus by pressing TAB key --> show remove button
        this.setState({
            isMouseInside: true
        });
    }

    handleBlurFromRemoveButton() { // when focus leaving remove button --> hide it again
        this.setState({
            isMouseInside: false
        });
    }

    render() {
        const { title, subtitle, imageURL, id } = this.props.sauce; // deconstruct the sauce object
        return (
            <div
                tabIndex={0}
                className="HotSauceBox"
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={(id) => this.props.onClick(this.props.sauce.id)}
            >
                <HotSauceRemoveButton
                    sauceId={id}
                    onClickRemove={this.handleClickRemove}
                    isMouseInside={this.state.isMouseInside}
                    handleBlur={this.handleBlurFromRemoveButton}
                />
                <HotSauceImage
                    title={title}
                    imageURL={imageURL}
                />
                <div className="label">
                    <HotSauceTitle title={title} />
                    <HotSauceSubtitle subtitle={subtitle} />
                </div>
            </div>
        );
    }
}

export default HotSauceBox;