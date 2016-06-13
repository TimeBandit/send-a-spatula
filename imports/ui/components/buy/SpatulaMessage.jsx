import React from 'react';

const SpatulaMessage = ({ handle, value, placeholder, shake}) => {

    handleChange = (e) => {
        handle(e);
    };

    return (
        <textarea className={shake ? "u-full-width animated shake" : "u-full-width"}
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


SpatulaMessage.propTypes = {
 handle: React.PropTypes.func,
 value: React.PropTypes.string,
 placeholder: React.PropTypes.string,
 shake: React.PropTypes.bool
}