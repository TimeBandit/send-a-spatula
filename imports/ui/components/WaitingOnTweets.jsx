import React from 'react';
import { _ } from 'meteor/underscore';
import TweetDiv from "./TweetDiv";

export class WaitingOnTweets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    buildTweets() {
        let range = _.range(this.props.count);
        let result = _.map(range, function(value, key, list) {
            return <TweetDiv key={key}/>
        });

        return result;
    }


    render() {

        let style = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "stretch"
        }

        return (
            <div className="column" style={style}>
                {this.buildTweets()}
            </div>
        );
    }
}


export default WaitingOnTweets;

WaitingOnTweets.propTypes = {
 count: React.PropTypes.number
};