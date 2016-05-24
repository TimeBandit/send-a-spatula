// application routes
// import ;
import React from 'react';
import {mount} from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from '../../ui/layouts/MainLayout.jsx'


const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    mount(MainLayout, {
  content: <WelcomeComponent name="Arunoda" />
});
  },
});