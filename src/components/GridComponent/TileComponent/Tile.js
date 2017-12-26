import React from 'react';
import ReactDOM from 'react-dom'
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
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    
    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener("keydown", this.handleKeyDown, false);
    }
    
    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener("keydown", this.handleKeyDown, false);
    }
    
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.props.onClick(this.props.sauce.id);
        }
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
    
    handleFocus() {
        this.setState({
            isMouseInside: true
        })
    }
    
    render() {
        return (
            <div
                onFocus={this.handleFocus}
                tabIndex={0}
                className='tile'
                onClick={(id) => this.props.onClick(this.props.sauce.id)}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave} >

                <CloseButton
                    onClickClose={this.handleClose}
                    id={this.props.sauce.id}
                    isMouseInside={this.state.isMouseInside} />


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