/*jshint esversion: 6 */

import { Meteor } from 'meteor/meteor';
import { twitterAPIInstance, twitterAPIArgs, sayHello } from './twitter.js';
import { _ } from 'meteor/underscore';

const defined = function(obj, strNames) {
    let arrNames = strNames.split('.');
    let name = arrNames.shift();

    while (name) {
        if (!obj.hasOwnProperty(name)) return false;
        obj = obj[name];
        name = arrNames.shift();
    }

    return true;
};

// initial set up data will be sent in the fixtures file
Meteor.publish('tweets.Photos', function(num) {

    let args = twitterAPIArgs(num),
        self = this;

    const publishedKeys = {};
    console.log(publishedKeys);

    res = twitterAPIInstance.get('search/tweets', { q: "#sendaspatula", count: 5, result_type: "recent" },
        function(err, tweets, response) {
            console.log(tweets.statuses.length);
            console.log('Fetching photos from Twitter', tweets.statuses[1]);

            _.each(tweets.statuses, function(value, idx, list) {
                console.log(`Processing tweet number ${idx} with id: ${value.id}`);
                // value.entities.media !== undefined
                if (defined(value,"entities.media")) {
                    console.log(`Tweet number ${idx} has media`);
                    console.log(value.entities.media[0].media_url);

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
                }

            });

            self.ready();

        });
});

// 'statuses/user_timeline', args
// 'search/tweets', { q: "#sendaspatula", count: 50, result_type: "recent"}
