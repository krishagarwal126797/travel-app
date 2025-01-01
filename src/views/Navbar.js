import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="https://via.placeholder.com/40" // Replace with the actual logo URL
            alt="Logo"
            className="logo"
          />
          <strong>vulpo</strong>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="featuresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Features
              </a>
              <ul className="dropdown-menu" aria-labelledby="featuresDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Feature 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Feature 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="useCasesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Use Cases
              </a>
              <ul className="dropdown-menu" aria-labelledby="useCasesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Use Case 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Use Case 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Prices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="d-flex align-items-center">
            <button
              className={`btn me-3 theme-toggle ${
                isDarkMode ? "btn-light" : "btn-dark"
              }`}
              onClick={toggleTheme}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a href="#" className="btn btn-link text-decoration-none">
              Log In
            </a>
            <a href="#" className="btn btn-primary rounded-pill">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
