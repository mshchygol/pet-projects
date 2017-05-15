/**
 * Created by myhailo on 1/13/17.
 */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import Home from '../components/home';
import App from '../components/app';
import Phones from '../components/items/phones';
import Laptops from '../components/items/laptops';
import Cart from '../components/items/cart';
import Single from '../components/layout/single';

import '../app/style.css';

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/phones' component={Phones}/>
        <Route path='/laptops' component={Laptops}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/view/:itemType/:itemID/:isCart' component={Single}/>
      </Route>
    </Router>
  </Provider>
);

export default routes;