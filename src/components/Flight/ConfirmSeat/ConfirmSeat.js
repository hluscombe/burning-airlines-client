import React, { Component } from "react";
import axios from "axios";

class ConfirmSeat extends Component {
  constructor() {
    super();
    this.state = { isBooked: false }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    const {activeRow, activeColumn, flightNumber} = this.props
    axios.post("http://localhost:3000/reservations.json",
    {
    "user_id":1,
    "flight_id": flightNumber,
    "row": activeRow,
    "column":`${activeColumn}`
  }).then(res => this.setState({ isBooked: !this.state.isBooked }))
  }

  render() {
    const {activeRow, activeColumn} = this.props
    return (
      <>
      <p>Confirm Seat: </p>
      <p>{activeRow}{activeColumn}</p>
      <button onClick={ this._handleClick }>Book Now!</button>
      </>
    )
  }
}

export default ConfirmSeat
