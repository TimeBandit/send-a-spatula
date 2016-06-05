import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';

// TODO: move this into the else clause with a require
import stripeCharge from "./server/stripeCharge";

export const chargeCard = new ValidatedMethod({
    name: 'stripe.charge',
    validate: new SimpleSchema({
        amount: { type: Number, allowedValues: [500] },
        currency: { type: String, allowedValues: ["GBP"] },
        source: { type: String },
        metadata: { type: String }
    }).validator(),
    run({ amount, currency, source, metadata }) {

        if (this.isSimulation) {

        } else {

            var result = stripeCharge({ amount, currency, source, metadata });
            return result
        }
    },
});
