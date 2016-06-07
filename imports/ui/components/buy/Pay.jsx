import React from 'react';
import checkout from "../../helpers/checkout";
import { chargeCard } from "/imports/api/stripe/methods.js"

const Pay = ({ message, setProcessingState, setMessage }) => {

    handlePayment = (e) => {

        e.preventDefault();

        checkout.open({

            token: function(res, args) {

                /* extract token */
                let stripeToken = res.id,
                    metadata = args;

                metadata.message = message;
                console.log(typeof metadata)
                // set charge processingStatus to true
                setProcessingState(true);

                chargeCard.call({
                    amount: 500,
                    currency: 'GBP',
                    source: stripeToken,
                    metadata: metadata,
                }, (err, res) => {
                    console.log(err, res);
                });
                
         //        Meteor.call('chargeCard',
         //            500,
         //            'GBP',
         //            stripeToken,
         //            metadata,
         //            function(error, result) {

         //                // set charge processingStatus to true
         //                setProcessingState(false);
         //                setMessage("");

         //                // if error, set the paymentStatus flag to false
         //                if (result.data) {
         //                    // if succesfull, set paymentStatus flag to success

         //                    let msg = 'Thank you ! \
									// Your surprise is on its \
									// way to ' + args.shipping_name + '!';

         //                    swal({
         //                        title: result.data.status,
         //                        text: msg,
         //                        type: "success",
         //                        imageSize: "80x80"
         //                    });

         //                    setProcessingState(false);

         //                } else {

         //                    let msg = 'Oops your card provider \
	        // 						declined this transaction. \
	        // 						You have not been charged';

         //                    swal({
         //                        title: result.error.message,
         //                        text: msg,
         //                        type: "error",
         //                        imageSize: "80x80"
         //                    });
         //                }

         //            });
            }
        });
    };

    return (
        <input className="button-primary" value="buy now" type="submit" onClick={handlePayment}/>
    );

};

export default Pay;
