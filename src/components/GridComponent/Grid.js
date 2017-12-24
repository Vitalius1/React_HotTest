import React from 'react';
import list from '../../hotsauces.json';

class Grid extends React.Component {
    render() {
        var sauces = list.list.map(sauce => {
            return sauce.title;
        })
        
        return (
            <h1 className='my-title'>Hello World</h1>
        );
    }
}
export default Grid;