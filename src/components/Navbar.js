import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyWebsite</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">Menu</Link>
        </li>
        
        <li>
          <Link to="/booking/1" className="nav-link">Booking</Link>
        </li>
        <li>
          <Link to="/seating/1" className="nav-link">Seating</Link>
        </li>
        <li>
          <Link to="/Ticket" className="nav-link">Ticket</Link>
        </li>
        <li>
          <Link to="/Login" className="nav-link">LogIn</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
