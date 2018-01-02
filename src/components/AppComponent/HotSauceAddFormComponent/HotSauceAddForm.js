import React from 'react';

class HotSauceAddForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.showAddFormModal) {
            return null;
        }
        return (
            <div className="App-AddSauceFormModal">
                <span
                    className="App-CloseFormModal"
                    onClick={this.props.onClickCloseModal}
                >
                    &times;
                </span>
                <div className="App-AddSauceFormContent">
                    <h1>Form Add Sauce</h1>
                </div>
            </div>
        )
    }
}
export default HotSauceAddForm;