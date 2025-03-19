import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Booking from "./components/Booking";
import Seating from "./components/Seating";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";

import Form from "./components/Form";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Moviecard from "./components/Moviecard";
import Ticket from "./components/Ticket";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home setSelectedMovie={setSelectedMovie} />} /> {/* ✅ Pass as prop */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/form" element={<Form />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails movie={selectedMovie} />} />
          <Route path="/booking/:id" element={<Booking movie={selectedMovie} />} />
          <Route path="/seating/:id" element={<Seating />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/moviecard" element={<Moviecard />} />

          {/* ✅ Ensure Login receives setIsLoggedIn */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {/* ✅ Ensure Booking receives isLoggedIn */}
          <Route path="/booking" element={<Booking isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
