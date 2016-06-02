import React from 'react';

const SpatulaMessage = ({ handle, value, maxLength, placeholder }) => {

    handleChange = (e) => {
    	console.log(this.props);
    	this.props.handle(e);
    };

    return (
        <textarea className="u-full-width"
	    onChange={handleChange} 
	    value={value} 
	    maxLength={parseInt(maxLength)} 
	    placeholder={placeholder}
	    id="message">
    </textarea>
    );
};

export default SpatulaMessage;
