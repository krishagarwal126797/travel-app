import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./review.css"; 

const ReviewsPage = () => {
  return (
    <section className="review_Form">
    <div className="reviews-page">
      {/* Customer Reviews Section */}
      <section className="review-section py-5">
        <div className="container">
          <h2 className="section-title mb-4">Customer Reviews</h2>
          <div className="reviews">
            <div className="review mb-4">
              <div className="review-header d-flex justify-content-between">
                <span className="user-name fw-bold">John Doe</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="review-text">Great experience! Highly recommended.</p>
            </div>

            <div className="review mb-4">
              <div className="review-header d-flex justify-content-between">
                <span className="user-name fw-bold">Jane Smith</span>
                <span className="stars">⭐⭐⭐⭐</span>
              </div>
              <p className="review-text">Good service, but delivery was slightly delayed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
};

export default ReviewsPage;