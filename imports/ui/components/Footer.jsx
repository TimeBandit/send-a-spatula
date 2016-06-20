import React from 'react'
import Disclaimer from './Disclaimer.jsx';
import Credits from './Credits.jsx';

const Footer = ({}) => (
    <footer>
		<div className="row">
			<div className="column social">
				<div className="fb-like" 
				data-href="https://sendaspatula.com" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
		        <div className="tw-like">
		        	<a href="https://twitter.com/share" className="twitter-share-button">Tweet</a>
		        </div>
				<div className="email">
					<a href="mailto:admin@sendaspatula.com?subject=Send a Spatula" target="_blank">
						<i className="fa fa-2x fa-envelope" aria-hidden="true"></i>
					</a>
				</div>					
				<Credits />
				<Disclaimer />
			</div>
		</div>
		<br/>
		<div>
			<p className="rights">
				Send a Spatula © 2016 All rights reserved.
			</p>
			<p className="extras">
				
			</p>
		</div>
	</footer>
)

export default Footer;
