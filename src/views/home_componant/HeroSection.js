import React from "react";
import "./herosection.css";

const Herosection = () => {
  return (
    <section className="herosection">
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="content">
          <h1>
            Cabin In The Woods But In <br></br><span>A Good Way!</span>
          </h1>
          <p>
            Now you can enjoy camping anywhere and anytime, and of course, it's safe with us.
          </p>
          <button>Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-grid">
          <div className="feature-item">
            <h2>10</h2>
            <p>Years of Experience</p>
          </div>
          <div className="feature-item">
            <h2>1K+</h2>
            <p>Camping Destinations</p>
          </div>
          <div className="feature-item">
            <h2>8K</h2>
            <p>Happy Customers</p>
          </div>
          <div className="feature-item">
            <h2>4.2</h2>
            <p>Overall Rating</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Herosection;
