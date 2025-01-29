import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      text: "This platform helped me meet amazing travel buddies! The user-friendly interface and features make it exceptional.",
      author: "John Doe",
      company: "travelbuddy.com",
      image: "/assets/img/h03.jpg",
    },
    {
      text: "Planning tours has never been this easy. I found everything I needed to create a memorable journey.",
      author: "Jane Smith",
      company: "easytravel.com",
      image: "/assets/img/h03.jpg",
    },
    {
      text: "I’ve discovered incredible places through this site. Highly recommended for all wanderlust enthusiasts!",
      author: "Sam Wilson",
      company: "wanderlust.com",
      image: "/assets/img/h03.jpg",
    },
    {
      text: "Highly recommend this platform for travelers. It's a game changer for those looking for companions.",
      author: "Emily Davis",
      company: "exploreworld.com",
      image: "/assets/img/h03.jpg",
    },
    {
      text: "The best travel companion platform I've used! Great community and excellent features.",
      author: "Michael Brown",
      company: "travelhero.com",
      image: "/assets/img/h03.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section" style={{ background: "#00222E", color: "#fff", padding: "50px 0" }}>
      <div className="container">
        <h2 className="text-center mb-5">What Our Customers Are Saying About Us</h2>
        <Slider {...settings} className="testimonial-slider"> 
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-slide px-3" onClick={() => navigate("/testimonial")}>
              <div className="testimonial-card text-center p-4" style={{ background: "#fff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className="image-container mb-3">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="rounded-circle"
                    style={{ width: "100px", height: "100px", objectFit: "cover", border: "4px solid #FF9F43" }}
                  />
                </div>
                <blockquote className="blockquote">
                  <p style={{ fontSize: "1rem", minHeight: "100px", color:"#020d50" }}>
                    "{item.text}"
                  </p>
                  <footer className="blockquote-footer text-light mt-3">
                    {item.author} <cite>{item.company}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
