import React from 'react';

const Buy = ({name}) => (
	<form>
        <p>Processing...</p>
    	<textarea className="u-full-width" placeholder="Your Message Here …" id="exampleMessage">
    	</textarea>
    	<input className="button-primary" value="buy" type="submit"/>
	</form>
);

export default Buy;