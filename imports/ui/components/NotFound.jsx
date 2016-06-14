import React from 'react';
import { Meteor } from 'meteor/meteor'

let style = {
	padding: "20px"
};

const NotFound = ({ name }) => {
    return (
    	<div style={style}>    		
	        <h2>Oops, the page you were looking for does not exit.</h2>
	        <h3>Please go <a href={Meteor.absoluteUrl()}>home</a></h3>
    	</div>
    );
}

export default NotFound;
