import React from 'react';

const HowItWorks = ({name}) => (
	<div className="row">        
		<div className="one-third column">
            <img className="how2img" src="images/write-pencil-icon.png" alt="A writing pencil"/> 
            <p>
                Enter a message of up to 70 characters into the box above. 
                Swear words will be replaced with ****'s.
            </p>
        </div>
        <div className="one-third column">
            <img className="how2img" src="images/credit-cards-icon.png" alt="A credit card"/>
            <p>
                Press 'BUY NOW'. You will see a dialog appear. Enter the shipping 
                details and payment information. Remember to enter the correct 
                shipping details of the person you will send a spatula to.
            </p>
        </div>
        <div className="one-third column">
            <img className="how2img" src="images/mail-open-icon.png" alt="An envelope"/>
            <p>
                The payment will process. You will see a confirmation message 
                and we will post your spatula with proof of delivery. 
                You will not be charged if the card is declined. You will be emailed
                a receipt. Enjoy!
            </p>
        </div>
	</div>
);

export default HowItWorks;