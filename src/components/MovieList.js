import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div style={styles.grid}>
      {movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      ) : (
        <p style={styles.noResults}>No movies found</p>
      )}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
    gap: "20px",
    padding: "20px",
    justifyContent: "center", 
    transition: "all 0.3s ease",
  },
  noResults: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007BFF", 
  },
};

export default MovieList;
