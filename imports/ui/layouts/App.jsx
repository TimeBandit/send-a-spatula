// css
import '../stylesheets/normalize.css'
import '../stylesheets/skeleton.css'
import '../stylesheets/animate.css'
import '../stylesheets/responsive-nav.css'
import '../stylesheets/font-awesome.min.css'
import '../stylesheets/styles.css'

// layout
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from '../components/Home.jsx';

const App = (props) => (
    <div className="container">
		<section className="header">
			<div className="row">
				<div className="column">
					<Header />
				</div>
			</div>
		</section>		
		{props.content}
		<footer>
			<div className="row">
				<div className="six columns">
					<ul>
						<li>
							Send a Spatula © 2016 All rights reserved.
						</li>
						<li>
							Icons by <a href="http://www.doublejdesign.co.uk/">Double-J Design</a>
						</li>
						<li>
							<a href={Meteor.absoluteUrl('disclaimer')}>Disclaimer</a>
						</li>
						<li>
							<img src="images/comodo_secure_seal_76x26_transp.png" 
							alt="Send a Spatula is a secure and authenticated website"
							title="Send a Spatula is a secure and authenticated website"/>
						</li>
					</ul>
				</div>
				<div className="three columns">
				</div>
				<div className="three columns">
				</div>
			</div>
		</footer>
		<section className="footer">
			<Home />
			<div className="row">
				<div className="column">
					<Footer />
				</div>
			</div>
		</section>
	</div>
);

export default App;
