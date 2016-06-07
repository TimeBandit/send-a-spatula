import { Meteor } from 'meteor/meteor'
import { STRIPEMETEOR } from 'meteor/mrgalaxy:stripe'

const charge = function() {

	let Stripe = StripeAPI(Meteor.settings.private.stripe);
	
	return Meteor.makeAsync(Stripe.charges.create, Stripe.charges);
}

export default charge;