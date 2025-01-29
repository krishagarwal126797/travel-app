import React from "react";
import NavbarComp from "../Navbar";
import Footer from "../footer";
import "./testimonial.css";
import { useNavigate } from "react-router-dom";
import { use } from "react";

// Testimonials Data
const testimonialsData1 = [
  {
    name: "John Doe",
    photo: "/assets/img/createtour2.jpg",
    text: "This was the most amazing experience of my life! Highly recommend this tour service.",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    photo: "/assets/img/createtour2.jpg",
    text: "An unforgettable journey! Everything was perfect and well-organized.",
    location: "London, UK",
  },
];

const testimonialsData2 = [
  {
    name: "Emily Johnson",
    photo: "/assets/img/h01.jpg",
    text: "I’ve never felt so cared for on a trip. The team made every moment special.",
    location: "Sydney, Australia",
  },
  {
    name: "Michael Brown",
    photo: "/assets/img/createtour2.jpg",
    text: "From start to finish, the experience was seamless and delightful!",
    location: "Toronto, Canada",
  },
];

// Team Data (New Section)
const teamData = [
  {
    name: "Alice Walker",
    photo: "/assets/img/createtour2.jpg",
    destination: "Paris, France",
    description: "Alice is the group's organizer, ensuring everyone stays on track and making plans for exciting activities.",
  },
  {
    name: "Mark Johnson",
    photo: "/assets/img/profile.jpg",
    destination: "Paris, France",
    description: "Mark is the photographer of the group, capturing every beautiful moment of the journey.",
  },
  {
    name: "Sarah Lee",
    photo: "/assets/img/blog5.avif",
    destination: "Paris, France",
    description: "Sarah is the foodie of the group, always on the lookout for the best restaurants and local cuisines.",
  },
  {
    name: "David Brown",
    photo: "/assets/img/blog7.webp",
    destination: "Paris, France",
    description: "David is the adventurer, leading the group to explore hidden gems and offbeat destinations.",
  },
];

const TeamMemberCard = ({ photo, name, destination, description }) => {
  return (
    <div className="team-card">
      <img src={photo} alt={`${name}'s photo`} className="team-photo" />
      <h3 className="team-name">{name}</h3>
      <p className="team-destination">Destination: {destination}</p>
      <p className="team-description">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ photo, name, text, location }) => {
  return (
    <div className="testimonial-card">
      <img src={photo} alt={`${name}'s photo`} className="testimonial-photo" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-location">{location}</p>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
};

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Share Your Experience or Start Your Adventure</h2>
        <p>
          Have a story to share? We'd love to hear about your amazing travel experiences! 
          Or, if you're ready for your next adventure, sign up today and let us help you create unforgettable memories.
        </p>
        <div className="cta-buttons">
          <button className="cta-button share-button" onClick={() => navigate("/reviewform")}>Share Your Experience</button>
          <button className="cta-button sign-up-button" onClick={() => navigate("/createtour")}>Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <div>
      <NavbarComp />
    <div className="testimonials-page">
      {/* Header Section */}
      <header className="testimonial-header">
        <h1>What Our Customers Say</h1>
        <p>
          Discover the positive experiences our customers have shared about their unforgettable tours. 
          Your adventure awaits!
        </p>
      </header>

      {/* First Testimonial Section */}
      <section className="testimonials-section">
        <h2>Our Happy Travelers</h2>
        <div className="testimonials-grid">
          {testimonialsData1.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Second Testimonial Section */}
      <section className="testimonials-section alternate">
        <h2>More Stories from Our Customers</h2>
        <div className="testimonials-grid">
          {testimonialsData2.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Travelers Heading to Paris</h2>
        <p>
          These travelers are part of a group heading to Paris, France. They’ve come together to make their journey even more memorable.
        </p>
        <div className="team-grid">
          {teamData.map((teamMember, index) => (
            <TeamMemberCard key={index} {...teamMember} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      <Footer />

    </div>
    </div>
  );
};

export default Testimonials;
