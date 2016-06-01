import React from 'react';
import { _ } from 'meteor/underscore';
import WaitingOnTweets from "./WaitingOnTweets";
import TweetsProcessed from "./TweetsProcessed";
import TweetDiv from "./TweetDiv";

// todo: manages no state, re-write as pure component

export default class Tweets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            showConnectionIssue: false,
        };
        this.buildTweets = this.buildTweets.bind(this);
    }

    buildTweets() {
        let result = _.map(this.props.publishedTweets, function(value, key, list) {

            let href = value.href;
            let imgSrc = value.imgSrc;
            let alt = value.alt;

            return <TweetDiv key={value._id} href={href} imgSrc={imgSrc} alt={alt}/>
        });

        // TweetDiv's have nique keys - verified
        return result;
    }

    render() {
        const { showConnectionIssue } = this.state;

        const {
            loading,
            publishedTweets,
            docCount,
            connected,
        } = this.props;

        return (
            <div className="row" style={{overflow: "hidden"}}>
                {docCount > 0
                    ? <TweetsProcessed tweets={this.buildTweets()}/>
                    : <WaitingOnTweets count={docCount}/> 
                }
            </div>
        );
    }
}

Tweets.propTypes = {
 loading: React.PropTypes.bool,
 publishedTweets: React.PropTypes.array,
 docCount: React.PropTypes.number,
 connected: React.PropTypes.bool
}