import React from 'react';
import '../home.css'

const HeroSection = () => {
  return (
    <div className="hero text-center text-white">
      <h1>Plan Tours. Meet New Friends. Explore Together!</h1>
      <p>Find the perfect tour or create your own adventure.</p>
      <div className="d-flex justify-content-center mt-4">
        <a href="#" className="btn btn-primary me-2">Find a Tour</a>
        <a href="#" className="btn btn-secondary">Create a Tour</a>
      </div>
    </div>
  );
};

export default HeroSection;
