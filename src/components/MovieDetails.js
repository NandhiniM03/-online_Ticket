import React, { useState } from "react";
import MovieDetails from "./MovieDetails";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    plot: "A thief who enters the dreams of others to steal secrets.",
    poster: "https://via.placeholder.com/300x450",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    plot: "A team of explorers travels through a wormhole in space.",
    poster: "https://via.placeholder.com/300x450",
  },
];

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
      ) : (
        <div>
          <h1>Movie List</h1>
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              style={{
                cursor: "pointer",
                padding: "10px",
                border: "1px solid #ccc",
                margin: "10px auto",
                maxWidth: "400px",
                borderRadius: "5px",
              }}
            >
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
