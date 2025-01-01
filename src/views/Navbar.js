import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaPlay, FaTag, FaInfoCircle, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const NavbarComp = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}
    >
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="#" className="brand-section">
          <div className="brand-icon"><img src="/assets/img/travel-tinder.png" style={{width:'50px',height:'50px'}}/></div>
          <span className={`brand-name ${darkMode ? "brandname-dark" : "brandname-light"}`}>Travel Tinder</span>
        </Navbar.Brand>

        {/* Responsive Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className={`nav-buttons ${darkMode ? "navbuttons-dark" : "navbuttons-light"}`}>
            <Button  className="nav-btn">
              <FaPlay className="icon" />
              Watch Film
            </Button>
            <Button  className="nav-btn">
              <FaTag className="icon" />
              Pricing
            </Button>
            <Button  className="nav-btn">
              <FaInfoCircle className="icon" />
              About Us
            </Button>
          </Nav>

          {/* Dark Mode Toggle */}
          <Button
            onClick={toggleDarkMode}
            className="dark-mode-toggle ms-3"
            variant={darkMode ? "light" : "dark"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>

          {/* Login Button */}
          <Nav>
            <Button variant="dark" className="login-btn">
              Login
            </Button>
          </Nav>
          <Nav>
            <Button variant="dark" className="signup-btn">
              Sign up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
