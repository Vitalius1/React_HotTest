import React from 'react';
import list from '../../hotsauces.json';
import Tile from './TileComponent/Tile';
import Detail from './DetailsComponent/Detail';

class Grid extends React.Component {
    constructor() {
        super();

        this.state = {
            showDetail: false,
            sauceToShow: {},
        };

        this.handleClick = this.handleClick.bind(this);

        this.sauces = list.list.map(listItem => {
            return listItem;
        });
    }

    handleClick(id) {
        console.log('id:', id);
        
        const theSauce = this.sauces.filter(sauce => {
            return sauce.id === id;
        })[0];
        
        this.setState({
            showDetail: !this.state.showDetail,
            sauceToShow: theSauce
        });
    }

    render() {

        const tiles = this.sauces.map(sauce => {
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
                
                <Detail
                    sauce={this.state.sauceToShow}
                    show={this.state.showDetail}
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}
export default Grid;