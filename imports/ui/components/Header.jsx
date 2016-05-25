import Landing from "./Landing";
import Menu from "./Menu";
import React from 'react';

const Header = ({}) => (
	<header>
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
	</header>	
);

export default Header;