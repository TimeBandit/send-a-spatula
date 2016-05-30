import { Mongo } from 'meteor/mongo';

// client-side collection for external API
export const TweetData = new Mongo.Collection('TweetData'); 