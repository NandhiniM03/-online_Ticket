import React, { useState, useEffect } from "react";
import "./Ticket.css";

const Ticket = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "", // Rating field
  });

  // State to store submitted tickets
  const [tickets, setTickets] = useState([]);

  // Load tickets from Local Storage when the page loads
  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new ticket object
    const newTicket = { ...formData, id: new Date().getTime() };

    // Update the state and store in Local Storage
    const updatedTickets = [...tickets, newTicket];
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    // Reset the form
    setFormData({ name: "", email: "", message: "", rating: "" });

    alert("Your ticket has been submitted successfully!");
  };

  return (
    <div className="ticket">
      <h1 className="ticket-heading">Customer Feedback & Support</h1>
      <p className="ticket-description">
        Need help with a ticket? Want to share feedback? Submit your inquiry below and we’ll get back to you!
      </p>

      {/* Ticket Submission Form */}
      <form onSubmit={handleSubmit} className="ticket-form">
        <h2 className="form-heading">Submit a Ticket</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
        <textarea
          name="message"
          placeholder="Describe your issue or feedback..."
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          required
        />

        {/* Rating Dropdown */}
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Rate Your Experience</option>
          <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
          <option value="4">⭐⭐⭐⭐ - Good</option>
          <option value="3">⭐⭐⭐ - Average</option>
          <option value="2">⭐⭐ - Poor</option>
          <option value="1">⭐ - Terrible</option>
        </select>

        <button type="submit" className="form-button">Submit Ticket</button>
      </form>

      {/* Display Submitted Tickets */}
      <div className="ticket-list">
        <h2 className="form-heading">Customer Feedback</h2>
        {tickets.length === 0 ? (
          <p>No tickets submitted yet.</p>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <h3>{ticket.name} ({ticket.email})</h3>
              <p><strong>Feedback:</strong> {ticket.message}</p>
              <p><strong>Rating:</strong> {ticket.rating} ⭐</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Ticket;
