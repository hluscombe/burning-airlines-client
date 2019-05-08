import React, { Component } from "react";
import axios from "axios";
import "./SeatingChart.css";

const reservations = [
  {
    id: 1,
    user_id: 1,
    flight_id: 1,
    row: 1,
    column: "1",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  },
  {
    id: 2,
    user_id: 2,
    flight_id: 1,
    row: 3,
    column: "2",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  },
  {
    id: 3,
    user_id: 3,
    flight_id: 1,
    row: 4,
    column: "5",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  },
  {
    id: 4,
    user_id: 4,
    flight_id: 1,
    row: 5,
    column: "3",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  },
  {
    id: 5,
    user_id: 5,
    flight_id: 1,
    row: 6,
    column: "4",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  },
  {
    id: 6,
    user_id: 6,
    flight_id: 1,
    row: 7,
    column: "6",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  },
  {
    id: 7,
    user_id: 7,
    flight_id: 1,
    row: 8,
    column: "5",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  },
  {
    id: 8,
    user_id: 8,
    flight_id: 1,
    row: 9,
    column: "1",
    created_at: "2019-05-08T01:10:21.957Z",
    updated_at: "2019-05-08T01:10:21.957Z"
  }
];

const airplane = {
  id: 1,
  model: 747,
  row: 54,
  column: "6",
  created_at: "2019-05-08T00:43:26.050Z",
  updated_at: "2019-05-08T00:43:26.050Z"
};

class SeatingChart extends Component {
  constructor() {
    super();
    this.state = {
      activeRow: 0,
      activeColumn: 0
    };

    this._handleSeatClick = this._handleSeatClick.bind(this);
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
    const { activeRow, activeColumn } = this.state;
    const { row, column } = airplane;
    const seats = Array.from(new Array(row * column));
    return seats.map((seat, index) => {
      const rowVal = Math.ceil((index + 1) / column);
      const colVal = index + 1 - (rowVal - 1) * column;
      const activeColor =
        activeRow == rowVal && activeColumn == colVal ? "#ff0000" : "";
      return (
        <div
          key={index * Math.random()}
          className="seat"
          style={{
            border: "1px solid black",
            transition: "all .3s",
            backgroundColor: activeColor
          }}
          id={index}
          data-column={colVal}
          data-row={rowVal}
          onClick={this._handleSeatClick}
        />
      );
    });
  }

  renderReservations() {
    return reservations.map(reservation => {
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
          {user_id}
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <h3 className="seating-chart-heading">Select A Seat</h3>
        <div className="seating-chart-row-names" />
        <div className="plane">
          <div
            style={{
              position: "absolute",
              display: "grid",
              gridTemplateRows: `repeat(${airplane.row}, 50px)`,
              gridTemplateColumns: `repeat(${Number(airplane.column)}, 50px)`,
              gridColumnGap: "5px",
              gridRowGap: "10px",
              width: `${55 * airplane.column}px`,
              margin: "0 auto"
            }}
          >
            {this.renderSeats()}
          </div>
          <div
            style={{
              position: "absolute",
              display: "grid",
              gridTemplateRows: `repeat(${airplane.row}, 50px)`,
              gridTemplateColumns: `repeat(${Number(airplane.column)}, 50px)`,
              gridColumnGap: "5px",
              gridRowGap: "10px",
              width: `${55 * airplane.column}px`,
              margin: "0 auto",
              pointerEvents: "none"
            }}
          >
            {this.renderReservations()}
          </div>
        </div>
      </>
    );
  }
}

export default SeatingChart;
