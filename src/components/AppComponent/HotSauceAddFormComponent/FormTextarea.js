import React from 'react';
import { TextArea } from 'valuelink/tags';

function FormTextarea({ label, valueLink, placeholder }) {
    return (
        <div className="AddForm-element">
            <label>{label}</label><br/>
            <TextArea valueLink={valueLink} placeholder={placeholder} />
            <span className="AddForm-errorPlaceholder">
                &nbsp;{valueLink.error || ""}
            </span>
        </div>
    );
}
export default FormTextarea;