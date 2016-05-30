import React from 'react';
import { _ } from 'meteor/underscore';
import TweetDiv from "./TweetDiv";

export class TweetsProcessed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    buildTweets() {

        let result = _.map(this.props.tweets, function(value, key, list) {
            let href = value.entities.media[0].url;
            let imgSrc = (value.entities.media[0].media_url).replace('http', 'https');
            let alt = value.text.split('http', 1)[0];

            return <TweetDiv key={value.id} href={href} imgSrc={imgSrc} alt={alt}/>
        });

        return result;
    }


    render() {

        let style = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }

        return (
            <div className="column" style={style}>
                {this.buildTweets()}
                <button>See more..</button>
            </div>
        );
    }
}


export default TweetsProcessed;
