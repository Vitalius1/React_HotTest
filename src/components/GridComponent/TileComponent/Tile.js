import React from 'react';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import CloseButton from './CloseButton'


class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseInside: false,
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    mouseEnter() {
        this.setState({ isMouseInside: true });
    }
    mouseLeave() {
        this.setState({ isMouseInside: false });
    }
    handleClose(id) {
        console.log("close button in tile:", id);
        this.props.onClickClose(id);
    }

    render() {
        return (
            <div
                className='tile'
                onClick={(id) => this.props.onClick(this.props.sauce.id)}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
            >
                {this.state.isMouseInside ? <CloseButton onClickClose={this.handleClose} id={this.props.sauce.id} /> : null}
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