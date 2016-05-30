import React from 'react';

// display a placeholder for each tweet until subscription loads
let divStyle = {
    margin: "5px",
    backgroundColor: "#F5F5F5"
}

const TweetDiv = ({ k, href, imgSrc, alt }) => (
    <div className="blank" style={divStyle} key={k}>
    <a href={href}>
    	<img src={imgSrc} alt={alt} style={{maxHeight:"200px"}}/>
    </a>
    </div>
);

export default TweetDiv;
