import React from 'react';

import list from '../../hotsauces.json';

import Tile from './TileComponent/Tile';

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(id){
        console.log('id:', id);
    }

    render() {
        
        const sauces = list.list.map(listItem => {
            return listItem;
        })
        
        const tiles = sauces.map(sauce => {
            return (
                <Tile
                    key={sauce.id}
                    sauce={sauce}
                    onClick={this.handleClick}
                />
            );
        })



        return (
            <div className='main'>
                <header>
                    <h1>HOT SAUCE LIST</h1>
                </header>
                <div>
                    {tiles}
                </div>
            </div>
        );
    }
}
export default Grid;