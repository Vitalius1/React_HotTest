import React from 'react';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';


class Tile extends React.Component {
    render() {
        return (
            <div className='tile'>
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