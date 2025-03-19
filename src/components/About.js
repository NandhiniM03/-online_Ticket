import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* About Section */}
      <section className="about">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to <strong>MovieFinder</strong>! We are passionate about bringing you the latest movie updates, reviews, and recommendations. 
          Our team is dedicated to helping you find the best movies to watch, whether you're a casual viewer or a cinema enthusiast.
        </p>
        <p className="about-description">
          At <strong>MovieFinder</strong>, our mission is to create a platform where movie lovers can explore and discover films that match their taste. 
          We believe in **quality, innovation, and user satisfaction**, and we strive to deliver a seamless movie-finding experience.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🎬 **Latest Movie Updates & Reviews**</li>
          <li>⭐ **Personalized Movie Recommendations**</li>
          <li>📢 **Community Discussions & Ratings**</li>
          <li>📽️ **Exclusive Insights & Trailers**</li>
          <li>🎭 **Engaging Movie Quizzes & Fun Facts**</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-info">
        <h2 className="contact-title">Get in Touch</h2>
        <p>Have questions or feedback? We’d love to hear from you!</p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@moviefinder.com</p>
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Address:</strong> 123 Cinema Street, Hollywood, CA 90210</p>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
