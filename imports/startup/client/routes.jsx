// imports
import React from 'react';
import { render } from 'react-dom';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import WelcomeComponent from '../../ui/components/WelcomeComponent.jsx'
import Main from '../../ui/components/Main.jsx';
import NotFound from '../../ui/components/NotFound.jsx';

// application routes

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        mount(AppContainer, {
            content: <Main />
        });
    },
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
        mount(NotFound);
    }
};
