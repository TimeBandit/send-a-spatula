import React from 'react';

// componenets
import Buy from './buy/Buy.jsx';
import HowItWorks from './HowItWorks.jsx';
import TweetsContainer from '../containers/TweetsContainer.jsx';
import ContactUs from './ContactUs.jsx';
import Home from './Home.jsx';

const Main = ({}) => {
    return (
        <span>
        	<section id="buy" className="buy">
				<Home />
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
				<h5>Tweets <a href="https://twitter.com/sendaspatula" target="_blank">@sendaspatula</a></h5>
				<TweetsContainer />
			</section>
			<section id="contact-us" className="contact-us">
				<Home />
				<h5>Contact Us</h5>
				<div className="row">
					<div className="column">
						<ContactUs />
					</div>
				</div>
			</section>
        </span>
    )
};

export default Main;
