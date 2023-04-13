import React from "react";
import "./style.css";
import { SeatRow } from "../SeatRow";

export const SeatPicker = ({ seats, selectedSeat, onSeatSelected }) => {

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">

        {seats.map((row, index) => {
          return (
            <SeatRow 
              row={row} 
              key={index} 
              rowSelectedSeat={selectedSeat} 
              onSeatSelected={onSeatSelected} 
            />
          )
        })}

      </div>
    </div>
  )
}