import React from 'react'
import flowHelpers from '../helpers/flowHelpers';

const Footer = ({}) => (
    <footer>
		<div className="row">
			<div className="column social">
				<div className="facebook">
					<a href="https://www.facebook.com/sendaspatula" target="_blank">
						<i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i>
					</a>
				</div>
				<div className="twitter">
					<a href="https://twitter.com/sendaspatula" target="_blank">
						<i className="fa fa-2x fa-twitter-square" aria-hidden="true"></i>
					</a>
				</div>
				<div className="email">
					<a href="mailto:admin@sendaspatula.com?subject=Send a Spatula" target="_blank">
						<i className="fa fa-2x fa-envelope" aria-hidden="true"></i>
					</a>
				</div>					
			</div>				
		</div>
		<br/>
		<div>
			<p className="rights">
				Send a Spatula © 2016 All rights reserved.
			</p>
			<p className="extras">
				<a href={flowHelpers.pathFor("/disclaimer")}>Disclaimer. </a>				
				Icons by <a href="http://www.doublejdesign.co.uk/">Double-J Design.</a> 
			</p>
		</div>
	</footer>
)

export default Footer;
