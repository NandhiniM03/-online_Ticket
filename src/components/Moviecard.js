import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title} ({movie.year})</h3>
      <Link to={`/movie/${movie.id}`}>Book Now</Link>
    </div>
  );
};

export default MovieCard;
