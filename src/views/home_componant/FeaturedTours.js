import React from "react";
import "../home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const PopularDestinations = () => {
  const destinations = [
    { id: 1, name: "Rialto Bridge", img: "/assets/img/h01.jpg", location: "VENICE, ITALY", price: "$299", rating: 4.9, reviews: "1.7k Reviews" },
    { id: 2, name: "Mountain Hike", img: "/assets/img/h02.jpg", location: "SWISS ALPS", price: "$499", rating: 4.8, reviews: "2.1k Reviews" },
    { id: 3, name: "City Tours", img: "/assets/img/h03.jpg", location: "NEW YORK, USA", price: "$199", rating: 4.7, reviews: "3.5k Reviews" },
  ];

  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < destinations.length; i += chunkSize) {
    slides.push(destinations.slice(i, i + chunkSize));
  }

  return (
    <section className="popularDestination">
      <div className="container my-5">
        <h2 className="text-center">Popular Destinations</h2>
        <div
          id="destinationCarousel"
          className="carousel slide mt-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {slide.map((destination) => (
                    <div className="col-md-4" key={destination.id}>
                      <div className="card destination-card">
                        <div
                          className="card-img-top"
                          style={{
                            backgroundImage: `url(${destination.img})`,
                          }}
                        >
                          <span className="price-tag">{destination.price}</span>
                        </div>
                        <div className="card-body">
                          <h6 className="location-text">{destination.location}</h6>
                          <h5 className="card-title">{destination.name}</h5>
                          <div className="ratings">
                            <span className="star-rating">{destination.rating}</span>
                            <span className="review-count">({destination.reviews})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Centered See More Button */}
        <div className="text-center mt-4">
          <button className="btn see-more-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
