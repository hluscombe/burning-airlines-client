import React, { Component } from "react";


const styleActive = {
  backgroundColor: "red",
  border: "1px solid black",
  transition: "all .3s"
}

const styleNormal = {
  backgroundColor: "white",
  border: "1px solid black",
  transition: "all .3s"
}

class Seat extends Component {

  render() {
    const { dataRow, dataColumn, activeSeat, onClick } = this.props;
    if (activeSeat !== true) { //this.props.selectedSeat.id  or .reservation_id??
      return(
        <div onClick={ onClick } data-row={dataRow} data-column={dataColumn} style={styleNormal}>
          {dataRow}{dataColumn} Avail
        </div>
      )
    } else {
      return(
        <div onClick={ onClick } data-row={dataRow} data-column={dataColumn} style={styleActive}>
          <p>{ this.props.user_id }</p>
        </div>
      )
    }
  }
}

export default Seat;
// will have to show the user name from reservation
//

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
