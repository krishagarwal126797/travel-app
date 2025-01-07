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

      <section id="header" className="header-section">
        <div className="header-content">
          <h2>Welcome to the Tour Creator</h2>
          <p>Discover new destinations and meet new friends by creating your own tours.</p>
        </div>
      </section>

      <section id="cta-form" className="cta-form">
        <div className="form-section">
          <h2>Create Your Tour</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="tourName">Tour Name:</label>
            <input
              type="text"
              id="tourName"
              name="tourName"
              value={formData.tourName}
              onChange={handleChange}
              required
            />

            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />

            <label htmlFor="location">Starting Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <label htmlFor="days">Number of Days:</label>
            <input
              type="text"
              id="days"
              name="days"
              value={formData.days}
              onChange={handleChange}
              required
            />

            <label htmlFor="budget">Budget:</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />

            <label htmlFor="date">Start Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

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

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

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

      <section id="features" class="features-section">
        <h2>Why Create a Tour?</h2>
        <div class="features-list">
            <div class="feature">
                <h3>Meet New Friends</h3>
                <p>Connect with like-minded travelers on your adventures.</p>
            </div>
            <div class="feature">
                <h3>Explore New Destinations</h3>
                <p>Discover unique places and hidden gems around the world.</p>
            </div>
            <div class="feature">
                <h3>Flexible Scheduling</h3>
                <p>Plan your tours at your convenience.</p>
            </div>
        </div>
    </section>

      <Footer />
    </section>
  );
};

export default CreateTour;
