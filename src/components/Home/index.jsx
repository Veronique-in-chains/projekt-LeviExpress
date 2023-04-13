import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";
import { JourneyDetail } from "../JourneyDetail";
import { SeatPicker } from "../SeatPicker";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);

  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    console.log(journey);
    setJourney(journey);
  };

  const handleSeatSelected = (number) => setUserSeat(number);

  const handleBuy = () => {
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "create",
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    })
    .then(response => response.json())
    .then(data => navigate(`/reservation/${data.results.reservationId}`));
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />

      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker seats={journey.seats} journeyId={journey.journeyId} selectedSeat={userSeat} 
          onSeatSelected={handleSeatSelected} />

          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>
              Rezervovat
            </button>
          </div>
        </>
      )}

    </main>
  );
};
