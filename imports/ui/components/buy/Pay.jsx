import React from 'react';
import checkout from "../../helpers/checkout";
import { createCharge } from "/imports/api/stripe/methods.js"

const Pay = ({ message, setMessage, setPaymentProcessing, shake }) => {

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
                    setPaymentProcessing(true);
                    
                    // Meteor.setTimeout(function() {
                    //     console.log('pausing')
                    // }, 10000);

                    createCharge.call({
                        amount: 500,
                        currency: 'GBP',
                        source: stripeToken,
                        metadata: metadata,
                    }, (err, res) => {
                        // console.log('stripe.charge result ', err, res);

                        if (err) {
                            // error handling

                            // display swal with eror message
                            let msg = 'Oops your card provider \
                                            declined this transaction. \
                                            You have not been charged';

                            swal({
                                title: err.message,
                                text: msg,
                                type: "error",
                                imageSize: "80x80"
                            });

                        } else {
                            // success handling


                            // display swal with suxxess message
                            let msg = `Thank you ! \
                                    Your surprise is on its \
                                    way to ${res.metadata.shipping_name} !`;

                            swal({
                                title: res.status,
                                text: msg,
                                type: "success",
                                imageSize: "80x80"
                            });

                            // clear the message
                            setMessage("");
                        }

                        // clear paymentInProgress flag
                        setPaymentProcessing(false);

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
