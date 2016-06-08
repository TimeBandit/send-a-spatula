import React from 'react';
import checkout from "../../helpers/checkout";
import { createCharge } from "/imports/api/stripe/methods.js"

const Pay = ({ message, setMessage, paymentInProgressUpdate, shake }) => {

    handlePayment = (e) => {

        e.preventDefault();

        if (!message.length) {

            shake();

        } else {

            checkout.open({

                token: function(res, args) {

                    /* extract token */
                    let stripeToken = res.id,
                        metadata = args;

                    metadata.message = message;

                    // set charge processingStatus to true
                    paymentInProgressUpdate(true);

                    createCharge.call({
                        amount: 500,
                        currency: 'GBP',
                        source: stripeToken,
                        metadata: metadata,
                    }, (err, res) => {
                        console.log('stripe.charge result ', err, res);
                    });


                }
            });
        }

    };

    return (
        <input className="button-primary" value="buy now" type="submit" onClick={handlePayment}/>
    );

};

export default Pay;
