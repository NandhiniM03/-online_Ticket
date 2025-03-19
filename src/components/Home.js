import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "./MovieList";
import "./Home.css";
import "./Home.scss";

// Movie data
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 2014,
    poster: "pexels-hngstrm-3137890.jpg",
    
    plot: "Two imprisoned men bond over several years, finding solace and eventual redemption.",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 2012,
    poster: "pexels-mediocrememories-1117132.jpg",
    plot: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    poster:  "pexels-suissounet-1200450.jpg",
    plot: "Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham City.",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    poster:"pexels-laup-1790556.jpg",
    plot: "The lives of two hitmen, a boxer, and a gangster's wife intertwine in unexpected ways.",
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 2016,
    poster: "Screenshot 2025-01-13 200012.png",
    plot: "The story of a slow-witted but kind-hearted man witnessing historic events.",
  },
];

const Home = ({ setSelectedMovie }) => {
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const navigate = useNavigate();

  // Search movies
  const handleSearch = () => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(results);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Find & Book Your Favorite Movies 🎟️</h1>
        <p>Discover the best movies and book tickets instantly!</p>
      </header>

      {/* Search Bar */}
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {/* Movie List */}
      <div className="movie-list">
        {filteredMovies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <p>{movie.plot}</p>
            
              
              <button
              className="book-now-button"
              onClick={() => {
                alert("🎟️ Booking Successful! Your ticket has been booked.");
                setSelectedMovie(movie);
                navigate("/booking");
              }}
            >
              🎟️ Book Now
            </button>
            
              
            </div>
                
          ))
        )}
      </div>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          - Get real-time movie information.  
          - Easy and secure ticket booking.  
          - Best offers on your favorite movies!  
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Movie Booking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
