import React from 'react';
import '../home.css';

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
