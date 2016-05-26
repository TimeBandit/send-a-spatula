import React from 'react';

export default class Tweets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <span className="tweets">
            tweets will be here
            <div className="primary-button">Load more...</div>
            </span>
        );
    }
}

// Tweets.propTypes = {
// 	loading: React.propTypes.bool,
// 	tweets: React.propTypes.array,
// 	connected: React.propTypes.bool
// }