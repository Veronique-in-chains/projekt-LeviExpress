import React from "react";
import "./style.css";
import { SeatRow } from "../SeatRow";

export const SeatPicker = ({ seats, journeyId, selectedSeat }) => {

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => <SeatRow row={row} key={index} rowSelectedSeat={selectedSeat} />)}
        
      </div>
    </div>
  )
}