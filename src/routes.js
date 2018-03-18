import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import './country.css';
import DevTools from './DevTools';

export default (
  <Route path={'/'} component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path={'contact'} component={Contact}/>
    <Route path={'*'} component={NotFound}/>
    <DevTools/>
  </Route>
);