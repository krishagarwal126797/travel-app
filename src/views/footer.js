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
              <h4 className="brand-title">Podia</h4>
            </div>
            <p className="brand-description">
              Create, distribute, and monetize your podcast all for free.
            </p>
          </Col>

          {/* Service Links */}
          <Col md={3} className="mb-4">
            <h5 className="footer-heading">Service</h5>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </Col>

          {/* Resources Links */}
          <Col md={3} className="mb-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li><a href="#apps">Apps</a></li>
              <li><a href="#developer">Developer</a></li>
              <li><a href="#integration">Integration</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-4">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                Podia@gmail.co
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                +1 (302) 951 - 4524
              </li>
              <li className="social-links">
                <a href="#facebook" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#twitter" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#instagram" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; 2022 Podia.com. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </section>
  );
};

export default Footer;
