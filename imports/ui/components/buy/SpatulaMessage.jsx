import React from 'react';

const SpatulaMessage = ({ handle, value, placeholder }) => {

    handleChange = (e) => {
        handle(e);
    };

    return (
        <textarea className="u-full-width"
	    type="text" 
    	rows= "5"
	    onChange={handleChange} 
	    value={value} 
	    maxLength="70"
	    placeholder={placeholder}
	    id="message">
    </textarea>
    );
};

export default SpatulaMessage;
