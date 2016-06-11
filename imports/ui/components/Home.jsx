import React from 'react';

let style = {
	color: "silver",
	margin: "5px 0px"
}

const Home = ({}) => {
    return (
        <a href="#nav">
        	<i className="fa fa-home u-pull-right" aria-hidden="true" style={style}></i>
		</a>
    )
}

export default Home;