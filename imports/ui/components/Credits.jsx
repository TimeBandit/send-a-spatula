import React from 'react';
import credits from '../helpers/credits';

const Credits = ({ name }) => {

    showCredits = () => {
    	
        swal({
            title: "Special thanks to:",
            text: credits,
            html: true
        });
    };

    return (
        <div className="credits" onClick={showCredits}>
    		Credits
    	</div>
    )
};

export default Credits;
