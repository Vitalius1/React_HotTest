import React from 'react';
import HotSauceBox from './HotSauceBoxComponent/HotSauceBox';
import HotSauceDetail from './HotSauceDetailPageComponent/HotSauceDetail';

// import list from '../../hotsauces.json'; use if needed to bundle with webpack

class App extends React.Component {
    constructor(props) {
        super(props);
        // initialize state when constructing the component
        this.state = {
            showDetail: false,   // used to toggle the DetailPageComponent
            sauceToShow: {},     // used to pass the sauce to DetailPageComponent
            sauceIdsToHide: [],  // used to store the IDs of the sauces to remove from list
            hotSaucesList: [],   // used to store the sauce list fetched from the API
            dataLoaded: false    // used to check if data from API is already arived
        };
        console.log("Hello from constructor")
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        var self = this;
        // AJAX request to the API. Expecting a jsonObj.
        var jsonObj = new XMLHttpRequest();
        jsonObj.overrideMimeType("application/json");
        jsonObj.open('GET', 'api/hotsauces.json', true);
        jsonObj.onreadystatechange = function () {
            if (jsonObj.readyState == 4 && jsonObj.status >= "200" && jsonObj.status < "400") {
                // When the response arrives parse the object and update state with the list and change the flag to true
                // so that render method will move from the first if statement and render the content
                var data = JSON.parse(jsonObj.responseText);
                self.setState({
                    hotSaucesList: data.list,
                    dataLoaded: true
                });
            }
        };
        jsonObj.send();
    }

    handleClick(id) {
        var sauceToShow = {};
        // checking id because method used by different components (one is passing an id and the other not)
        if (id !== 'undefined') {
            sauceToShow = this.state.hotSaucesList.filter(sauce => {
                return sauce.id === id;
            })[0];
        }
        this.setState({ // update the state to toggle the detail page
            showDetail: !this.state.showDetail,
            sauceToShow: sauceToShow
        });
    }

    handleRemove(id) { // adding the id of the sauce to remove from list and updating the sate for it
        var sauceIdsToHide = this.state.sauceIdsToHide;
        sauceIdsToHide.push(id);
        this.setState({
            sauceIdsToHide: sauceIdsToHide
        });
    }

    render() {
        if (!this.state.dataLoaded) { // in case data from AJAX request is still to come render a white page (could be anything even a loading circle :)
            return null;
        }
        // filtering the sauces which are removed and creating a list of the remaining HotSauce Boxes
        const hotSauceList = this.state.hotSaucesList.filter(sauce => {
            return this.state.sauceIdsToHide.indexOf(sauce.id) === -1;
        }).map(sauce => {
            return (
                <HotSauceBox
                    key={sauce.id}
                    sauce={sauce}
                    onClick={this.handleClick}
                    onClickRemove={this.handleRemove}
                />
            );
        });

        if (!this.state.showDetail) { // if user requested the HotSauceDetail Page than render() skips the return
            return (                  // in this if statement and and goes to next return 
                <div className="App-mainContainer" >
                    <div className="App-title">
                        <h1>HOT SAUCE LIST</h1>
                    </div>

                    <div className="App-hotSauceListContainer">
                        {hotSauceList}
                    </div>
                </div>
            );
        }
        return (
            <div>
                <HotSauceDetail
                    sauce={this.state.sauceToShow}
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}
export default App;