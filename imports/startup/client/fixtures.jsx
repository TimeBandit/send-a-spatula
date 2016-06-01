import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

// send initial set of tweet images to client
Meteor.startup(() => {
    Session.set("count", Meteor.settings.public.twitterComponentSettings.count);
});

