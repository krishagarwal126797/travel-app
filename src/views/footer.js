import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
    <footer className="custom-footer">
      <Container>
        {/* Subscribe Section */}
        <Row className="subscribe-section mb-5">
          <Col className="text-center">
            <h2 className="subscribe-title">Subscribe Newsletter</h2>
            <Form className="subscribe-form d-flex justify-content-center">
              <div className="input-group">
                <span className="input-group-text subscribe-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="subscribe-input"
                />
              </div>
              <Button className="subscribe-button">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* Footer Main Section */}
        <Row className="footer-content">
          {/* Brand Section */}
          <Col md={3} className="mb-4">
            <div className="brand-logo">
              <div className="brand-icon"></div>
              <h4 className="brand-title">Travel Tinder</h4>
            </div>
            <p className="brand-description">
            Explore breathtaking destinations, create unforgettable memories, and experience ultimate adventures with your friends—only on our travel website!
            </p>
          </Col>

          {/* Service Links */}
          <Col md={3} className="mb-4">
            <h5 className="footer-heading">Service</h5>
            <ul className="footer-links">
              {/* <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Features</a></li>
              <li><a href="/blog">Blog</a></li> */}
              <li><a href="/createtour">Create Tour</a></li>
              <li><a href="/tourlist">Tour List</a></li>
              <li><a href="/mytour">My Tour</a></li>
              <li><a href="/destination">Destination</a></li>
              <li><a href="/tourdetails">Tour Details</a></li>
              <li><a href="/SaveDestination">Save Destination</a></li>
            </ul>
          </Col>

          {/* Resources Links */}
          <Col md={3} className="mb-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              {/* <li><a href="#apps">Apps</a></li>
              <li><a href="#developer">Developer</a></li>
              <li><a href="#integration">Integration</a></li>
              <li><a href="pricing">Pricing</a></li> */}
              <li><a href="/blog">Blog </a></li>
              <li><a href="/testimonial">Testimonials </a></li>
              <li><a href="/review">Reviews </a></li>
              <li><a href="/reviewform">Review Form</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/settings">Settings</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-4">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                kdktech1708@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                +91 (789) 559 - 1694
              </li>
              <li className="social-links">
                <a href="#facebook" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#twitter" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/kdk_tech_solution?igsh=MTAxejMyN29wdnUwaQ==" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; developed by @kdk_tech_solution.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </section>
  );
};

export default Footer;
