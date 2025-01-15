import React from 'react';
import NavbarComp from '../Navbar';
import Footer from '../footer';
import './Blog.css'; // Assuming styles.css is renamed to App.css for consistency

function Blog() {
  return (
    <section className='Blog'>
    <div>
      {/* Navbar */}
      <NavbarComp />
      {/* Header Section */}
      <header id="home">
        <div className="header-content">
          <h1 className="animate-text">Welcome to Vibrant Blog</h1>
          <p>Your gateway to amazing travel tips, destination highlights, and user experiences!</p>
        </div>
      </header>

      {/* Featured Blog Section */}
      <section id="featured">
        <h2>Featured Blogs</h2>
        <div className="carousel">
          {[
            { src: '/assets/img/blog1.jpg', title: 'Top 10 Travel Destinations', desc: 'Explore the most beautiful places in the world.' },
            { src: '/assets/img/blog1.jpg', title: 'Tips for Budget Travelers', desc: 'How to travel without breaking the bank.' },
            { src: '/assets/img/blog3.avif', title: 'Top 10 Travel Destinations', desc: 'Explore the most beautiful places in the world.' },
            { src: '/assets/img/blog4.avif', title: 'Tips for Budget Travelers', desc: 'How to travel without breaking the bank.' },
            { src: '/assets/img/blog5.avif', title: 'Top 10 Travel Destinations', desc: 'Explore the most beautiful places in the world.' },
            { src: '/assets/img/slide2.jpg', title: 'Tips for Budget Travelers', desc: 'How to travel without breaking the bank.' },
          ].map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.src} alt={slide.title} />
              <div className="caption">
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog List Section */}
      <section id="blogs">
        <h2>Recent Blogs</h2>
        <div className="blog-list">
          {[
            { src: '/assets/img/blog6.avif', title: 'Hidden Gems of Europe', desc: 'Discover lesser-known yet stunning places in Europe.', link: 'blog1.html' },
            { src: '/assets/img/blog2.jpg', title: 'Adventure in the Wild', desc: 'Unforgettable wilderness experiences.', link: 'blog2.html' },
            { src: '/assets/img/blog8.webp', title: 'Adventure in the Wild', desc: 'Unforgettable wilderness experiences.', link: 'blog2.html' },
            { src: '/assets/img/blog1.jpg', title: 'Adventure in the Wild', desc: 'Unforgettable wilderness experiences.', link: 'blog2.html' },
            { src: '/assets/img/blog3.avif', title: 'Adventure in the Wild', desc: 'Unforgettable wilderness experiences.', link: 'blog2.html' },
          ].map((blog, index) => (
            <div className="blog-item" key={index}>
              <img src={blog.src} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <a href={blog.link}>Read More</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section">
        <h1>Join Our Community</h1>
        <p>Follow us on social media for updates and special offers!</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section id="newsletter">
        <h1>Stay Updated</h1>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      {/* Footer */}
     <Footer />
    </div>
    </section>
  );
}

export default Blog;
