import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

export const Reservation = () => {

  const {id} = useParams();

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
    .then((response) => response.json())
    .then((data) => setReservation(data.results))
  }, []);

  const [reservation, setReservation] = useState(null);

  console.log(reservation);

  return (
    <main>
        {reservation && 
          <div className="reservation container">
            <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
            <div className="reservation__body">
              <div className="reservation__headings">
                <p>Datum cesty:</p>
                <p>Odjezd:</p>
                <p>Příjezd:</p>
                <p>Sedadlo: {reservation.seatNumber}</p>
              </div>
              <div className="reservation__info">
                <p> {reservation.date}</p>
                <p> {reservation.fromCity.name}, {reservation.fromCity.time}</p>
                <p> {reservation.toCity.name}, {reservation.toCity.time}</p>
                <p>{reservation.seatNumber}</p>
              </div>
            </div>
          </div>
        }
    </main>
  );
};
