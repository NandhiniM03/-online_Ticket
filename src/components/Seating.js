import React from "react";
import "./Seating.css";

const Seating = ({ selectedSeats = [], setSelectedSeats = () => {} }) => {
  const seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"];

  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seating-container">
      {/* Title for the Seating Page */}
      <h1 className="seating-title">Seating</h1>

      {/* Seat Buttons */}
      <div className="seats-grid">
        {seats.map((seat) => (
          <button
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
            onClick={() => toggleSeatSelection(seat)}
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Seating;
