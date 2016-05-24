// application routes
// import ;
import React from 'react';
import {mount} from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import WelcomeComponent from '../../ui/components/WelcomeComponent.jsx'


FlowRouter.route('/', {
  name: 'App.home',
  action() {
    mount(AppContainer, {
  content: <WelcomeComponent name="Arunoda" />
});
  },
});