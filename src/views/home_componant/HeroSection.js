import React from "react";
import "./herosection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Herosection = () => {
  // Using the useInView hook to detect when the stats section is in view
  const { ref: statsRef, inView } = useInView({
    triggerOnce: true, // Count up only once when in view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <section className="herosection py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-md-6 text-left">
            <h1 className="hero-title">
              THE ADVENTURE <br />
              BEGINS <span className="highlight">HERE</span>
            </h1>
            <p className="hero-description">
              Check off the ultimate global travel checklist with your travel partner! Make unforgettable experiences.
            </p>
            <div className="search-bar mt-4">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Where are you going now?"
              />
              <button className="btn btn-primary search-btn">Search</button>
            </div>
            <div className="stats mt-5" ref={statsRef}>
              <span className="stat-item">
                <strong>
                  {inView && <CountUp end={55} duration={5} />}+
                </strong>{" "}
                Destinations
              </span>
              <span className="stat-item">
                <strong>
                  {inView && <CountUp end={200} duration={5} />}+
                </strong>{" "}
                Tourists
              </span>
              <span className="stat-item">
                <strong>
                  {inView && <CountUp end={100} duration={5} />}+
                </strong>{" "}
                Hotels
              </span>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="image-stack">
              <img
                src="/assets/img/h06.jpg" 
                alt="Plane"
                className="capsule-image top"
              />
              <img
                src="/assets/img/h01.jpg" 
                alt="Travel"
                className="capsule-image middle"
              />
              <img
                src="/assets/img/h04.jpg" 
                alt="Hiker"
                className="capsule-image bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
