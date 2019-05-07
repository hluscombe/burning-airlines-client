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

PAGE 0 - APP
  JSX
  <nav>
    <a>Search</a>
    <a>User</a>
  </nav>
  <h1>Airline Name</h1>
  <a>Search Flights</a> // probably not needed initially (we just always show the search)

  STATE
  currentPage: "search" // optional if we don't use react-router - might be easier to start with this and move to react-router if we have time

  METHOD
  _setCurrentPage // calls setState to set current page to either "search" or "flight_id" adn we conditionally render Search or Flight


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
  _setCurrentPage // will be on-passed to <Results />

  METHODS
  _handleChange // will handle from and to changes and setState of fromValue and toValue
  _handleSubmit // will handle axios call to api and setState of searchResults

  OTHER DATA
  destinations // to populate the from and to select menus - e.g. Sydney, Melbourne etc

<Results />
  JSX
  <h2>Flight Search Results</h2>
  <div className="grid">
    <p>Date</p>
    <a>Flight</a>
    <p>From</p>
    <p>To</p>
    <p>Plane</p>
  </div>

  STATE
    selectedFlight: "flight_id"

  PROPS
    searchResults // array of objects passed down from <Search />
    _setCurrentPage // method to change the view

  METHODS
    _handleSelectFlight // calls _setCurrentPage("flight_id") which hides the Search page and renders the Flight page


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
  flight_id

  METHODS
  componentDidMount // built-in React method where we can call axios to get the flight details

<SeatingChart />
  JSX
  <div className="grid">
    <Seat />
    <Seat />
    ...
  </div>
  <div> // this may need to be its own component
    <p>21 B</p>
    <button>Select Seat</button>
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
