import React from 'react';
import HotSauceBox from './HotSauceBoxComponent/HotSauceBox';
import Detail from './DetailPageComponent/Detail';

import list from '../../hotsauces.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        // initialize state when constructing the component
        this.state = {
            showDetail: false, // used to toggle the DetailPageComponent
            sauceToShow: {},   // used to pass the sauce to DetailPageComponent
            hideIds: []        // used to store the IDs of the sauces to remove from list
        };
        
        this.sauces = list.list.map(listItem => {
            return listItem;
        });

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(sauceID) {
        var theSauce = {};
        // checking id because method used by different components (one is passing an id and the other not)
        if (sauceID !== 'undefined') {
            theSauce = this.sauces.filter(sauce => {
                return sauce.id === sauceID;
            })[0];
        }

        this.setState({
            showDetail: !this.state.showDetail,
            sauceToShow: theSauce
        });
    }

    handleClose(id) {
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
                <HotSauceBox
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
export default App;