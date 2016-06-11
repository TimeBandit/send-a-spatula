// modules
import { $ } from 'meteor/jquery';
import responsiveNavInit from "../helpers/responsiveNavInit";
import smoothScroll from "../helpers/smoothScroll";

// components
import React from 'react';

let pathFor = (path, params) => {
    console.log(params);

    let query = params && params.query ? FlowRouter._qs.parse(params.query) : {};
    return FlowRouter.path(path, params, query);
};

let urlFor = (path, params) => {
    return Meteor.absoluteUrl(pathFor(path, params));
};

let currentRoute = (route) => {
    FlowRouter.watchPathChange();
    return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
    pathFor: pathFor,
    urlFor: urlFor,
    currentRoute: currentRoute
};

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
						<a href={Meteor.absoluteUrl('#how-it-works')}>How-it-Works</a>
					</li>
					<li>
						<a href={Meteor.absoluteUrl('#tweets')}>Tweets</a>
					</li>
					<li>
						<a href={Meteor.absoluteUrl('#contact-us')}>Contact Us</a>
					</li>
					<li>
						<a href={Meteor.absoluteUrl('#buy')}>BUY -> <span className="cost">£5</span></a>
					</li>
				</ul>
			</nav>
        );
    }
}
