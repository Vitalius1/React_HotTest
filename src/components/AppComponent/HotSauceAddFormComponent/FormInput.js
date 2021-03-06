import React from 'react';
import { Input } from 'valuelink/tags';

function FormInput({ label, valueLink, type, placeholder }) {
    return (
        <div className="AddForm-element">
            <label>{label}</label><br/>
            <Input type={type} valueLink={valueLink} placeholder={placeholder} />
            <span className="AddForm-errorPlaceholder">
                &nbsp;{valueLink.error || ""}
            </span>
        </div>
    );
}
export default FormInput;