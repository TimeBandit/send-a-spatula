import React from 'react'
import Disclaimer from './Disclaimer.jsx';
import Credits from './Credits.jsx';

const Footer = ({}) => (
    <footer>
		<div className="row">
			<div className="one-third column social">
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
			<div className="one-third column shares">
				<div className="fb-like" 
			        data-href="http://www.your-domain.com/your-page.html" 
					data-layout="standard" 
					data-action="like" 
					data-show-faces="true"></div>
		        <div className="tw-like">
		        	<a href="https://twitter.com/share" className="twitter-share-button">Tweet</a>
		        </div>
			</div>
			<div className="one-third column info">
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
