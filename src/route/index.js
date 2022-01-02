import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../views/Layout';

import Home from '@/views/Home';
export const childRoutes = [
  {
    'path':'/home',
    'component': Home,
    'exactly': true
  },
];

const routes = (
  <Switch>
    <Route path="/" component={Layout}/>
  </Switch>
);

export default routes
