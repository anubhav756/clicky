import React from 'react';
import { mount } from 'react-mounter';

FlowRouter.route('/', {
  name: 'Main',
  action() {
    mount(() => <div>Hello</div>);
  },
});
