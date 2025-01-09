import React, { useState } from "react";
import "./ProfileCard.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";

const ProfilePage = () => {
  const [isEditable, setIsEditable] = useState(false); // State to control edit mode

  const handleEditToggle = () => {
    setIsEditable(!isEditable); // Toggle edit mode
  };

  return (
    <div>
      <NavbarComp />
      <section className="profile">
        <div className="profile-container">
          <div className="header">
            <h2 className="header-title">User Profile</h2>
          </div>

          <div className="main-container">
            <img
              src="/assets/img/profile-icon.jpeg"
              className="profile-image"
              alt="Profile"
            />
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Profile</h2>
              <form>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    readOnly={!isEditable}
                  />
                </div>

                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    readOnly={!isEditable}
                  />
                </div>

                {/* Email (Non-editable) */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <p className="form-control" id="email-display">
                    user@example.com
                  </p>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    readOnly={!isEditable}
                  />
                </div>

                {/* Phone Number (Non-editable) */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <p className="form-control" id="phone">
                    123-456-7890
                  </p>
                </div>

                {/* City Dropdown */}
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <select
                    className="form-select"
                    id="city"
                    disabled={!isEditable}
                  >
                    <option value="">Select your city</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                  </select>
                </div>

                {/* State Dropdown */}
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="state"
                    disabled={!isEditable}
                  >
                    <option value="">Select your state</option>
                    <option value="California">California</option>
                    <option value="Texas">Texas</option>
                    <option value="New York">New York</option>
                    <option value="Illinois">Illinois</option>
                  </select>
                </div>

                {/* Edit/Save Button */}
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleEditToggle}
                >
                  {isEditable ? "Save" : "Edit"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default ProfilePage;
