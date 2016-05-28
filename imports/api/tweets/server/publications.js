import { Meteor } from 'meteor/meteor';
import { twitterAPIInstance, twitterAPIArgs} from './twitter.js'

// initial set up data will be sent in the fixtures file
Meteor.publish('tweets', function(num = 5) {

    let args = twitterAPIArgs(num);

    res = twitterAPIInstance.get('statuses/user_timeline', args,
        function(err, tweets, response) {

            console.log('tweets fectched');

            _.each(tweets, function(value, key, list) {

                if (value.entities.media != undefined) {

                    /* add each tweet to the collection */
                    self.added('tweets', Random.id(), value);
                };

            });

            console.log('publication ready');
            self.ready();
        });

});
