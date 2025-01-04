import React from "react";
import { styled } from "@mui/material";

import "./Footer.css";

const Footer = () => {
  return (
    <Wrapper>
      {/* <section className="contact-short">
          <div className="grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to="/home">
            <button>Get Started</button>
            </NavLink>
          </div>
          </div>
        </section> */}


      {/* footer section */}


      <footer>
        <div class="footer-top">
          <div class="social-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-google"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-vk"></i></a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="column">
            <h3>Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div class="column">
            <h3>DOOGEE</h3>
            <ul>
              <li><a href="#">Teardown</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
          <div class="column">
            <h3>Service</h3>
            <ul>
              <li><a href="#">Compare</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Bug Report</a></li>
            </ul>
          </div>
          <div class="column">
            <h3>Activity</h3>
            <ul>
              <li><a href="#">Influencers</a></li>
              <li><a href="#">Affiliate</a></li>
              <li><a href="#">Co-branding</a></li>
              <li><a href="#">Honor</a></li>
              <li><a href="#">Giveaway</a></li>
            </ul>
          </div>
          <div class="newsletter">
            <h3>Newsletter Subscription</h3>
            <div class="subscribe">
              <input type="email" placeholder="Subscribe to our newsletter" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <p class="copyright">Copyright© 2023 DOOGEE. All rights reserved.</p>
      </footer>

    </Wrapper>

  );
};

const Wrapper = styled("section")``;

export default Footer;
