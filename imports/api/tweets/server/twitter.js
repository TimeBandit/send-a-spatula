import { Twit } from 'meteor/schiller:twit'

// create a new instance of the API handler
export const twitterAPIInstance = new Twit({
    consumer_key: Meteor.settings.public.consumer_key,
    consumer_secret: Meteor.settings.private.consumer_secret,
    access_token: Meteor.settings.public.access_token,
    access_token_secret: Meteor.settings.private.access_token_secret
});

export let twitterAPIArgs = function(count = 5, 
    user_id = 'sendaspatula', 
    screen_name = 'sendaspatula') {

	return {
		count,
		user_id,
		screen_name
	}

};