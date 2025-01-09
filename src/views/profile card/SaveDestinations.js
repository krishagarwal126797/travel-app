// import React from 'react'
import React, { useState } from 'react';
import "./SaveDestinations.css";
import NavbarComp from '../Navbar'
import Footer from '../footer'

const SaveDestinations = () => {

  const destinations = [
    { id: 1, name: "Paris", description: "The city of light and love.", img: "/assets/img/h16.jpg" },
    { id: 2, name: "Bali", description: "A tropical paradise.", img: "/assets/img/h17.jpg" },
    { id: 3, name: "New York", description: "The city that never sleeps.", img: "/assets/img/h18.jpg" },
    { id: 4, name: "Tokyo", description: "A perfect blend of tradition and technology.", img: "/assets/img/h19.jpg" },
  ];

  const features = [
    { id: 1, title: "View Destination Details", description: "Get in-depth information about your favorite destinations.", icon: "🌍" },
    { id: 2, title: "Plan a Tour", description: "Easily plan and organize your next adventure.", icon: "🗺️" },
    { id: 3, title: "Share with Friends", description: "Share your favorite destinations with your friends.", icon: "🤝" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I add a destination to my saved list?",
      answer: "You can save a destination by clicking the 'Save' button on the destination's detail page.",
    },
    {
      question: "Can I share my saved destinations with friends?",
      answer: "Yes, you can share your saved destinations by using the 'Share' option on your saved list.",
    },
    {
      question: "How can I remove a destination from my saved list?",
      answer: "Simply click the 'Remove' button next to the destination on your saved list.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  
  return (
    <div>
      <NavbarComp />
      <section className='SaveDestinationss'>

      {/* header section */}
      <section className="header-section">
      <div className="header-content">
        <h1 className="header-title">Welcome to Your Saved Destinations</h1>
        <p className="header-description">
          Explore and manage your favorite destinations, all in one place!
        </p>
      </div>
      <img
        src="/assets/img/h02.jpg" // Replace with your header image URL
        alt="Travel Destinations"
        className="header-image"
      />
    </section>
    
    {/* gallery section */}
    <section className="gallery-section">
      <h2 className="gallery-title">Your Saved Destinations</h2>
      <div className="gallery-grid">
        {destinations.map((destination) => (
          <div className="gallery-item" key={destination.id}>
            <img
              src={destination.img}
              alt={destination.name}
              className="gallery-image"
            />
            <div className="gallery-info">
              <h3 className="gallery-destination">{destination.name}</h3>
              <p className="gallery-description">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* feature section */}
    <section className="features-section">
      <h2 className="features-title">Explore Our Key Features</h2>
      <div className="features-list">
        {features.map((feature) => (
          <div className="feature-item" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA section */}
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Plan Your Next Adventure?</h2>
        <p className="cta-description">
          Explore new destinations or start planning your next tour from your saved list. Adventure awaits!
        </p>
        <div className="cta-buttons">
          <button className="cta-button explore-btn">Explore Destinations</button>
          <button className="cta-button plan-btn">Plan a Tour</button>
        </div>
      </div>
      <img
        src="/assets/img/h20.jpg" // Replace with your CTA background image URL
        alt="Adventure Background"
        className="cta-background"
      />
    </section>

    {/* FAQ section */}
    
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>

      </section>
      <Footer />
    </div>
  )
}

export default SaveDestinations