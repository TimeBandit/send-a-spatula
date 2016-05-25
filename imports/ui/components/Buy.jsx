import React from 'react';

const Buy = ({name}) => (
	<form>
    	<textarea className="u-full-width" placeholder="Your Message Here …" id="exampleMessage">
    	</textarea>
        <p>Processing...</p>
    	<input className="button-primary" value="buy -> £5" type="submit"/>
	</form>
);

export default Buy;