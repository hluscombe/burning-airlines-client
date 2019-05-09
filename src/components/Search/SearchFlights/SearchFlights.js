import React, { Component } from "react";
import axios from "axios";
import Results from "../Results/Results";

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
    axios.get("http://localhost:3000/flights.json").then(results => {
      const searchResults = results.data.filter(result => {
        return (
          result.origin === this.state.fromValue &&
          result.destination === this.state.toValue &&
          result.date > this.state.currentDate
        );
      });
      this.setState({ searchResults });
    });
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
        <Results searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchFlights;
