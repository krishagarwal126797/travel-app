import React from "react";
import NavbarComp from "../Navbar";
import Footer from "../footer";
import "./tour_listing.css";
import { useNavigate } from "react-router-dom";

const TourListing = () => {
     const navigate = useNavigate();
  return (
    <div>
        <NavbarComp />
      <section className="tour_listing">
        <div className="tour-listing">
          {/* Header Section */}
          <header className="header-section">
            <div className="header-overlay">
              <h1>Find Your Next Adventure</h1>
              <p>
                Discover amazing tours, meet new people, and explore breathtaking
                destinations. Join us to make your travel dreams come true!
              </p>
              <button className="explore-btn">Explore Tours</button>
            </div>
          </header>

          {/* Project List Section */}
          <section className="project-list">
            <h2>Available Tours</h2>
            <div className="tours">
              {[
                {
                  id: 1,
                  destination: "Paris, France",
                  dates: "Jan 20 - Jan 25",
                  spots: 5,
                  img: "/assets/img/h20.jpg",
                },
                {
                  id: 2,
                  destination: "Tokyo, Japan",
                  dates: "Feb 10 - Feb 15",
                  spots: 8,
                  img: "/assets/img/h20.jpg",
                },
                {
                  id: 3,
                  destination: "New York, USA",
                  dates: "Mar 5 - Mar 10",
                  spots: 3,
                  img: "/assets/img/h02.jpg",
                },
              ].map((tour) => (
                // <div key={tour.id} className="tour-card" onClick={() => navigate(`/tourdetails/${tour.id}`)}>
                  <div key={tour.id} className="tour-card" onClick={() => navigate("/tourdetails")}>
                  <div className="tour-card-image"></div>
                  <div className="tour-card-image">
                    <img src={tour.img} alt={tour.destination} />
                  </div>
                  <div className="tour-card-content">
                    <h3>{tour.destination}</h3>
                    <p>Dates: {tour.dates}</p>
                    <p>Available Spots: {tour.spots}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

         {/* Features Section */}
<section className="features-list">
  <h2 className="features-heading">Why Join Our Tours?</h2><br></br>
  <div className="features">
    <div className="feature-card">
      <img src="/assets/img/h20.jpg" alt="Meet New People" />
      <h3>Meet New People</h3>
      <p>
        Build lifelong connections with fellow travelers while enjoying
        incredible experiences.
      </p>
    </div>
    <div className="feature-card">
      <img src="/assets/img/h20.jpg" alt="Discover New Destinations" />
      <h3>Discover New Destinations</h3>
      <p>
        Explore unique locations with curated itineraries tailored just
        for you.
      </p>
    </div>
    <div className="feature-card">
      <img src="/assets/img/h20.jpg" alt="Flexible Scheduling" />
      <h3>Flexible Scheduling</h3>
      <p>
        Choose from a variety of dates to find the perfect tour for your
        schedule.
      </p>
    </div>
  </div>
</section>


          {/* CTA Section */}
          <section className="cta">
            <h2>Ready to Start Your Adventure?</h2>
            <button className="cta-btn" onClick={() => navigate("/createtour")}>Create Your Tour</button>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TourListing;
