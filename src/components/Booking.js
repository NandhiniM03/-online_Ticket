import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Seating from "./Seating";

const Booking = ({ isLoggedIn }) => {
  const [selectedSeats, setSelectedSeats] = useState([]); 
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    navigate("/login"); // Redirect to login page
    return null;
  }

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before proceeding!");
      return;
    }
    setShowPayment(true);
  };

  return (
    <div style={styles.container}>
      <h2>Select Your Seats</h2>
      <Seating selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      
      {!showPayment ? (
        <button onClick={confirmBooking} style={styles.button}>
          Confirm Booking
        </button>
      ) : (
        <PaymentSection selectedSeats={selectedSeats} />
      )}
    </div>
  );
};

// Payment Component
const PaymentSection = ({ selectedSeats }) => {
  return (
    <div style={styles.paymentContainer}>
      <h2>Payment Details</h2>
      <p><strong>Selected Seats:</strong> {selectedSeats.join(", ")}</p>
      <p><strong>Total Price:</strong> ${selectedSeats.length * 10} (Each seat costs $10)</p>
      <button onClick={() => alert("Payment Successful!")} style={styles.payButton}>
        Pay Now
      </button>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  paymentContainer: {
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    display: "inline-block",
    backgroundColor: "#f8f9fa",
  },
  payButton: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Booking;
