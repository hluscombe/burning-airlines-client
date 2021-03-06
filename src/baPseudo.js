STRUCTURE

components/
  App.js (includes Nav and Heading - this is PAGE 0 and appears on every page)
  App.css // css is probably more suitable for this project (e.g. no node-sass)
  Search/
    SearchFlights/
      SearchFlights.js
      SearchFlights.css
    Results/
      Results.js
      Results.css
  Flight/
    FlightsDetails/
      FlightsDetails.js
      FlightsDetails.css
    SeatingChart/
      SeatingChart.js
      SeatingChart.css
    Seat/
      Seat.js
      Seat.css
    ConfirmSeat/
      ConfirmSeat.js
      ConfirmSeat.css


PAGE 0 - APP
  JSX
  <nav>
    <a>Search</a>
    <a>User</a>
  </nav>
  <h1>Airline Name</h1>
  <a>Search Flights</a> // probably not needed initially (we just always show the search)

PAGE 1 - SEARCH
<SearchFlights />
  JSX
  <select>from</select>
  <select>to</select>
  <button>Cancel</button>
  <button>Search</button>

  STATE
  fromValue: "", // option value in from
  toValue: "", // option value in to
  currentDate: 0, // current date in milliseconds so we return results after this date
  searchResults: [] // shape will be:
                     // {
                     //   date: 1557187200034, // if we use milliseconds it's easy to arrange dates
                     //   flightNumber: 23, // probably the flight_id?
                     //   from: "Melbourne", // not sure if we store these front end or create another table?
                     //   to: "Sydney", // not sure if we store these front end or create another table?
                     //   airplane: "747" // might need to be :airplane_id and we get the :name from that?
                     // }

  PROPS
  none

  METHODS
  _handleChange // will handle from and to changes and setState of fromValue and toValue
  _handleSubmit // will handle axios call to api and setState of searchResults

  OTHER DATA
  destinations // to populate the from and to select menus - e.g. Sydney, Melbourne etc

<Results />
  JSX
  <div className="grid">
    <h2>Flight Search Results</h2>
    <p>Date</p>
    <a>Flight</a>
    <p>From</p>
    <p>To</p>
    <p>Plane</p>
  </div>

  STATE
    selectedFlight: {...flightData}

  PROPS
    searchResults // array of objects passed down from <Search />

  METHODS
    _handleSelectFlight // might not be needed depending on how react-router operates


PAGE 2 - FLIGHT
<FlightDetails />
  JSX
  <p>{this.state.date}</p>
  <p>{this.state.flightName}</p>
  <p>{this.state.from}</p>
  <p>{this.state.to}</p>

  STATE
  date: 1557187200034, // we can convert this to human readable with JS
  flightName: "",
  from: "",
  to: "",
  airplane: {rows: 26, columns: 4},
  seatingChart: {
    rows: 26, // number of rows that we can construct the grid from
    columns: 4, // number of columns that we can construct the grid from
    reservations: [
      { row: "21", column: "1", user_name: "Tom" }, // this may come from reservation_id?
      { row: "22", column: "2", user_name: "Sue" }
    ]
  }

  PROPS
  flightData

  METHODS
  fetchReservations // we can call this in the constructor() as we did with fetchSecrets

<SeatingChart />
  JSX
  <div className="grid">
    <Seat />
    <Seat />
    ...
  </div>

  STATE
  selectedSeat: { row: "21", column: "2" }

  PROPS
  airplane // use rows and columns to construct grid
  reservations // use data to "grey out" reserved seats

  METHODS
  _handleSelectSeat // on select seat button press - axios.post to server .then setState of the selectedSeat

<Seat />
  JSX
  <div>{user_name || "X" || "avail"}</div>

  PROPS
  selectedSeat // if seat is reserved show user_name else show "avail" - if selected then show "X"

<ConfirmSeat />
  JSX
  <div>
    <p>21 B</p>
    <button>Select Seat</button>
  </div>

  PROPS
  selectedSeat // data to be displayed
  _handleSelectSeat
