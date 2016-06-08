import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';
import metadataSchema from './metadataSchema';

export const createCharge = new ValidatedMethod({
    name: 'stripe.methods.createCharge',
    validate: new SimpleSchema({
        amount: { type: Number, allowedValues: [500] },
        currency: { type: String, allowedValues: ["GBP"] },
        source: { type: String },
        metadata: { type: metadataSchema }
    }).validator(),
    run({ amount, currency, source, metadata }) {

        if (this.isSimulation) {
            console.log('client side method simulation');
        } else {
            // only run server-side
            let charge = require('./server/charge').default();
            let result = charge({ amount, currency, source, metadata });
            return result
        }
    },
});
