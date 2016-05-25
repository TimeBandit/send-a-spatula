import React from 'react';

const WelcomeComponent = ({name}) => (
	<span>
		<h1 className="title animated zoomInDown">
			Send a Spatula
		</h1>
        <h3 className="subTitle animated fadeIn">
        	100% Fun, 100% Anonymous, Posted to anywhere in the UK <img src="images/United-Kingdom-flat-icon.png" alt="A wooden spatula with a message on it" />
        </h3>
	</span>
);

export default WelcomeComponent;