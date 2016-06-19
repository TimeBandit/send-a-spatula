import React from 'react';

// componenets
import Buy from './buy/Buy.jsx';
import HowItWorks from './HowItWorks.jsx';
import TweetsContainer from '../containers/TweetsContainer.jsx';
import Home from './Home.jsx';

const Main = ({}) => {
    return (
        <span>
        	<section id="buy" className="buy">
				<div className="row">
	                <div className="column" style={{textAlign: "center"}}>
	                    <img className="spatula animated tada u-max-full-width" 
	                    	src="images/outline-spatula-horizontal-message.svg" 
	                    	width="480px"
	                    	alt="send a spatula with a message"/>
	                </div>
	            </div>
				<div className="row">
					<div className="column">
						<Buy />
					</div>
				</div>
			</section>
			<section id="how-it-works" className="how-it-works">
				<Home />
				<h5>How-it-Works</h5>
				<HowItWorks />
			</section>
			<section id="tweets" className="tweets">
				<Home />
				<h5>Tweet your spatulas to <a href="https://twitter.com/sendaspatula" target="_blank">@sendaspatula</a></h5>
				<TweetsContainer />
			</section>
			<section id="contact-us" className="contact-us">
				<Home />
				<h5>Contact Us</h5>
				<p>
					If you have any queries, questions or comments, please
					send us an email to admin 'at' sendaspatula.com or contact 
					us via one of the social media accounts below.
				</p>
			</section>
        </span>
    )
};

export default Main;
