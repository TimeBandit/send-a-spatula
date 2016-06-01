import React from 'react';
import WaitingOnTweets from "./WaitingOnTweets";
import TweetsProcessed from "./TweetsProcessed";
import { _ } from 'meteor/underscore';

export default class Tweets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            showConnectionIssue: false,
        };
    }
    printTweets(n) {
        console.log(n);
    }

    render() {
        const { showConnectionIssue } = this.state;

        const {
            loading,
            tweets,
            count,
            docCount,
            connected,
        } = this.props;

        console.log(`docCount:${docCount} | count:${count}  | tweets:${_.size(tweets)}`);


        return (
            <div className="row" style={{overflow: "hidden"}}>
                {docCount > 0
                    ? <TweetsProcessed count={count} tweets={tweets}/>
                    : <WaitingOnTweets count={count}/> 
                }
            </div>
        );
    }
}

// Tweets.propTypes = {
//  loading: React.propTypes.bool,
//  tweets: React.propTypes.array,
//  connected: React.propTypes.bool
// }
