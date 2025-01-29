import React, { useState } from "react";
import "./createblog.css";
import NavbarComp from "../Navbar";
import Footer from "../footer";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMedia(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !content) {
      alert("Please fill in all fields!");
      return;
    }

    // Form data processing (e.g., sending to backend)
    console.log({ title, content, media });

    alert("Blog submitted successfully!");
    setTitle("");
    setContent("");
    setMedia(null);
    setPreview(null);
  };

  return (
    <section className="blogcreate">
        <NavbarComp />
    <div className="blog-container">
      <h2>Create a Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <input type="file" accept="image/*,video/*" onChange={handleMediaChange} />

        {preview && (
          <div className="media-preview">
            {media && media.type.startsWith("image") ? (
              <img src={preview} alt="Preview" />
            ) : (
              <video src={preview} controls />
            )}
          </div>
        )}

        <button type="submit">Publish</button>
      </form>
    </div>
    <Footer />
    </section>
  );
};

export default CreateBlog;
