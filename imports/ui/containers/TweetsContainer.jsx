import { Meteor } from 'meteor/meteor';
import { TweetData } from "../../api/tweets/client/TweetData.js";
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import Tweets from "../components/Tweets";
import { VisibleTweetData } from "../../api/tweets/client/VisibleTweetData";

export default createContainer(() => {

    const tweetsHandle = Meteor.subscribe('tweets.Photos', Meteor.settings.public.twitterComponentSettings.count);
    const publishedCursor = TweetData.find({})
    
    const loading = !tweetsHandle.ready();
    const publishedTweets = publishedCursor.fetch();
    const docCount = publishedCursor.count();
    const connected = Meteor.status().connected;

    return {
        loading,
        publishedTweets,
        docCount,
        connected
    };

}, Tweets);
