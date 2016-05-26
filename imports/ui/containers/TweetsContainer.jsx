import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Tweets from "../components/Tweets";

export default createContainer(() => {

    const tweetsHandle = Meteor.subscribe('Tweets');

    return {
        loading: !tweetHandle.ready(),
        tweets: Tweets.find({}).fetch(),
        connected: Meteor.status().connected
    };

}, Tweets);
