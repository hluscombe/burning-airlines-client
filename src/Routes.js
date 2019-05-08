import React from 'react'
// to save headaches the hash router is preferred to BrowserRouter
import { HashRouter as Router, Route } from 'react-router-dom';

import SearchFlights from './components/SearchFlights'
import Flight from './components/Flight'

// Not a functional component
const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ SearchFlights } />
      <Route path="/flights/:name" component={ FlightsDetails } />
    </div>
  </Router>
);

export default Routes;
