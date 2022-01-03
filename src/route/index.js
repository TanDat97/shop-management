import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../views/Layout';

import Home from '@/views/Home';
import ListProduct from '@/views/Product';
import CreateProduct from '@/views/Product/create';
import EditProduct from '@/views/Product/edit';
export const childRoutes = [
  {
    path: '/home',
    component: Home,
    exactly: true,
  },
  {
    path: '/product/list',
    component: ListProduct,
    exactly: true,
  },
  {
    path: '/product/create',
    component: CreateProduct,
    exactly: true,
  },
  {
    path: '/product/edit',
    component: EditProduct,
    exactly: true,
  },
];

const routes = (
  <Switch>
    <Route path='/' component={Layout} />
  </Switch>
);

export default routes;
