// css
import '../stylesheets/normalize.css'
import '../stylesheets/skeleton.css'
import '../stylesheets/animate.css'
import '../stylesheets/responsive-nav.css'
import '../stylesheets/styles.css'

// layout
import React from 'react';
import Buy from "../components/Buy";
import HowItWorks from "../components/HowItWorks";
import Header from "../components/Header";
import TweetsContainer from "../containers/TweetsContainer";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


const App = ({ content }) => (
    <div className="container">
		<section className="header">
			<div className="row">
				<div className="column">
					<Header />
				</div>
			</div>
		</section>
		
		<section id="buy" className="buy">
			<div className="row">
                <div className="column">
                    <img className="spatula animated jello u-max-full-width" src="images/outline-spatula-horizontal-message.svg" alt=""/>
                </div>
            </div>
			<div className="row">
				<div className="column">
					<Buy />
				</div>
			</div>
		</section>
		<section id="how-it-works" className="how-it-works">
			<h5>How-it-Works</h5>
			<HowItWorks />
		</section>
		<section id="tweets" className="tweets">
			<h5>Tweets @sendaspatula</h5>
			<TweetsContainer />
		</section>
		<section id="contact-us" className="contact-us">
			<h5>Contact Us</h5>
			<div className="row">
				<div className="column">
					<ContactUs />
				</div>
			</div>
		</section>
		<section className="footer">
			<div className="row">
				<div className="column">
					<Footer />
				</div>
			</div>
		</section>
	</div>
);

export default App;
