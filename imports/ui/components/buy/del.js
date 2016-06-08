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