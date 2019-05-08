import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const searchResults = [{
  date: 1557187200034, // if we use milliseconds it's easy to arrange dates
  flightNumber: 23, // probably the flight_id?
  from: "Melbourne", // not sure if we store these front end or create another table?
  to: "Sydney", // not sure if we store these front end or create another table?
  airplane: "747" // might need to be :airplane_id and we get the :name from that?
},
{
  date: 1557187200038, // if we use milliseconds it's easy to arrange dates
  flightNumber: 26, // probably the flight_id?
  from: "Paris", // not sure if we store these front end or create another table?
  to: "Tokyo", // not sure if we store these front end or create another table?
  airplane: "757" // might need to be :airplane_id and we get the :name from that?
}]

class Results extends Component {

  render() {
    return (
    <table>
      <thead>
        <th>Date</th>
        <th>Flight No.</th>
        <th>From:</th>
        <th>To:</th>
        <th>Flight Model:</th>
      </thead>
      <tbody>
        {this.props.searchResults.map(function(data, key) {
          const date = new Date(Number(data.date));
          const localDate = `${date.getDate()} / ${date.getMonth() +
            1} / ${date.getFullYear() - 2000}`;
          return (
            <tr key = {key}>
              <td>{localDate}</td>
              <td><Link to={`/flight/${data.flightNumber}`}>{data.flightNumber}</Link></td>
              <td>{data.from}</td>
              <td>{data.to}</td>
              <td>{data.airplane}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
  }
}

export default Results;
