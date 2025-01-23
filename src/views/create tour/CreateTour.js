import React, { useState } from "react";
import "./CreateTour.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";

const CreateTour = () => {
  const [formData, setFormData] = useState({
    tourName: "",
    destination: "",
    location: "",
    days: "",
    budget: "",
    date: "",
    travelMedium: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <section className="CreateTour">
      <NavbarComp />

      {/* Header Section */}
      <header className="header-section" style={{
        backgroundImage: `url('/assets/img/tour-header-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div className="header-content">
          <h1>Plan Your Dream Adventure</h1>
          <p>Turn your travel dreams into reality with our easy-to-use tour creation platform.</p>
          <button
            className="cta-button"
            onClick={() => {
              document.getElementById("cta-form").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Planning Now
          </button>
        </div>
      </header>

      <section id="cta-form" className="cta-form">
  <div className="form-section">
    <h2>Create Your Tour</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tourName">Tour Name:</label>
            <input
              type="text"
              id="tourName"
              name="tourName"
              value={formData.tourName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Starting Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="days">Number of Days:</label>
            <input
              type="text"
              id="days"
              name="days"
              value={formData.days}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="budget">Budget:</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Start Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="travelMedium">Travel Medium:</label>
            <select
              id="travelMedium"
              name="travelMedium"
              value={formData.travelMedium}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a medium
              </option>
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="airplane">Airplane</option>
              <option value="bike">Bike</option>
            </select>
          </div>
        </div>
      </div>

      <div className="description-section">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>

  <div className="image-section">
    <img
      src="/assets/img/createtour1.png"
      alt="Tour Visual"
      className="tour-image"
    />
  </div>
</section>


      <section id="features" className="features-section">
        <h2>Why Create a Tour?</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Meet New Friends</h3>
            <p>Connect with like-minded travelers on your adventures.</p>
          </div>
          <div className="feature">
            <h3>Explore New Destinations</h3>
            <p>Discover unique places and hidden gems around the world.</p>
          </div>
          <div className="feature">
            <h3>Flexible Scheduling</h3>
            <p>Discover unique places and hidden gems around the world.</p>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default CreateTour;