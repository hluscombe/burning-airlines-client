import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SearchFlights extends Component {
  constructor() {
    super();

    this.state = {
      destinations: ["", "Sydney", "Brisbane", "Melbourne", "Salvador"],
      fromValue: "",
      toValue: "",
      currentDate: 0,
      searchResults: []
    };

    this._handleChangeFrom = this._handleChangeFrom.bind(this);
    this._handleChangeTo = this._handleChangeTo.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChangeFrom(e) {
    this.setState({
      fromValue: e.target.value
    });
  }

  _handleChangeTo(e) {
    this.setState({
      toValue: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const currentDate = new Date().getTime();
    this.setState({ currentDate });
    axios
      .get("http://localhost:3000/flights.json")
      .then(results => console.log(results.data));
  }

  renderDestinations() {
    return this.state.destinations.map(destination => {
      return (
        <option key={destination} value={destination}>
          {destination}
        </option>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Search for flights</h1>
        <Link to="/flights/">
          Flight Details(this may need props and definitely needs work)
        </Link>
        <form onSubmit={this._handleSubmit}>
          <select onChange={this._handleChangeFrom}>
            {this.renderDestinations()}
          </select>
          <select onChange={this._handleChangeTo}>
            {this.renderDestinations()}
          </select>
          <button>Cancel</button>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchFlights;
