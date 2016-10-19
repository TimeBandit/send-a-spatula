import React from 'react';

const WelcomeComponent = ({ name }) => (
    <span>
		<h1 className="title animated zoomInDown">
			Send a Spatula
		</h1>
        <h3 className="subTitle animated fadeIn">
        	100% Fun, 100% Anonymous, Posted to anywhere in the UK <a href="https://en.wikipedia.org/wiki/United_Kingdom" target="_blank"><img src="images/United-Kingdom-flat-icon.png" alt="The flag of the United Kingdom" /></a> Only £3.
        </h3>
	</span>
);

export default WelcomeComponent;
