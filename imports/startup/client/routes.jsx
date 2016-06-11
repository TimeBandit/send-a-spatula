// imports
import React from 'react';
import {mount} from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import WelcomeComponent from '../../ui/components/WelcomeComponent.jsx'
import Disclaimer from '../../ui/components/Disclaimer.jsx';
import Main from '../../ui/components/Main.jsx';


// application routes

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    mount(AppContainer, {
  content: <Main />
});
  },
});

FlowRouter.route('/disclaimer', {
  name: 'App.disclaimer',
  action() {
    mount(AppContainer, {
  content: <Disclaimer />
});
  },
});