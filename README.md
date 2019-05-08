# Burning Airlines

This is an airlines reservation system project.

---

## Wireframe
<img width="579" alt="687474703a2f2f692e696d6775722e636f6d2f586132444e72722e706e67" src="https://user-images.githubusercontent.com/33978352/57339080-599ab680-7173-11e9-8207-adcccf4f0d0d.png">

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