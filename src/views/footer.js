import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // Hook for navigation

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
                <li onClick={() => navigate("/createtour")}>Create Tour</li>
                <li onClick={() => navigate("/tourlist")}>Tour List</li>
                <li onClick={() => navigate("/mytour")}>My Tour</li>
                <li onClick={() => navigate("/destination")}>Destination</li>
                <li onClick={() => navigate("/tourdetails")}>Tour Details</li>
                <li onClick={() => navigate("/SaveDestination")}>Save Destination</li>
              </ul>
            </Col>

            {/* Resources Links */}
            <Col md={3} className="mb-4">
              <h5 className="footer-heading">Resources</h5>
              <ul className="footer-links">
                <li onClick={() => navigate("/blog")}>Blog</li>
                <li onClick={() => navigate("/testimonial")}>Testimonials</li>
                <li onClick={() => navigate("/review")}>Reviews</li>
                <li onClick={() => navigate("/privacy")}>Privacy Policy</li>
                <li onClick={() => navigate("/terms")}>Terms of Service</li>
                <li onClick={() => navigate("/pricing")}>Pricing</li>
                <li onClick={() => navigate("/settings")}>Settings</li>
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
                  <span className="social-icon" onClick={() => navigate("/facebook")}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span className="social-icon" onClick={() => navigate("/twitter")}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <a
                    href="https://www.instagram.com/kdk_tech_solution?igsh=MTAxejMyN29wdnUwaQ=="
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
