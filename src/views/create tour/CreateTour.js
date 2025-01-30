import React, { useState } from "react";
import { db } from "../../firebase/firebase"; // Ensure the path is correct
import { collection, addDoc, Timestamp, GeoPoint } from "firebase/firestore";
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
    latitude: "",
    longitude: "",
    approve:false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Tours"), {
        Tour_name: formData.tourName,
        destination: formData.destination,
        start_location: new GeoPoint(
          parseFloat(formData.latitude), 
          parseFloat(formData.longitude)
        ),
        number_of_days: parseInt(formData.days),
        budget: parseInt(formData.budget),
        start_date: Timestamp.fromDate(new Date(formData.date)), // Fixed start date
        travel_medium: formData.travelMedium,
        description: formData.description,
        approve:formData.approve,
      });

      alert("Tour created successfully!");
      setFormData({
        tourName: "",
        destination: "",
        location: "",
        days: "",
        budget: "",
        date: "", // Reset date field
        travelMedium: "",
        description: "",
        latitude: "",
        longitude: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error creating tour. Please try again.");
    }
  };

  return (
    <section className="CreateTour">
      <NavbarComp />
      <header style={{
        backgroundImage: `url('/assets/img/TourImage1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center'
      }} className="header-section">
        <div className="header-content">
          <h1>Plan Your Dream Adventure</h1>
          <p>Turn your travel dreams into reality with our easy-to-use tour creation platform.</p>
          <button className="cta-button"  onClick={() => document.getElementById("cta-form").scrollIntoView({ behavior: "smooth" })}>
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
                  <label>Tour Name:</label>
                  <input type="text" name="tourName" value={formData.tourName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Destination:</label>
                  <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Starting Location (Latitude):</label>
                  <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Starting Location (Longitude):</label>
                  <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Number of Days:</label>
                  <input type="text" name="days" value={formData.days} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Budget:</label>
                  <input type="text" name="budget" value={formData.budget} onChange={handleChange} required />
                </div>
              </div>

              {/* Added Start Date Field */}
              <div className="form-row">
                <div className="form-group full-width">
                  <label>Start Date:</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label>Travel Medium:</label>
                  <select name="travelMedium" value={formData.travelMedium} onChange={handleChange} required>
                    <option value="" disabled>Select a medium</option>
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
              <label>Description:</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="5" required></textarea>
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
