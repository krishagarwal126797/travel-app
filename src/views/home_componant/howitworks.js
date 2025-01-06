import React from 'react';
import '../home.css';

const HowItWorks = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">How Does It Work?</h2>
      <div className="row text-center mt-4">
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100" alt="Plan Icon" />
          <h5 className="mt-3">Plan a Tour</h5>
          <p>Post your idea and invite others to join.</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100" alt="Browse Icon" />
          <h5 className="mt-3">Browse Options</h5>
          <p>Find tours that fit your schedule.</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100" alt="Join Icon" />
          <h5 className="mt-3">Join and Explore</h5>
          <p>Meet new friends and start your adventure.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
