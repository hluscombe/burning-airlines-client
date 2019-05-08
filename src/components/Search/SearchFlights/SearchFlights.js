import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class SearchFlights extends Component {
  render() {
    return (
      <div>
        <h1>Burning Airlines coming soon</h1>
        <Link to='/flights/'>Flight Details(this may need props and definitely needs work)</Link>
      </div>
    );
  }
}

export default SearchFlights;
