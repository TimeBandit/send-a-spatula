import { Meteor } from 'meteor/meteor';
import { twitterAPIInstance, twitterAPIArgs, sayHello } from './twitter.js'
import { _ } from 'meteor/underscore';

// initial set up data will be sent in the fixtures file
Meteor.publish('tweets.Photos', function(num) {

    let args = twitterAPIArgs(num),
        self = this;

    const publishedKeys = {};
    console.log(publishedKeys);
    
    res = twitterAPIInstance.get('statuses/user_timeline', args,
        function(err, tweets, response) {
            sayHello('Fetching photos from Twitter');

            _.each(tweets, function(value, key, list) {
                console.log(`Processing tweet id: ${value.id}`);

                if (value.entities.media != undefined) {

                    /* ensure old tweets not republished */
                    if (!publishedKeys[value.id]) {

                        let newDoc = {
                            href: value.entities.media[0].url,
                            imgSrc: (value.entities.media[0].media_url).replace('http', 'https'),
                            alt: value.text.split('http', 1)[0],
                            tweetId: value.id
                        };

                        publishedKeys[value.id] = true;
                        self.added('TweetData', value.id.toString(), newDoc);
                    }
                };

            });

            self.ready();

        });
});
