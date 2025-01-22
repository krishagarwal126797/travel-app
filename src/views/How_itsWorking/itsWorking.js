import React from "react";
import NavbarComp from "../Navbar";
import Footer from "../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itsWorking.css";

const HowItWorks = () => {
  const createTourImages = [
    { src: "/assets/img/slide3.jpg", alt: "Destination Planning", content: "Plan your trip with ease and precision." },
    { src: "/assets/img/adventures.jpg", alt: "Custom Itineraries", content: "Tailor your adventure to your preferences." },
    { src: "/assets/img/h05.jpg", alt: "Group Collaboration", content: "Join hands with fellow travelers." },
  ];

  const joinTourImages = [
    { src: "/assets/img/PilgrimPlace.jpg", alt: "Tour Listings", content: "Explore various tour options." },
    { src: "/assets/img/TourImage1.jpg", alt: "Choose Your Adventure", content: "Select the tour that excites you." },
    { src: "/assets/img/mountaineer.jpg", alt: "Connect with Groups", content: "Meet and travel with like-minded adventurers." },
  ];

  const enjoyAdventureImages = [
    { src: "/assets/img/adventureAlone1.jpg", alt: "Breathtaking Views", content: "Experience stunning landscapes and nature." },
    { src: "/assets/img/adventures.jpg", alt: "Unforgettable Memories", content: "Make lasting memories with every trip." },
    { src: "/assets/img/adventures1.jpg", alt: "Exciting Activities", content: "Engage in thrilling activities." },
  ];

  const renderFeatureGrid = (images) => (
    <div className="row g-4">
      {images.map((image, index) => (
        <div className="col-md-6 d-flex align-items-center" key={index}>
          <div className="card feature-card border-0 shadow-sm flex-row">
            <img src={image.src} className="card-img-left p-3" alt={image.alt} style={{ width: "50%", objectFit: "cover", borderRadius: "10px " }} />
            <div className="card-body text-left">
              <h5 className="card-title">{image.alt}</h5>
              <p className="card-text">{image.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <NavbarComp />

      <section className="howitworks-header text-center py-5">
        <div className="container">
          <h1 className="fw-bold">How It Works</h1>
          <p className="lead">
            Welcome to your gateway to incredible adventures! Plan, join, and
            enjoy tours effortlessly.
          </p>
        </div>
      </section>

      <section className="feature-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title mb-4">Create a Tour</h2>
          <p>
            Design your perfect tour, select destinations, and inspire fellow
            travelers.
          </p>
          {renderFeatureGrid(createTourImages)}
        </div>
      </section>

      <section className="feature-section py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Join a Tour</h2>
          <p>
            Find and join tours that match your interests and travel with
            like-minded adventurers.
          </p>
          {renderFeatureGrid(joinTourImages)}
        </div>
      </section>

      <section className="feature-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title mb-4">Enjoy Your Adventure</h2>
          <p>
            Dive into extraordinary experiences and create unforgettable
            memories.
          </p>
          {renderFeatureGrid(enjoyAdventureImages)}
        </div>
      </section>

      <section className="cta-section text-center py-5">
        <div className="container">
          <h2>Ready to Start Your Adventure?</h2>
          <p className="lead">
            Let's create new stories, make new friends, and explore the world!
          </p>
          <button className="btn btn-primary btn-lg me-3">Create Your First Tour</button>
          <button className="btn btn-outline-primary btn-lg">Join a Tour Now</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
