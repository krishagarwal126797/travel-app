import React from 'react';
import '../home.css'

const FeaturedTours = () => {
  return (
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
  );
};

export default FeaturedTours;
