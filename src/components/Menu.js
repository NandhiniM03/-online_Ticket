import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="heading">Explore the Amazing Features of Movie Finder</h1>
      <p className="text">
        Movie Finder is packed with numerous features designed to make your movie
        searching experience seamless and fun. Whether you're a casual viewer or a movie
        buff, this app helps you discover the best films according to your preferences. 
        With Movie Finder, you can easily find movies by title, genre, or release year. 
        It's the perfect app for anyone looking to explore new films or keep track of 
        their favorite ones. Below are the key features that make Movie Finder an 
        ideal platform for movie enthusiasts:
      </p>
      <ul className="list">
        <li className="listItem">
          <strong>Search for Movies:</strong> Our intuitive search functionality allows
          you to quickly find movies by title, release year, or genre. Simply type in
          the movie name, and Movie Finder will do the rest. Get accurate and relevant
          results in just a few seconds.
        </li>
        <li className="listItem">
          <strong>View Movie Details:</strong> Each movie listed comes with detailed
          information such as the title, release year, genre, description, and a high-quality
          movie poster. We ensure that you have all the details you need before deciding
          to watch a movie.
        </li>
        <li className="listItem">
          <strong>Explore Top-Rated Films:</strong> Not sure which movie to watch? No worries!
          Movie Finder offers a curated list of top-rated films across different genres, ensuring
          you never run out of amazing content to watch.
        </li>
        <li className="listItem">
          <strong>Responsive Design:</strong> Movie Finder is designed to be fully responsive.
          Whether you’re using a desktop, tablet, or smartphone, you can expect a smooth and
          user-friendly experience.
        </li>
        <li className="listItem">
          <strong>Save Your Favorites:</strong> You can save your favorite movies and
          create a personalized list for easy access. No more forgetting the films you
          wanted to watch!
        </li>
      </ul>
      <p className="text">
        With these powerful features, Movie Finder ensures that you have all the tools
        to enhance your movie-watching experience. Whether you're looking to discover
        new movies or just want to keep track of your favorites, we’ve got you covered.
      </p>
    </div>
  );
};

export default Menu;
