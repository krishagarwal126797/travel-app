import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaPlay, FaTag, FaInfoCircle, FaMoon, FaSun,FaHome,FaCaretDown, FaMapMarkerAlt } from "react-icons/fa";
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Home from "./Home";

const NavbarComp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <Navbar.Brand href="#" className="brand-section">
          <div className="brand-icon"><img src="/assets/img/travel-tinder.png" style={{width:'50px',height:'50px'}}/></div>
          <span className={`brand-name ${darkMode ? "brandname-dark" : "brandname-light"}`}>Travel Tinder</span>
        </Navbar.Brand>

        {/* Responsive Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className={`nav-buttons ${darkMode ? "navbuttons-dark" : "navbuttons-light"}`}>
          <Link to="/home">
            <Button  className="nav-btn">
              <FaHome className="icon" />
              Home
            </Button>
            </Link>
            <Button  className="nav-btn">
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
          <DropdownItem href="#our-story">Our Story</DropdownItem>
          <DropdownItem href="#team">Team</DropdownItem>
          <DropdownItem href="#careers">Careers</DropdownItem>
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
            <Link to="/Login">
                <Button variant="dark" className="login-btn">
                    Login
                </Button>
            </Link>
        </Nav>
          <Nav>
          <Link to="/register">
            <Button variant="dark" className="signup-btn">
              Sign up
            </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
};

export default NavbarComp;
