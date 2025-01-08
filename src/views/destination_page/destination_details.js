import React from "react";
import NavbarComp from "../Navbar";
import Footer from "../footer";
import "./destination_details.css";

const DestinationDetailsPage = () => {
  return (
    <div>
      <NavbarComp />
      <section className="destination-details">
        <div className="destination-details-page">
          {/* Portfolio Item Header Section */}
          <section className="portfolio-header">
            <img src="/assets/img/h16.jpg" alt="Destination" />
            <div className="header-content">
              <h1>Paris</h1>
              <p>
                The city of lights and love, offering world-class art, fashion,
                and food.
              </p>
            </div>
          </section>

          {/* Project Item Body Section */}
          <section className="project-body">
            <h2>About Paris</h2>
            <img
              src="/assets/img/h17.jpg"
              alt="About Paris"
              className="section-image"
            />
            <p>
              Paris, the capital of France, is renowned for its stunning
              architecture, rich culture, and iconic landmarks. From the Eiffel
              Tower to the Louvre Museum, Paris offers a plethora of experiences
              for every traveler. Enjoy romantic strolls along the Seine River,
              indulge in gourmet French cuisine, and explore vibrant
              neighborhoods like Montmartre and Le Marais.
            </p>
          </section>

          {/* Feature Section 1 */}
          <section className="feature-section">
            <h3>Must-See Attraction: Eiffel Tower</h3>
            <img
              src="/assets/img/h18.jpg"
              alt="Eiffel Tower"
              className="section-image"
            />
            <p>
              No visit to Paris is complete without a trip to the Eiffel Tower.
              Ascend to the top for panoramic views of the city and capture
              unforgettable memories.
            </p>
          </section>

          {/* Feature Section 2 */}
          <section className="feature-section">
            <h3>Cultural Highlights: Art and Museums</h3>
            <img
              src="/assets/img/h19.jpg"
              alt="Louvre Museum"
              className="section-image"
            />
            <p>
              Paris is home to some of the world's best museums, including the
              Louvre and Musée d'Orsay. Dive into art, history, and culture in
              every corner of the city.
            </p>
          </section>

          {/* Feature Section 3 */}
          <section className="feature-section">
            <h3>Local Cuisine: A Culinary Paradise</h3>
            <img
              src="/assets/img/h20.jpg"
              alt="French Cuisine"
              className="section-image"
            />
            <p>
              Indulge in French delicacies like croissants, escargot, and coq au
              vin. Don't forget to try the exquisite patisseries and
              world-famous wines.
            </p>
          </section>

          {/* Testimonial Section */}
          <section className="testimonial-section">
            <h2>What Travelers Say</h2>
            <div className="testimonial">
              <p>
                "Paris is simply magical! From the breathtaking landmarks to the
                delicious food, every moment was unforgettable." - Sarah L.
              </p>
            </div>
            <div className="testimonial">
              <p>
                "A perfect destination for art and culture lovers. The museums
                and galleries are incredible!" - Michael R.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits-section">
            <h2>Why Visit Paris?</h2>
            <ul>
              <li>Affordable travel options for every budget.</li>
              <li>
                Easy accessibility with international flights and trains.
              </li>
              <li>
                Unique experiences, from fashion shows to historical tours.
              </li>
            </ul>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <h2>Destination Stats</h2><br></br>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>20M+</h3>
                <p>Annual Visitors</p>
                <img
                  src="/assets/img/h01.jpg"
                  alt="Visitors Stats"
                  className="stat-image"
                />
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Top-Rated Attractions</p>
                <img
                  src="/assets/img/h16.jpg"
                  alt="Attractions Stats"
                  className="stat-image"
                />
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Gourmet Restaurants</p>
                <img
                  src="/assets/img/h16.jpg"
                  alt="Restaurants Stats"
                  className="stat-image"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <h2>Ready to Explore Paris?</h2>
            <img
              src="/assets/img/h02.jpg"
              alt="Explore Paris"
              className="cta-image"
            />
            <p>
              Add Paris to your tour or join an existing group tour to this
              magical city!
            </p>
            <button className="cta-button">Plan Your Trip</button>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationDetailsPage;
