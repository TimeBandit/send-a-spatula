import React from 'react';
import disclaimer from '../helpers/disclaimer';

const Disclaimer = ({ name }) => {

    showDisclaimer = () => {
    	
        swal({
            title: "Disclaimer",
            text: `<span class="discStyle">${disclaimer}</span>`,
            html: true
        });
    };

    return (
        <div className="disclaimer" onClick={showDisclaimer}>
    		Disclaimer    		
    	</div>
    )
};

export default Disclaimer;
