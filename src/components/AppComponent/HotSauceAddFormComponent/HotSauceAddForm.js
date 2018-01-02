import React from 'react';
import Link, { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

class HotSauceAddForm extends LinkedComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            description: '',
            imageURL: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newSauce = {
            title: this.state.title,
            subtitle: this.state.subtitle,
            description: this.state.description,
            imageURL: this.state.imageURL
        }
        this.props.onSubmitNewSauce(newSauce);
        this.props.onClickCloseModal();
    }

    render() {
        const titleLink = Link.state(this, 'title')
            .check(x => x.trim(), "Title is required");
        const subtitleLink = Link.state(this, 'subtitle')
            .check(x => x.trim(), "Subtitle is required");
        const descriptionLink = Link.state(this, 'description')
            .check(x => x.trim(), "Description is required");
        const imageURLLink = Link.state(this, 'imageURL')
            .check(x => x.trim(), "Image URL is required");
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
                    
                    <form onSubmit={this.handleSubmit}>

                        <FormInput
                            label="Title"
                            placeholder="Type title here..."
                            valueLink={titleLink}
                            type="text" />
                        <FormInput
                            label="Image URL"
                            placeholder="Type ImageUrl here..."
                            valueLink={imageURLLink}
                            type="text" />
                        <FormTextarea
                            label="Subtitle"
                            placeholder="Type a short description here..."
                            valueLink={subtitleLink} />
                        <FormTextarea
                            label="Description"
                            placeholder="Type a detailed description here..."
                            valueLink={descriptionLink} />

                        <button
                            className="AddForm-submitButton"
                            type="submit"
                            disabled={titleLink.error || subtitleLink.error || descriptionLink.error || imageURLLink.error}
                        >
                            Add Sauce
                        </button>

                        <span
                            className="AddForm-cancelButton"
                            onClick={this.props.onClickCloseModal}
                        >
                            Cancel
                        </span>
                    </form>
                </div>
            </div>
        )
    }
}
export default HotSauceAddForm;