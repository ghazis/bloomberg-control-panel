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
        <Route exact path='/chivprod042' component={BB1} />
        <Route path='/chivprod026' component={BB2} />
        <Route path='/chivprod044' component={BB3} />
        <Route path='/chivprod034' component={BB4} />
        <Route path='/chivprod046' component={BB5} />
        <Route path='/chivprod049' component={BB6} />
        <Route path='/chivprod007' component={BB7} />
      </Switch>
);
