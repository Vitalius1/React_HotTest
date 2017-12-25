import React from 'react';
import list from '../../hotsauces.json';
import Tile from './TileComponent/Tile';

class Grid extends React.Component {
    render() {
        const sauces = list.list.map(listItem => {
            return listItem;
        })
        const tiles = sauces.map(sauce => {
            return (
                <Tile key={sauce.id} sauce={sauce}/>
            );
        })
        
        return (
            <div className='main'>
                <h1>HOT SAUCE LIST</h1>
                <div className='wrapper'>{tiles}</div>
            </div>
        );
    }
}
export default Grid;