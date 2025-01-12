import React from "react";
import "./tourdetalis.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";

const TourDetailsPage = () => {
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


      {/* Feature Section */}
      <section className="tour-timeline">
  <h2 className="section-title">Tour Timeline</h2>
  <div className="timeline-container">
    {/* Day 1 */}
    <div className="timeline-item">
      <div className="timeline-content">
        <p><strong>Day 1: 01 Jan 2025</strong></p>
        <p>Arrival in Zurich, Switzerland. Welcome dinner and orientation.</p>
      </div>
      <div className="timeline-icon">
        <img src="/assets/img/arrival.png" alt="Day 1 Icon" />
      </div>
    </div>

    {/* Day 2 */}
    <div className="timeline-item">
      <div className="timeline-icon">
        <img src="/assets/img/hiking.png" alt="Day 2 Icon" />
      </div>
      <div className="timeline-content">
        <p><strong>Day 2: 02 Jan 2025</strong></p>
        <p>Guided trek through the breathtaking Alps. Visit local villages.</p>
      </div>
    </div>

    {/* Day 3 */}
    <div className="timeline-item">
      <div className="timeline-content">
        <p><strong>Day 3: 03 Jan 2025</strong></p>
        <p>Visit the iconic Matterhorn. Enjoy scenic cable car rides.</p>
      </div>
      <div className="timeline-icon">
        <img src="/assets/img/mountain.png" alt="Day 3 Icon" />
      </div>
    </div>

    {/* Day 4 */}
    <div className="timeline-item">
      <div className="timeline-icon">
        <img src="/assets/img/boat.png" alt="Day 4 Icon" />
      </div>
      <div className="timeline-content">
        <p><strong>Day 4: 04 Jan 2025</strong></p>
        <p>Boat tour on Lake Geneva. Wine tasting at a local vineyard.</p>
      </div>
    </div>

    {/* Day 5 */}
    <div className="timeline-item">
      <div className="timeline-content">
        <p><strong>Day 5: 05 Jan 2025</strong></p>
        <p>Explore Interlaken. Optional paragliding experience.</p>
      </div>
      <div className="timeline-icon">
        <img src="/assets/img/paragliding.png" alt="Day 5 Icon" />
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
        <button className="btn-primary">Book Now</button>
        <button className="btn-secondary">Contact Us</button>
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
