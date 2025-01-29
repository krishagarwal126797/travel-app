import React from "react";
import "./tourdetalis.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

const TourDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
        <NavbarComp />
        <section className="tourdetails">
    <div className="tour-details-page">
      {/* Header Section */}
      <header className="tour-header">
        <img src="/assets/img/h20.jpg" alt="Tour Main" className="main-image" />
        <h1 className="tour-title">Explore the Alpine Wonders</h1>
        <p className="tour-overview">
          A breathtaking journey through scenic landscapes, charming villages, and majestic mountains.
        </p>
      </header>

      {/* Stats Section */}
      <section className="tour-stats">
  <h2 className="section-title">Tour Highlights</h2>
  <div className="stats-container">
    <div className="stat-card">
      <img src="/assets/img/h20.jpg" alt="Duration" className="stat-card-img" />
      <div className="stat-card-body">
        <h3 className="stat-card-title">Duration</h3>
        <p className="stat-card-text">7 Days</p>
      </div>
    </div>
    <div className="stat-card">
      <img src="/assets/img/h20.jpg" alt="Distance" className="stat-card-img" />
      <div className="stat-card-body">
        <h3 className="stat-card-title">Distance</h3>
        <p className="stat-card-text">150km</p>
      </div>
    </div>
    <div className="stat-card">
      <img src="/assets/img/h20.jpg" alt="Difficulty" className="stat-card-img" />
      <div className="stat-card-body">
        <h3 className="stat-card-title">Difficulty</h3>
        <p className="stat-card-text">Moderate</p>
      </div>
    </div>
  </div>
</section>


<section class="tour-timeline">
  <h2 class="section-title">Tour Timeline</h2>
  <div class="timeline-container">
    <div class="timeline-item1">
      <div class="timeline-top">
        <p class="timeline-date">01 Jan 2025</p>
        <div class="timeline-icon">
          <img src="/assets/img/arrival.png" alt="Day 1 Icon" />
        </div>
      </div>
      <div class="timeline-content">
        <h3>Day 1</h3>
        <p>Arrival in Zurich, Switzerland. Welcome dinner and orientation.</p>
      </div>
    </div>
    <div class="timeline-item1">
      <div class="timeline-top">
        <p class="timeline-date">02 Jan 2025</p>
        <div class="timeline-icon">
        <img class="icon-image" src="/assets/img/calendar_7143015.png" alt="Day 2 Icon" />


        </div>
      </div>
      <div class="timeline-content">
        <h3>Day 2</h3>
        <p>Guided trek through the breathtaking Alps. Visit local villages.</p>
      </div>
    </div>
    <div class="timeline-item1">
      <div class="timeline-top">
        <p class="timeline-date">02 Jan 2025</p>
        <div class="timeline-icon">
          <img src="/assets/img/hiking.png" alt="Day 2 Icon" />
        </div>
      </div>
      <div class="timeline-content">
        <h3>Day 3</h3>
        <p>Guided trek through the breathtaking Alps. Visit local villages.</p>
      </div>
    </div>
    <div class="timeline-item1">
      <div class="timeline-top">
        <p class="timeline-date">02 Jan 2025</p>
        <div class="timeline-icon">
          <img src="/assets/img/hiking.png" alt="Day 2 Icon" />
        </div>
      </div>
      <div class="timeline-content">
        <h3>Day 4</h3>
        <p>Guided trek through the breathtaking Alps. Visit local villages.</p>
      </div>
    </div>
    <div class="timeline-item1">
      <div class="timeline-top">
        <p class="timeline-date">02 Jan 2025</p>
        <div class="timeline-icon">
          <img src="/assets/img/hiking.png" alt="Day 2 Icon" />
        </div>
      </div>
      <div class="timeline-content">
        <h3>Day 5</h3>
        <p>Guided trek through the breathtaking Alps. Visit local villages.</p>
      </div>
    </div>
  </div>
</section>
      {/* Locations Section */}
      <section className="tour-locations">
        <h2 className="section-title">Tour Destinations</h2>
        <div className="location">
          <img src="/assets/img/h20.jpg" alt="Location" className="location-image" />
          <p>Chamonix, Mont Blanc</p>
        </div>
        <div className="location">
          <img src="/assets/img/h20.jpg" alt="Location" className="location-image" />
          <p>Interlaken, Switzerland</p>
        </div>
        {/* Add more locations as needed */}
      </section>

      {/* Testimonial Section */}
      <section className="tour-testimonials">
        <h2 className="section-title">What Our Guests Say</h2>
        <blockquote className="testimonial">
          <p>"An unforgettable experience! The guides were fantastic and the views were breathtaking."</p>
          <cite>- Sarah L.</cite>
        </blockquote>
        {/* Add more testimonials as needed */}
      </section>

      {/* Reviews Section */}
      <section className="tour-reviews">
        <h2 className="section-title">Reviews</h2>
        <div className="review">
          <p>"Loved every moment of this tour. Highly recommended!"</p>
          <cite>- John D.</cite>
        </div>
        <button className="btn-primary">Write a Review</button>
      </section>

      {/* CTA Section */}
      <section className="tour-cta">
        <h2>Ready to Explore?</h2>
        <p>Book your tour or get in touch with us for more details.</p>
        <button className="btn-primary" onClick={() => navigate("/createtour")}>Book Now</button>
        <button className="btn-secondary" onClick={() => navigate("/contact")}>Contact Us</button>
      </section>

      {/* CTA Form Section */}
      <section className="cta-form">
        <h2>Have Questions?</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </section>
    </div>
    </section>
    <Footer />
    </div>
  );
};

export default TourDetailsPage;
