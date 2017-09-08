import React from 'react';
import { mount } from 'react-mounter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// layouts
import Basic from '../../ui/layouts/Basic';

mount(() => (
  <Router>
    <Switch>
      <Route path="/" component={Basic} />
    </Switch>
  </Router>
));
