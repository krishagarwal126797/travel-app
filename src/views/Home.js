import React from 'react';
import './home.css';
import NavbarComp from './Navbar';
import HeroSection from './home_componant/HeroSection';
import FeaturedTours from './home_componant/FeaturedTours';
import HowItWorks from './home_componant/howitworks';
import Testimonials from './home_componant/testonomial';
import Footer from './footer';
import './darkmode.css';

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <HeroSection />
      <FeaturedTours />
      <HowItWorks />
      <Testimonials /> 
      <Footer />
    </div>
  );
};

export default Home;