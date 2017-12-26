import React from 'react';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import CloseButton from './CloseButton'


class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseInside: false, // used to toggle the close button on each tile when mouse hovering
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    mouseEnter() { // Hover-in mouse handler to show the close button
        this.setState({ isMouseInside: true });
    }

    mouseLeave() { // Hover-out mouse handler to hide the close button
        this.setState({ isMouseInside: false });
    }

    handleClose(id) {
        this.props.onClickClose(id);
    }

    render() {
        return (
            <div
                className='tile'
                onClick={(id) => this.props.onClick(this.props.sauce.id)}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave} >

                {this.state.isMouseInside ? // if it's true --> create the CloseButton component
                    <CloseButton
                        onClickClose={this.handleClose}
                        id={this.props.sauce.id} />
                    : null}

                <Image url={this.props.sauce.imageURL} />

                <div className='label'>
                    <Title title={this.props.sauce.title} />
                    <Subtitle subtitle={this.props.sauce.subtitle} />
                </div>
            </div>
        );
    }
}

export default Tile;