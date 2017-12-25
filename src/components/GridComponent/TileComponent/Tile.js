import React from 'react';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';


class Tile extends React.Component {
    render() {
        return (
            <div className='tile'>
                <div className='content'>
                    <Image url={this.props.sauce.imageURL} />
                    <Title title={this.props.sauce.title} />
                    <Subtitle subtitle={this.props.sauce.subtitle} />
                </div>
            </div>
        );
    }
}
export default Tile;