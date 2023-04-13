import React from "react";
import { Seat } from "../Seat";

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      
      {row.map((seat) => {
        return (
          <Seat 
            number={seat.number} 
            key={seat.number} 
            isOccupied={seat.isOccupied} 
            isSelected={seat.number === Number(rowSelectedSeat)} 
            onSelect={onSeatSelected} 
          />
        )
      })}
      
    </div>
  )
}