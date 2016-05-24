// css
import '../stylesheets/normalize.css'
import '../stylesheets/skeleton.css'
import '../stylesheets/animate.css'
import '../stylesheets/responsive-nav.css'
import '../stylesheets/styles.css'

// layout
import React from 'react';
import Menu from '../components/Menu.jsx'
import Landing from "../components/Landing";
import Buy from "../components/Buy";
import HowItWorks from "../components/HowItWorks";


const App = ({content}) => (
	<div className="container">
		<section className="menu">
			<div className="row">
				<div className="column menu">
					<Menu />
				</div>
			</div>
		</section>
		<section className="landing">
			<div className="row">
				<div className="column">
					<Landing />
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
		<section className="contact-us"></section>
		<section className="footer">
			<div className="row">
				<div className="column">
					<footer>
						This is the footer
					</footer>
				</div>
			</div>
		</section>
	</div>
	);

export default App;