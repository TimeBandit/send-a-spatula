const stripeCharge = () => {

	let Stripe = StripeAPI(Meteor.settings.private.stripe);
	return Meteor.makeAsync(Stripe.charges.create, Stripe.charges);
}

export default stripeCharge;