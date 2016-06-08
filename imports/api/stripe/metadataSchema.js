import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const metadataSchema = new SimpleSchema({
    billing_address_city: {
        type: String
    },
    billing_address_country: {
        type: String
    },
    billing_address_country_code: {
        type: String
    },
    billing_address_line1: {
        type: String
    },
    billing_address_zip: {
        type: String
    },
    billing_name: {
        type: String
    },
    message: {
        type: String
    },
    shipping_address_city: {
        type: String
    },
    shipping_address_country: {
        type: String
    },
    shipping_address_country_code: {
        type: String
    },
    shipping_address_line1: {
        type: String
    },
    shipping_address_zip: {
        type: String
    },
    shipping_name: {
        type: String
    }
});

export default metadataSchema;