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
				<ul className="">
					<li>
						<a href={Meteor.absoluteUrl('#how-it-works')}>How-it-Works</a>
					</li>
					<li>
						<a href={Meteor.absoluteUrl('#tweets')}>Tweets</a>
					</li>
					<li>
						<a href={Meteor.absoluteUrl('#contact-us')}>Contact Us</a>
					</li>
					<li>
						<a href={Meteor.absoluteUrl('#buy')}>BUY</a>
					</li>
				</ul>
			</nav>
        );
    }
}
