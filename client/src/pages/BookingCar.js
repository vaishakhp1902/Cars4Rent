import React from "react";
import DefaultLayout from "../components/DefaultLayout";

function BookingCar({match}) {
  return (
    <DefaultLayout>
      <h1>Booking Car</h1>
      <h1>Car id ={match.params.carid} </h1>
    </DefaultLayout>
  );
}

export default BookingCar;
