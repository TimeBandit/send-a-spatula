import { Mongo } from 'meteor/mongo';

// client-side collection for external API
export const TweetData = new Mongo.Collection('TweetData'); 

// Deny all client-side updates on the Lists collection
TweetData.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});