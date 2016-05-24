// application routes
import React from 'react';
import {mount} from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);

const MainLayout = ({content}) => (
    <div>
      <header>
        This is our header
      </header>
      <main>
        {content}
      </main>
    </div>
);

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    mount(MainLayout, {
  content: <WelcomeComponent name="Arunoda" />
});
  },
});