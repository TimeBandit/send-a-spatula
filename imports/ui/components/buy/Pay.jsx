import React from 'react';
import StripeInstance from "../../helpers/StripeInstance";

const Pay = ({ message }) => {

    handlePayment = (e) => {

        e.preventDefault();

        StripeInstance.open({
            
            token: function(res, args) {
                
                /* extract token */
                let stripeToken = res.id,
                    metadata = args;

                metadata.message = message;

                let options = {
                    amount: 500,
                    currency: 'GBP',
                    source: stripeToken,
                    metadata: metadata
                };

                Meteor.call('chargeCard', options , function(error, result){
                	// initiate the charge
                	// set charge paymentProcessing flag to processing

                	// if succesfull, set paymentProcessing flag to success

                	// if error, set the paymentProcessing flag to false
                });
            }
        });
    };

    return (
        <input className="button-primary" value="buy now" type="submit" onClick={handlePayment}/>
    );

};

export default Pay;
