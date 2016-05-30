import React from 'react';
import WaitingOnTweets from "./WaitingOnTweets";
import TweetsProcessed from "./TweetsProcessed";

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
            connected,
        } = this.props;


        return (
            <div className="row" style={{overflow: "hidden"}}>
                {loading
                    ? <WaitingOnTweets count={count}/> 
                    : <TweetsProcessed count={count} tweets={tweets}/>
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
