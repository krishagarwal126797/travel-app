import React from 'react';
import '../home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const PopularDestinations = () => {
  const destinations = [
    { id: 1, name: "Beach Adventure", img: "/assets/img/h01.jpg" },
    { id: 2, name: "Mountain Hike", img: "/assets/img/h02.jpg" },
    { id: 3, name: "City Tours", img: "/assets/img/h03.jpg" },
    { id: 4, name: "Desert Safari", img: "/assets/img/h04.jpg" },
    { id: 5, name: "Cultural Heritage", img: "/assets/img/h05.jpg" },
    { id: 6, name: "Rainforest Trek", img: "/assets/img/h06.jpg" },
  ];

  const chunkSize = 3; // Number of images per slide
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
                      <div
                        className="card position-relative text-white"
                        style={{
                          backgroundImage: `url(${destination.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "300px",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="position-absolute top-0 end-0 m-3">
                          <i className="bi bi-heart-fill text-danger fs-3"></i>
                        </div>
                        <div
                          className="card-body d-flex flex-column justify-content-end"
                          style={{
                            background: "rgba(0, 0, 0, 0.5)", // Optional: dark overlay
                            borderRadius: "0 0 10px 10px", // Match the card's border radius
                          }}
                        >
                          <h5 className="card-title text-center">
                            {destination.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#destinationCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#destinationCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
