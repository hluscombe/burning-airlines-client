import React, { Component } from "react";

class Seat extends Component {

  render() {
    // const {row, column} = this.props.selectedSeat;
    const { activeRow, activeColumn } = this.props;
    if (activeRow == null && activeColumn == null) { //this.props.selectedSeat.id  or .reservation_id??
      return(
        <div onClick={ this._handleSeatClick }>
          Seat: {activeRow}{activeRow} Available
        </div>
      )
    } else {
      return(
        <div>
          X
        </div>
      )
    }
  }

}

// return (
//   <div className={this.state.isAvailable ? "Available" : "Taken"} onClick={ this._handleClick }>
//     <div className={ this.props.selectedSeat === this.props.resevation_seatId && !this.state.isTaken ? "X" : "Available" }>
//
//     </div>
//   </div>
// );
// render() {
//
// }

export default Seat;
