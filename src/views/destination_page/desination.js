import React from "react";
import NavbarComp from "../Navbar";
import Footer from "../footer";
import "./destination.css";
import { useNavigate } from "react-router-dom";

const DestinationsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
        <NavbarComp/>
    <section className="destination">
    <div className="destinations-page">
      {/* Header Section */}
      <header className="header-section">
        <h1>Explore Your Dream Destinations</h1>
        <p>
          Discover breathtaking locations, from popular attractions to hidden gems. Start your adventure today!
        </p>
      </header>

      {/* Portfolio List Section */}
      <section className="portfolio-section">
        <h2>Our Featured Destinations</h2>
        <div className="portfolio-list">
          <div className="portfolio-item"  onClick={() => navigate("/destdetails")}> 
  <img src="/assets/img/h16.jpg" alt="Destination 1" />
  <h3>Paris</h3>
  <p>The city of lights and love, offering world-class art, fashion, and food.</p>

          </div>
          <div className="portfolio-item">
            <img src="/assets/img/ind2.jpeg" alt="Destination 2" />
            <h3>Bali</h3>
            <p>A tropical paradise with stunning beaches, lush landscapes, and vibrant culture.</p>
          </div>
          <div className="portfolio-item">
            <img src="/assets/img/ind3.jpg" alt="Destination 3" />
            <h3>Tokyo</h3>
            <p>Experience the perfect blend of tradition and futuristic modernity in Japan's capital.</p>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="features-section">
        <h2>Why Choose Our Destinations?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Popular Places</h3>
            <p>We handpick the most sought-after destinations around the globe.</p>
          </div>
          <div className="feature-item">
            <h3>Hidden Gems</h3>
            <p>Uncover lesser-known spots for unique and unforgettable experiences.</p>
          </div>
          <div className="feature-item">
            <h3>User Ratings</h3>
            <p>All destinations are highly rated by travelers like you.</p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <h2>Explore Destinations By Region</h2>
        <div className="map-placeholder">
          <p>[Interactive Map or Region Selector Coming Soon]</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Start Planning Your Journey</h2>
        <p>
          Don't wait to explore the world. Check out destination details and book your adventure now!
        </p>
        <button className="cta-button" onClick={() => navigate("/createtour")}>Explore Now</button>
      </section>
    </div>
    </section>
    <Footer />
    </div>
  );
};

export default DestinationsPage;
