import React, { Component } from "react";
import axios from "axios";
import SeatingChart from "../SeatingChart/SeatingChart";
import "./FlightDetails.css";

class FlightDetails extends Component {
  constructor() {
    super();
    this.state = { date: 0 };
  }

  fetchFlight() {
    axios.get("https://burning-airlines-sei31.herokuapp.com/flights.json").then(results => {
      const selectedFlight = results.data.filter(
        result => result.id == this.props.match.params.name
      );
      const { flight_number, date, origin, destination } = selectedFlight[0];
      this.setState({ flight_number, date, origin, destination });
    });
  }

  componentDidMount() {
    this.fetchFlight();
  }

  componentWillReceiveProps() {
    this.fetchFlight();
  }

  render() {
    const date = new Date(Number(this.state.date));
    const localDate = `${date.getDate()} / ${date.getMonth() +
      1} / ${date.getFullYear() - 2000}`;
    return (
      <div>
        <h1>Flight Details</h1>
        <h3>
          <span className="flight-details-heading">{localDate}</span>
          <span className="flight-details-heading">
            Flight {this.state.flight_number}
          </span>
          <span className="flight-details-heading">{this.state.origin}</span>
          <span className="flight-details-heading">
            {this.state.destination}
          </span>
        </h3>
        <SeatingChart
          flightNumber={this.props.match.params.name}
        />
      </div>
    );
  }
}

export default FlightDetails;
