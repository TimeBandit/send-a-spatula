import { Meteor } from 'meteor/meteor';
import { twitterAPIInstance, twitterAPIArgs, sayHello} from './twitter.js'
import { Random } from 'meteor/random';

// initial set up data will be sent in the fixtures file
Meteor.publish('tweets.Photos', function(num = 5) {

    let args = twitterAPIArgs(num),
        self = this;

    res = twitterAPIInstance.get('statuses/user_timeline', args,
        function(err, tweets, response) {
            console.log(err);
            sayHello('Fetching photos from Twitter');
            
            _.each(tweets, function(value, key, list) {
                console.log(`Processing tweet id: ${value.id}`);

                if (value.entities.media != undefined) {

                    /* add each tweet to the collection */
                    self.added('TweetData', value.id, value);
                    self.ready();
                };

            });            
        });
});
