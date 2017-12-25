import React from 'react';
import list from '../../hotsauces.json';
import Tile from './TileComponent/Tile';
import Detail from './DetailsComponent/Detail';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetail: false,
        };

        this.handleClick = this.handleClick.bind(this);

        this.sauces = list.list.map(listItem => {
            return listItem;
        });
    }

    handleClick (id) {
        console.log('id:', id);
        this.setState({
            showDetail: !this.state.showDetail
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
                <Detail show={this.state.showDetail} />
            </div>
        );
    }
}
export default Grid;