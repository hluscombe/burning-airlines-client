import React, { Component } from "react";
import axios from "axios";

class ConfirmSeat extends Component {
  constructor() {
    super();
    this.state = { isBooked: false }
    this._handleClick = this._handleClick.bind(this)
    this.toggleConfirm = this.toggleConfirm.bind(this)
  }

  toggleConfirm() {
    this.setState({ isBooked: !this.state.isBooked })
  }

  _handleClick() {
    const {activeRow, activeColumn, flightNumber} = this.props
    axios.post("https://burning-airlines-sei31.herokuapp.com/reservations.json",
    {
    "user_id":1,
    "flight_id": flightNumber,
    "row": activeRow,
    "column":`${activeColumn}`
  }).then(res => this.toggleConfirm())
  }


  renderConfirm() {
    const {activeRow, activeColumn} = this.props
    return (
      <>
        <p>Confirm Seat: </p>
        <p>{activeRow}{activeColumn}</p>
        <button onClick={ this._handleClick }>Book Now!</button>
      </>
    )
  }

  renderMsg() {
    return (
      <>
        <p>Congratulations</p>
        <button onClick={ this.toggleConfirm }>Book another seat</button>
      </>
    )
  }

  render() {

    return (
      this.state.isBooked ? <>{this.renderMsg()}</> : <>{this.renderConfirm()}</>

    )
  }
}

export default ConfirmSeat
