import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <section className="about">
            <NavbarComp />
        <div className="about-us-container">
            <div className="container">
                {/* Hero Section */}
                <motion.div
                    className="hero-section row align-items-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="col-lg-6 text-section">
                        <h5>ABOUT US</h5>
                        <h1>
                            Helping travelers discover <span className="highlight">exceptional</span> journeys and experiences.

                        </h1>
                        <p>
                            Travel Tinder is the leading platform for discovering and planning unforgettable journeys.
                            Millions of travelers and adventure seekers use Travel Tinder’s AI-powered recommendations,
                            personalized trip planning, and real-time travel insights to explore new destinations, connect
                            with like-minded travelers, and create memorable experiences.
                        </p>

                        <button className="btn btn-primary">Sign Up for Free</button>
                    </div>
                    <div className="col-lg-6 img-section">
                        <img
                            src="/assets/img/about.jpg"
                            alt="Hero"
                            className="hero-image"
                        />
                    </div>
                </motion.div>

                {/* AI-Powered Section */}
                <motion.div
                    className="ai-powered-section row align-items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="col-lg-12 text-center">
                        <h2>
                            Built for <span className="highlight">explorers</span> seeking unforgettable journeys.
                        </h2>

                        <p>
                            We believe in the power of travel to connect people, inspire adventures,
                            and help explorers create unforgettable experiences.

                        </p>
                    </div>
                </motion.div>

                {/* Statistics Section */}
                <motion.div
                    className="statistics-section row text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="col-lg-4">
                        <h3>300+</h3>
                        <p>Since its inception, Travel Tinder has grown from a small idea to a thriving community of explorers.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h3>12 million+</h3>
                        <p>Over 12 million travelers use Travel Tinder to explore new destinations and plan their journeys.</p>

                    </div>
                    <div className="col-lg-4">
                        <h3>160,000+</h3>
                        <p>Over 160,000 travelers trust Travel Tinder to discover their next adventure.</p>

                    </div>
                </motion.div>
            </div>
        </div>
        <Footer />
        </section>
    );
};

export default AboutUs;
