import React from 'react';
import './home.css';
import NavbarComp from './Navbar';
const Home = () => {
  return (
    <div>
      {/* Header */}
     <NavbarComp/>

      {/* Hero Section */}
      <div className="hero text-center text-white">
        <h1>Plan Tours. Meet New Friends. Explore Together!</h1>
        <p>Find the perfect tour or create your own adventure.</p>
        <div className="d-flex justify-content-center mt-4">
          <a href="#" className="btn btn-primary me-2">Find a Tour</a>
          <a href="#" className="btn btn-secondary">Create a Tour</a>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="container my-5">
        <h2 className="text-center">Explore Popular Tours</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Tour" />
              <div className="card-body">
                <h5 className="card-title">Beach Adventure</h5>
                <p className="card-text">Enjoy the sun and sand at our tropical beach tours.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Tour" />
              <div className="card-body">
                <h5 className="card-title">Mountain Hike</h5>
                <p className="card-text">Experience breathtaking views from mountain tops.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Tour" />
              <div className="card-body">
                <h5 className="card-title">City Tours</h5>
                <p className="card-text">Discover the best urban destinations around the world.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container my-5">
        <h2 className="text-center">How Does It Work?</h2>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/100" alt="Icon" />
            <h5 className="mt-3">Plan a Tour</h5>
            <p>Post your idea and invite others to join.</p>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/100" alt="Icon" />
            <h5 className="mt-3">Browse Options</h5>
            <p>Find tours that fit your schedule.</p>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/100" alt="Icon" />
            <h5 className="mt-3">Join and Explore</h5>
            <p>Meet new friends and start your adventure.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial">
        <div className="container">
          <h2 className="text-center">Hear from Fellow Travelers</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"This platform helped me meet amazing travel buddies!"</p>
                <footer className="blockquote-footer">John Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Planning tours has never been this easy."</p>
                <footer className="blockquote-footer">Jane Smith</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"I’ve discovered incredible places through this site."</p>
                <footer className="blockquote-footer">Sam Wilson</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <p>&copy; 2024 Tour Planner. All Rights Reserved.</p>
          <p>
            <a href="#">About Us</a> | <a href="#">Contact Us</a> | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
          </p>
          <p>
            Follow us: 
            <a href="#">Facebook</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
