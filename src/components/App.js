import React from 'react';
import SearchFlights from './Search/SearchFlight/SearchFlight.js'
import FlightDetails from './Flight/FlightDetails/FlightDetails.js'

function App() {
  return (
    <div className="App">
      <SearchFlights />
      <FlightDetails />
    </div>
  );
}

export default App;
