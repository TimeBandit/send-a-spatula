import React from 'react';

// display a placeholder for each tweet until subscription loads
let blankDivStyle = {
    margin: "5px",
    backgroundColor: "#F5F5F5",
    height: "200px",
    width: "200px"
}

let imgDivStyle = {
    margin: "5px",
    backgroundColor: "#F5F5F5"
}

const TweetDiv = ({ k, href, imgSrc, alt }) => (
    <div className="blank" style={imgSrc ? imgDivStyle : blankDivStyle} key={k}>
    <a href={href} target="_blank">
    	<img src={imgSrc} alt={alt} style={{maxHeight:"200px"}}/>
    </a>
    </div>
);

export default TweetDiv;

TweetDiv.propTypes = {
 k: React.PropTypes.string,
 href: React.PropTypes.string,
 imgSrc: React.PropTypes.string,
 alt: React.PropTypes.string
}