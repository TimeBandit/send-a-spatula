// modules
import { $ } from 'meteor/jquery';
import responsiveNavInit from "../helpers/responsiveNavInit";
import smoothScroll from "../helpers/smoothScroll";

// components
import React from 'react';

export default class Menu extends React.Component {
    componentDidMount() {
        $(responsiveNavInit());
        $(smoothScroll());
    }

    render() {
        return (
            <nav id="nav" className="nav-collapse">
				<ul className="bg-green">
					<li>
						<a href="#how-it-works">How-it-Works</a>
					</li>
					<li>
						<a href="#tweets">Tweets</a>
					</li>
					<li>
						<a href="#contact-us">Contact Us</a>
					</li>
					<li>
						<a href="#buy">BUY -> <span className="cost">£5</span></a>
					</li>
				</ul>
			</nav>
        );
    }
}
