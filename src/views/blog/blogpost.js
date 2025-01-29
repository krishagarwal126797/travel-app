import React from "react";
import "./blogpost.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";

const blogPosts = [
  {
    id: 1,
    title: "The Perfect Blog Post",
    description: "Learn how to create a compelling blog post that keeps your readers engaged.",
    media: "/assets/img/createtour1.png",
    type: "image", // "video" for videos
  },
  {
    id: 2,
    title: "The Power of Storytelling",
    description: "Discover how storytelling can make your content more relatable and engaging.",
    media: "/assets/img/blog2.jpg",
    type: "image",
  },
  {
    id: 3,
    title: "Mastering SEO for Blogs",
    description: "Boost your blog's visibility with these essential SEO techniques.",
    media: "/assets/videos/seo-tips.mp4",
    type: "video",
  },
];

const BlogPostPage = () => {
  return (
    <section className="blogpost">
      <NavbarComp />
      <div className="blog-container">
        <h1 className="page-title">your blog</h1>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              {/* Media (Image/Video) */}
              <div className="blog-media">
                {post.type === "image" ? (
                  <img src={post.media} alt={post.title} className="blog-image" />
                ) : (
                  <video src={post.media} controls className="blog-video"></video>
                )}
              </div>

              {/* Content (Title + Description) */}
              <div className="blog-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-description">{post.description}</p>
                {/* <button className="read-more">Read More</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogPostPage;
