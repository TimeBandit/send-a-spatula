import React from 'react';
import { Session } from 'meteor/session';

const LoadMoreTweets = ({ name }) => {

    style = {
        margin: "5px"
    }

    loadMore = (event) => {
        Session.set("count", (parseInt(Session.get("count")) + 1));
        console.log(`incrementing count`);
    };

    return (
        <div>
    		<button onClick={loadMore} style={style}>See more..</button>
    	</div>
    );
};

export default LoadMoreTweets;
