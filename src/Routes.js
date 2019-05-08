import React from 'react'
// to save headaches the hash router is preferred to BrowserRouter
import { HashRouter as Router, Route } from 'react-router-dom';

import SearchFlights from './components/Search/SearchFlights/SearchFlights'
import FlightDetails from './components/Flight/FlightDetails/FlightDetails'

const Routes = (
  <Router>
    <div>
      <Route exact path="/searchflights" component={ SearchFlights } />
      <Route
        exact
        path="/flight/:name"
        render={(props) => <FlightDetails {...props} flightData={'test'} />}
      />
    </div>
  </Router>
);

export default Routes;
