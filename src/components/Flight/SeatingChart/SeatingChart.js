import React, { Component } from "react";
import Seat from "../Seat/Seat.js";
import ConfirmSeat from '../ConfirmSeat/ConfirmSeat'
import axios from "axios";
import "./SeatingChart.css";

class SeatingChart extends Component {
  constructor() {
    super();
    this.state = {
      activeRow: 0,
      activeColumn: 0,
      airplane: {
        row: 0,
        column: 0
      },
      reservations: [{
        id: 0,
        user_id: 3,
        column: 0,
        row: 0
      }],
      userNames: {
        0: ""
      }
    };
    this._handleSeatClick = this._handleSeatClick.bind(this);

    const getUser = () => axios.get("https://burning-airlines-sei31.herokuapp.com/users.json").then(users => {
      let userNames = {};
      users.data.forEach(user => {
        userNames = { ...userNames, [user.id]: user.name }
      });
      this.setState({userNames});
    });
    getUser();

    const getData = () => {axios.get("https://burning-airlines-sei31.herokuapp.com/airplanes.json").then((result) => this.setState({airplane: result.data[0]}))
    }
    getData();

    const getRes = () => {axios.get("https://burning-airlines-sei31.herokuapp.com/reservations.json").then((result) =>
    this.setState({reservations: result.data}),
      setTimeout( getRes, 2000)
    )}
    getRes();
  }

  _handleSeatClick(e) {
    const row = e.target.getAttribute("data-row");
    const column = e.target.getAttribute("data-column");
    this.setState({
      activeRow: row,
      activeColumn: column
    });
  }

  renderSeats() {
    const { activeRow, activeColumn, airplane } = this.state;
    const { row, column } = airplane;
    const seats = Array.from(new Array(row * column));
    return seats.map((seat, index) => {
      const rowVal = Math.ceil((index + 1) / column);
      const colVal = index + 1 - (rowVal - 1) * column;
      const activeSeat =
        activeRow == rowVal && activeColumn == colVal ? true : false;
      return (
        <Seat
          key={index * Math.random()}
          className="seat"
          id={index}
          dataColumn={colVal}
          dataRow={rowVal}
          activeSeat={activeSeat}
          onClick={this._handleSeatClick}
        />
      );
    });
  }


  renderReservations() {
    return this.state.reservations.map(reservation => {
      const { id, column, row, user_id } = reservation;
      return (
        <div
          key={id}
          className="seat"
          style={{
            gridColumn: column,
            gridRow: row,
            border: "1px solid black",
            backgroundColor: "#eee",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          data-column={column}
          data-row={row}
          onClick={this._handleSeatClick}
        >
         {this.state.userNames[user_id]}
        </div>
      );
    });
  }

  render() {
    const { activeRow, activeColumn } = this.state;
    return (
      <>
        <h3 className="seating-chart-heading">Select A Seat</h3>
        <div className="seating-chart-row-names" />
        <div className="plane">
          <div
            style={{
              position: "absolute",
              display: "grid",
              gridTemplateRows: `repeat(${this.state.airplane.row}, 50px)`,
              gridTemplateColumns: `repeat(${Number(this.state.airplane.column)}, 50px)`,
              gridColumnGap: "5px",
              gridRowGap: "10px",
              width: `${55 * this.state.airplane.column}px`,
              margin: "0 auto"
            }}
          >
            {this.renderSeats()}

          </div>
          <div
            style={{
              position: "absolute",
              display: "grid",
              gridTemplateRows: `repeat(${this.state.airplane.row}, 50px)`,
              gridTemplateColumns: `repeat(${Number(this.state.airplane.column)}, 50px)`,
              gridColumnGap: "5px",
              gridRowGap: "10px",
              width: `${55 * this.state.airplane.column}px`,
              margin: "0 auto",
              pointerEvents: "none"
            }}
          >
            {this.renderReservations()}
          </div>
        </div>
        <ConfirmSeat
          activeRow={ activeRow }
          activeColumn={ activeColumn }
          flightNumber={ this.props.flightNumber }
        />
      </>
    );
  }
}

export default SeatingChart;
