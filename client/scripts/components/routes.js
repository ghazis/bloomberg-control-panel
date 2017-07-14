import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BB1 from './pages/BB1';
import BB2 from './pages/BB2';
import BB3 from './pages/BB3';
import BB4 from './pages/BB4';
import BB5 from './pages/BB5';
import BB6 from './pages/BB6';
import BB7 from './pages/BB7';

export default (
      <Switch>
        <Route exact path='/BB1' component={BB1} />
        <Route path='/BB2' component={BB2} />
        <Route path='/BB3' component={BB3} />
        <Route path='/BB4' component={BB4} />
        <Route path='/BB5' component={BB5} />
        <Route path='/BB6' component={BB6} />
        <Route path='/BB7' component={BB7} />
      </Switch>
);
