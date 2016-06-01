import React from 'react';
import { _ } from 'meteor/underscore';
import TweetDiv from "./TweetDiv";
import LoadMoreTweets from "./LoadMoreTweets";

export class TweetsProcessed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storedTweets: [],
            visibleTweets: [],
            storeEmpty: false
        };
        this.addTweets = this.addTweets.bind(this);
        this.updateStateTweets = this.updateStateTweets.bind(this);
    }

    updateStateTweets(newVisible, newStored) {

        this.setState({visibleTweets: newVisible});
        this.setState({storedTweets: newStored});
    }

    componentDidMount() {
        console.log("TweetsProcess has mounted")
        
        // retrieve tweets from props
        let storedTweets = this.props.tweets;

        let visibleTweets = []

        // move first 10 tweets in visibleTweets
        for (var i = 0; i < 7; i++) {

            visibleTweets.push(storedTweets.pop());
        }

        // update tweet collection to state
        this.updateStateTweets(visibleTweets, storedTweets);
    }

    addTweets() {
        if (this.state.storedTweets.length !== 0) {

            // pop one tweets from storedTweets into visible tweets
            let newStored = this.state.storedTweets,
                newVisible = this.state.visibleTweets;

            newVisible.push(newStored.pop());

            this.updateStateTweets(newVisible, newStored);

        } else {
            this.setState({storeEmpty: true});
        }
    }


    render() {

        let style = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }

        return (
            <div className="column" style={style}>
                {this.state.visibleTweets}
                <button onClick={this.addTweets}>{this.state.storeEmpty? "Thats all folks..." : "Load More..."}</button>                
            </div>
        );
    }
}


export default TweetsProcessed;
