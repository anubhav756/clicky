import React from 'react';
import { mount } from 'react-mounter';

// layouts
import Basic from '../ui/layouts/Basic';

// pages
import App from '../ui/pages/App';

FlowRouter.route('/', {
  name: 'Main',
  subscriptions() {
    this.register('allTeams', Meteor.subscribe('allTeams'));
  },
  action() {
    mount(Basic, { content: <App /> });
  },
});
