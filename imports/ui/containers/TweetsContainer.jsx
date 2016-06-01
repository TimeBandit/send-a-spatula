import { Meteor } from 'meteor/meteor';
import { TweetData } from "../../api/tweets/client/TweetData.js";
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import Tweets from "../components/Tweets";
import PrintFileName from "../helpers/PrintFileName";
import { VisibleTweetData } from "../../api/tweets/client/VisibleTweetData";

export default createContainer(() => {

    const tweetsHandle = Meteor.subscribe('tweets.Photos', parseInt(Session.get("count")));
    const loading = !tweetsHandle.ready();
    const count = parseInt(Session.get("count"));

    const publishedKeys = {};
    const publishedCursor = TweetData.find({})
    const publishedTweets = publishedCursor.fetch();

    console.log("published cursor ", publishedCursor.fetch());

    publishedCursor.fetch().forEach(function(doc) {

        let newDoc = {
            href: doc.entities.media[0].url,
            imgSrc: (doc.entities.media[0].media_url).replace('http', 'https'),
            alt: doc.text.split('http', 1)[0],
            tweetId: doc.id
        };

        if (!publishedKeys[newDoc.tweetId]) {
            publishedKeys[newDoc.tweetId] = true;
            VisibleTweetData.insert(newDoc);
        }
    });

    const visibleCursor = VisibleTweetData.find({});
    const visibleTweets = visibleCursor.fetch();
    console.log("visible tweets ", visibleTweets);
    console.log(publishedKeys);
    const docCount = visibleCursor.count();

    const connected = Meteor.status().connected;

    console.log(`Subscription is ${tweetsHandle.ready()}`);

    return {
        loading,
        publishedTweets,
        count,
        docCount,
        connected
    };

}, Tweets);
