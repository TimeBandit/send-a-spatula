import { Meteor } from 'meteor/meteor';
import { TweetData } from "../../api/tweets/client/TweetData.js";
import { createContainer } from 'meteor/react-meteor-data';
import Tweets from "../components/Tweets";

export default createContainer(() => {

    let count = Meteor.settings.public.twitterComponentSettings.count;
    const tweetsHandle = Meteor.subscribe('tweets.Photos', count);
    console.log(`handle is ${tweetsHandle.ready()}`);

    return {
        loading: !tweetsHandle.ready(),
        tweets: TweetData.find({}).fetch(),
        count: count,
        connected: Meteor.status().connected
    };    

}, Tweets);
