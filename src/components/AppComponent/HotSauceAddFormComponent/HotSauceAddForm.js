import React from 'react';
import Link, { LinkedComponent } from 'valuelink';

class HotSauceAddForm extends LinkedComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            description: '',
            imageURL: ''
        }
    }

    onSubmit(e) {
        console.log("submiting", e.target);
    }

    render() {
        if (!this.props.showAddFormModal) {
            return null;
        }
        const linked = this.linkAll();
        return (
            <div className="App-AddSauceFormModal">
                <span
                    className="App-CloseFormModal"
                    onClick={this.props.onClickCloseModal}
                >
                    &times;
                </span>
                <div className="App-AddSauceFormContent">
                    <h1>ADD SAUCE</h1>
                    <form onSubmit={this.onSubmit}>
                        <label>Title:
                            <input type="text" { ...linked.title.props } />
                        </label><br />

                        <label>Subtitle:
                            <input type="text" { ...linked.subtitle.props } />
                        </label><br />

                        <label>Description:
                            <input type="text" { ...linked.description.props } />
                        </label><br />

                        <label>Image URL:
                            <input type="text" { ...linked.imageURL.props } />
                        </label><br />

                        <button type="submit">Add Sauce</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default HotSauceAddForm;