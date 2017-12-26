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
            hideIds: []
        };

        this.sauces = list.list.map(listItem => {
            return listItem;
        });

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(id) {
        var theSauce = {};
        // checking id because method used by different components (one is passing an id and the other not)
        if (id !== 'undefined') {
            theSauce = this.sauces.filter(sauce => {
                return sauce.id === id;
            })[0];
        }

        this.setState({
            showDetail: !this.state.showDetail,
            sauceToShow: theSauce
        });
    }

    handleClose(id) {
        console.log('close tile id:', id);
        var hideIds = this.state.hideIds;
        hideIds.push(id);
        this.setState({
            hideIds: hideIds
        });
    }

    render() {

        const tiles = this.sauces.filter(sauce => {
            return this.state.hideIds.indexOf(sauce.id) == -1;
        }).map(sauce => {
            return (
                <Tile
                    key={sauce.id}
                    sauce={sauce}
                    idsToHide={this.state.sauceIdToHide}
                    onClick={this.handleClick}
                    onClickClose={this.handleClose}
                />
            );
        });

        return (
            <div className='main' >
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