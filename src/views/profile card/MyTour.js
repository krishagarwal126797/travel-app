import React from 'react'
import "./MyTour.css";
import NavbarComp from '../Navbar'
import Footer from '../footer'

const MyTour = () => {
  return (
    <div>
      <NavbarComp />
      <section className='mytour'>

        <header className="header">
          <h1>My Tours</h1>
          <p>Welcome to My Tours! Explore the world with us.</p>
        </header>

        <section className="project-list">
    <h2>My Tours</h2>
    <div className="card-container">
        <div className="card">
            <img src="/assets/img/h12.jpg" alt="Tour to Paris" />
            <h3>Tour to Paris</h3>
            <p>Explore the city of lights and love.</p>
        </div>
        <div className="card">
            <img src="/assets/img/h12.jpg" alt="Mountain Adventure" />
            <h3>Mountain Adventure</h3>
            <p>Experience the thrill of mountain trekking.</p>
        </div>
        <div className="card">
            <img src="/assets/img/h12.jpg" alt="Beachside Retreat" />
            <h3>Beachside Retreat</h3>
            <p>Relax and unwind by the beach.</p>
        </div>
        <div className="card">
            <img src="/assets/img/h12.jpg" alt="Safari Experience" />
            <h3>Safari Experience</h3>
            <p>Get close to wildlife in their natural habitat.</p>
        </div>
    </div>
</section>
{/* Project List Section */}
<section className="project-list">
            <h2>Available Tours</h2>
            <div className="tours">
              {[
                {
                  id: 1,
                  destination: "Paris, France",
                  dates: "Jan 20 - Jan 25",
                  spots: 5,
                  img: "/assets/img/h20.jpg",
                },
                {
                  id: 2,
                  destination: "Tokyo, Japan",
                  dates: "Feb 10 - Feb 15",
                  spots: 8,
                  img: "/assets/img/h20.jpg",
                },
                {
                  id: 3,
                  destination: "New York, USA",
                  dates: "Mar 5 - Mar 10",
                  spots: 3,
                  img: "/assets/img/h02.jpg",
                },
              ].map((tour) => (
                <div key={tour.id} className="tour-card">
                  <div className="tour-card-image">
                    <img src={tour.img} alt={tour.destination} />
                  </div>
                  <div className="tour-card-content">
                    <h3>{tour.destination}</h3>
                    <p>Dates: {tour.dates}</p>
                    <p>Available Spots: {tour.spots}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>


      </section>
      <Footer />
    </div>
  )
}

export default MyTour