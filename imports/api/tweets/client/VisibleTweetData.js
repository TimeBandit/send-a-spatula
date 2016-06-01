import { Mongo } from 'meteor/mongo';

// client-side collection for external API
export const VisibleTweetData = new Mongo.Collection(null);