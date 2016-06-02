import { Twit } from 'meteor/schiller:twit'

// create a new instance of the API handler
export const twitterAPIInstance = new Twit({
    consumer_key: Meteor.settings.public.consumer_key,
    consumer_secret: Meteor.settings.private.consumer_secret,
    access_token: Meteor.settings.public.access_token,
    access_token_secret: Meteor.settings.private.access_token_secret
});

export const twitterAPIArgs = function(count = Meteor.settings.public.twitterComponentSettings.count,
        user_id = Meteor.settings.public.twitterComponentSettings.user_id,
        screen_name = Meteor.settings.public.twitterComponentSettings.screen_name) {

    return {
        count,
        user_id,
        screen_name
    }

};