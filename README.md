# Burning Airlines

This is an airlines reservation system project.

---

## Wireframe
<img width="894" alt="Screen Shot 2019-05-08 at 11 17 28" src="https://user-images.githubusercontent.com/33978352/57342723-953d7c80-7183-11e9-86aa-83e52192aac5.png">

## Models

There are models for Airplane, Flight, User, and Reservation.

An Airplane has many Flights and a Flight belongs to an Airplane.

A User has many Reservations and a Reservation belongs to a User.

A Flight has many Reservations and a Reservation belongs to a Flight.

The Reservation table is a join table between Users and Flights, which have a many-to-many relationship through Reservations.

The Airplane model has rows and columns to determine the configuration of the plane; the Airplane model has a row and a column for a particular seat.

---

## Tools

* Rails
* React

A task tracker:
  * [Trello: back_end](https://trello.com/b/ZO5I2g4T/burning-airlines-backend)
  * [Trello: front_end](https://trello.com/b/2EePjWEP/burning-airlines-frontend)