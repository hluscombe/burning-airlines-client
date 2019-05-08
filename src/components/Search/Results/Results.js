import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
