import { Meteor } from 'meteor/meteor'
import { STRIPEMETEOR } from 'meteor/mrgalaxy:stripe'

export const hi = function() {
	console.log('hi');
};

const charge = function() {

	let Stripe = StripeAPI(Meteor.settings.private.stripe);
	return Meteor.wrapAsync(Stripe.charges.create, Stripe.charges);
};

export default charge;