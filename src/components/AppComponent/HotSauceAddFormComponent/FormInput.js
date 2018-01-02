import React from 'react';
import Link, { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags';

function FormInput({label, valueLink, type}) {
    return (
        <label className="AddForm-label"> {label} 
            <Input type={type} valueLink={valueLink} />
            <span className="AddForm-errorPlaceholder">
                &nbsp;{valueLink.error || ""}
            </span>
        </label>
    );
}
export default FormInput;