import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i>Facebook</a>
          <a href="#"><i className="fa fa-twitter"></i>Twitter</a>
          <a href="#"><i className="fa fa-instagram"></i>Instagram</a>
          <a href="#"><i className="fa fa-youtube"></i>Youtube</a>
          <a href="#"><i className="fa fa-pinterest"></i>Pinterest</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Travel Tider</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#partners">Our Partners</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Explore</h3>
          <ul>
            <li><a href="#adventures">Adventure Tours</a></li>
            <li><a href="#beaches">Beach Holidays</a></li>
            <li><a href="#wildlife">Wildlife Safaris</a></li>
            <li><a href="#cultural">Cultural Experiences</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with the latest travel deals and tips.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright">
          &copy; 2023 Travel Tider. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
