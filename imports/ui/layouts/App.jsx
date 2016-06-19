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
		<Footer />
		<div className="row">
			<div className="column">								
			</div>
		</div>
	</div>
);

export default App;
