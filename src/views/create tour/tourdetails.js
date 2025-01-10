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
      <section className="tour-features">
        <h2 className="section-title">Unique Experiences</h2>
        <div className="feature">
          <img src="/assets/img/h20.jpg" alt="Feature" className="feature-image" />
          <p>
            Witness the stunning beauty of the Alps with guided treks, luxurious stays, and immersive cultural experiences.
          </p>
        </div>
      </section>
      <br></br>
      <section className="tour-timeline">
  <h2 className="section-title">Tour Timeline</h2>
  <div className="timeline-container">
    <div className="timeline-item">
      <div className="timeline-content left">
        <p><strong>2019:</strong> Why and how your company was started - mention the founders and the initial muse.</p>
      </div>
      <div className="timeline-icon">
        <img src="/assets/img/lightbulb.png" alt="2019 Icon" />
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-icon">
        <img src="/assets/img/gears.png" alt="2020 Icon" />
      </div>
      <div className="timeline-content right">
        <p><strong>2020:</strong> When did that muse become an actual reality? The moment when the first steps were taken to start the foundation of the company.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-content left">
        <p><strong>2022:</strong> Mention the first project launch by the company, early successes, and even failures that you learned from.</p>
      </div>
      <div className="timeline-icon">
        <img src="/assets/img/rocket.png" alt="2022 Icon" />
      </div>
    </div>
    {/* Add more timeline items as needed */}
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
