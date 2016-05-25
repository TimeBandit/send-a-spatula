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
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


const App = ({content}) => (
	<div className="container">
		<section className="header">
			<div className="row">
				<div className="column">
					<Header />
				</div>
			</div>
		</section>
		
		<section className="buy">
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
		<section className="how-it-works">
			<HowItWorks />
		</section>
		<section className="tweets"></section>
		<section className="contact-us">
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