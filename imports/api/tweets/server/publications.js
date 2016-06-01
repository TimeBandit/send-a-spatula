import { Meteor } from 'meteor/meteor';
import { twitterAPIInstance, twitterAPIArgs, sayHello } from './twitter.js'
import { _ } from 'meteor/underscore';

// initial set up data will be sent in the fixtures file
Meteor.publish('tweets.Photos', function(num) {

    let args = twitterAPIArgs(num),
        self = this;

    const publishedKeys = {};

    res = twitterAPIInstance.get('statuses/user_timeline', args,
        function(err, tweets, response) {
            sayHello('Fetching photos from Twitter');

            _.each(tweets, function(value, key, list) {
                console.log(`Processing tweet id: ${value.id}`);

                if (value.entities.media != undefined) {

                    /* add each new tweet to the collection */
                    if (!publishedKeys[value.id]) {

                        publishedKeys[value.id] = true;
                        self.added('TweetData', value.id, value);
                    }
                };

            });

            self.ready();

        });
});
