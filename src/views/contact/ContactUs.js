import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";

const ContactForm = () => (
  <div className="contact-form-wrapper d-flex align-items-center justify-content-center mt-5">
    {/* Left Side: Image */}
    <div className="form-image">
      <img
        src="/assets/img/h18.jpg"
        alt="Contact Illustration"
        className="img-fluid rounded-image"
      />
    </div>

    {/* Right Side: Form */}
    <div className="contact-form ms-4">
      <h3 className="form-title">Send Message</h3>
      <form action="submit-form.php" method="POST" className="form">
        <div className="mb-3">
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Full Name"
            required
            aria-label="Full Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
            aria-label="Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            placeholder="Type your Message..."
            rows="4"
            required
            aria-label="Message"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Send
        </button>
      </form>
    </div>
  </div>
);

const ContactUs = () => {
  const [showMoreNumbers, setShowMoreNumbers] = useState(false);

  const handleToggleNumbers = () => {
    setShowMoreNumbers((prev) => !prev);
  };

  return (
    
    <section className="contactus">
      <NavbarComp />

      <div className="contact-us">
        <div className="container">
          {/* Top Section */}
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center">
              <h1 className="title">
                Contact Us About <span>Travel Tinder</span>
              </h1>
              <p className="description">
                Explore breathtaking destinations, create unforgettable memories,
                and experience ultimate adventures with your friends—only on our
                travel website!
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="image-wrapper">
                <img
                  src="/assets/img/contact.jpg"
                  alt="Customer Support"
                  className="img-fluid rounded-image"
                />
              </div>
            </div>
          </div>

          {/* Contact Options Section */}
          <div className="row text-center mt-5">
            <div className="col-md-4">
              <div className="contact-card">
                <i className="fas fa-phone-alt icon"></i>
                <h4 className="card-title">Call us directly</h4>
                <p className="card-text">+44 20 3514 0663</p>

                {/* Show More Local Numbers */}
                {showMoreNumbers && (
                  <ul className="additional-numbers">
                    <li>+1 123-456-7890</li>
                    <li>+1 987-654-3210</li>
                    <li>+1 456-789-0123</li>
                  </ul>
                )}

                <a
                  href="#"
                  className="card-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggleNumbers();
                  }}
                  aria-label="Toggle more local numbers"
                >
                  {showMoreNumbers ? "See less local numbers" : "See more local numbers"}
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <i className="fas fa-comments icon"></i>
                <h4 className="card-title">Chat with our travel experts</h4>
                <button className="btn btn-primary" aria-label="Chat with Sales">
                  Chat with experts
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <i className="fas fa-calendar-alt icon"></i>
                <h4 className="card-title">Schedule a travel consultation</h4>
                <button className="btn btn-primary" aria-label="Get a Demo">
                Book a Demo
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;
