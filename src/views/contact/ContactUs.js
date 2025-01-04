import React from "react";
import "./ContactUs.css";
import { Navbar } from "react-bootstrap";
import NavbarComp from "../Navbar";

const Contact = () => {
  return (
    <div>
      <NavbarComp />
      <MainHeader />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

// const Header = () => (
//   // <header>
//   //   <nav>
//   //     <ul className="navbar">
//   //       <li><a href="#home">Home</a></li>
//   //       <li><a href="#about">About</a></li>
//   //       <li><a href="#services">Services</a></li>
//   //       <li><a href="#contact">Contact</a></li>
//   //     </ul>
//   //   </nav>
//   // </header>
// );

const MainHeader = () => (
  <div className="header">
    <h1>Contact Us</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>
);

const ContactSection = () => (
  <div className="contact-container">
    <ContactInfo />
    <ContactForm />
  </div>
);

const ContactInfo = () => (
  <div className="contact-info">
    <InfoBox
      icon="location.png"
      title="Address"
      content="4671 Sugar Camp Road, Owatonna, Minnesota, 55060"
    />
    <InfoBox
      icon="phone-call.png"
      title="Phone"
      content="571-457-2323"
    />
    <InfoBox
      icon="mail.png"
      title="Email"
      content="name@example.com"
    />
  </div>
);

const InfoBox = ({ icon, title, content }) => (
  <div className="info-box">
    <img src={icon} alt={`${title} Icon`} />
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const ContactForm = () => (
  <div className="contact-form">
    <h3>Send Message</h3>
    <form action="submit-form.php" method="POST">
      <input type="text" name="fullName" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Type your Message..." required />
      <button type="submit">Send</button>
    </form>
  </div>
);

const CTASection = () => (
  <section className="cta-section">
    <h2>Join Our Community</h2>
    <p>Follow us on social media for updates and special offers!</p>
    <div className="social-links">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 MyCompany. All rights reserved.</p>
  </footer>
);

export default Contact;
