import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./review.css"; 

const Reviewsform = () => {
  return (
    <section className="review_Form">
    <div className="reviews-page">
      {/* Customer Reviews Section */}
      <section className="review-section py-5">
        <div className="container">
          <h2 className="section-title mb-4">Customer Review Form</h2>
          <form className="review-form mt-5">
            <h3 className="mb-3">Write a Review</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="rating" className="form-label">Rating</label>
              <select id="rating" className="form-select">
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="review" className="form-label">Your Review</label>
              <textarea id="review" className="form-control" rows="4" placeholder="Write your review here" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit Review</button>
          </form>
        </div>
      </section>
    </div>
    </section>
  );
};

export default Reviewsform;