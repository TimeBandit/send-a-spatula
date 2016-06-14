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
		
		<Footer />
		<div className="row">
			<div className="column">
				<p style={{fontSize: "8pt", color: "grey"}}>
					Disclaimer - The information contained in this website is 
					for general information purposes only. The information is 
						provided by 'Send a Spatula' and while we endeavour to 
					keep the information up to date and correct, we make no 
					representations or warranties of any kind, express or implied, 
					about the completeness, accuracy, reliability, suitability or 
					availability with respect to the website or the information, 
					products, services, or related graphics contained on the website 
					for any purpose. Any reliance you place on such information 
						is therefore strictly at your own risk. In no event will 
					we be liable for any loss or damage including without limitation, 
					indirect or consequential loss or damage, or any loss or damage 
					whatsoever arising from loss of data or profits arising out 
					of, or in connection with, the use of this website. Through 
					this website you are able to link to other websites which are 
					not under the control of 'Send a Spatula'. We have no control 
					over the nature, content and availability of those sites. The 
					inclusion of any links does not necessarily imply a 
					recommendation or endorse the views expressed within them. 
					Every effort is made to keep the website up and running 
					smoothly. However, 'Send a Spatula' takes no responsibility 
					for, and will not be liable for, the website being temporarily 
						unavailable due to technical issues beyond our control. 
				</p>
			</div>
		</div>
	</div>
);

export default App;
