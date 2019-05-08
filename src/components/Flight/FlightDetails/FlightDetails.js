import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class FlightDetails extends Component {
  render() {
    return (
      <div>
        <h1>Details Coming soon</h1>
        <Link to='/flights/'>Flights(this may need props and definitely needs work)</Link>
        <Link to='/searchflights/'> SearchFlights(this may need props and definitely needs work)</Link>
      </div>
    );
  }
}

export default FlightDetails;
