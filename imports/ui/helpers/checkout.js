// initialize stripe
const checkout = StripeCheckout.configure({
    key: Meteor.settings.public.stripe,
    image: 'images/spatula-256px-500pxcv.png',
    name: 'Post a Spatula',
    description: 'Enter the recipents adress to send',
    amount: 500,
    locale: 'auto',
    currency: 'GBP',
    panelLabel: 'Pay Now',
    zipCode: true,
    billingAddress: false,
    shippingAddress: true
});

export default checkout;