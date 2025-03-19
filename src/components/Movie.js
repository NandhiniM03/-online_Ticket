import React, { useState } from "react";

const Movie = ({ movie }) => {
  const placeholder = "";
  const [imageSrc, setImageSrc] = useState(movie.poster || placeholder);

  return (
    <div style={styles.card}>
      <img
        src={imageSrc}
        alt={movie.title}
        style={styles.image}
        onError={() => setImageSrc(placeholder)} 
      />
      <h3 style={styles.title}>{movie.title}</h3>
      <p style={styles.year}>Year: {movie.year}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "transform 0.2s, box-shadow 0.2s", // Smooth hover effect
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  title: {
    margin: "10px 0",
    fontSize: "1.2rem",
    color: "#333",
  },
  year: {
    margin: "0 0 10px 0",
    color: "#666",
  },
};

export default Movie;
