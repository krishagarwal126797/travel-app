import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaMoon, FaSun, FaHome, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavbarComp = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Listen for "Ctrl + D" or "Shift + D" keypress to toggle dark mode
  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.ctrlKey || event.shiftKey) && event.key.toLowerCase() === "d") {
        event.preventDefault(); // Prevent default action (if any)
        toggleDarkMode();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <section className="NavbarComp">
      <Navbar expand="lg" className={`custom-navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
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
                <FaHome className="icon" /> Home
              </Button>
              <Button className="nav-btn" onClick={() => navigate("/about")}>
                <FaInfoCircle className="icon" /> About Us
              </Button>
              <Button className="nav-btn" onClick={() => navigate("/blogpost")}>
                Blogs
              </Button>
              <Button className="nav-btn" onClick={() => navigate("/tourlist")}>
                Tours
              </Button>
            </Nav>

            {/* Dark Mode Toggle */}
            <Button onClick={toggleDarkMode} className="dark-mode-toggle ms-3">
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>

            {/* Login & Signup Buttons */}
            <Nav>
              <Button variant="dark" className="login-btn" onClick={() => navigate("/login")}>
                Login
              </Button>
            </Nav>
            <Nav>
              <Button variant="dark" className="signup-btn" onClick={() => navigate("/register")}>
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
