import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaPlay, FaTag, FaInfoCircle, FaMoon, FaSun, FaHome, FaCaretDown, FaMapMarkerAlt } from "react-icons/fa";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavbarComp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  return (
    <section className="NavbarComp">
      <Navbar
        expand="lg"
        className={`custom-navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}
      >
        <Container>
          {/* Logo Section */}
          <Navbar.Brand className="brand-section" onClick={() => navigate("/")}>
            <div className="brand-icon">
              <img src="/assets/img/travel-tinder.png" style={{ width: "50px", height: "50px" }} alt="Logo" />
            </div>
            <span className={`brand-name ${darkMode ? "brandname-dark" : "brandname-light"}`}>
              Travel Tinder
            </span>
          </Navbar.Brand>

          {/* Responsive Toggle */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className={`nav-buttons ${darkMode ? "navbuttons-dark" : "navbuttons-light"}`}>
              <Button className="nav-btn" onClick={() => navigate("/")}>
                <FaHome className="icon" />
                Home
              </Button>
              <Button className="nav-btn" onClick={() => navigate("/about")}>
                <FaInfoCircle className="icon" />
                About Us
              </Button>
              <div className="nav-btn-container">
                <div className="nav-btn">
                  <FaMapMarkerAlt className="icon me-2" />
                  Toures
                  <FaCaretDown
                    className="dropdown-icon ms-2"
                    onClick={toggle}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} className="dropdown">
                  <DropdownMenu>
                    <DropdownItem onClick={() => navigate("/mytour")}>Our Tour</DropdownItem>
                    <DropdownItem onClick={() => navigate("/team")}>Team</DropdownItem>
                    <DropdownItem onClick={() => navigate("/careers")}>Careers</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
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
              <Button
                variant="dark"
                className="login-btn"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Nav>
            <Nav>
              <Button
                variant="dark"
                className="signup-btn"
                onClick={() => navigate("/register")}
              >
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavbarComp;
