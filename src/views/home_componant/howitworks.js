import React from "react";
import "./ShortStory.css";
import { StepIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ShortStory = () => {
   const navigate = useNavigate();
  return (
    <section className="short_story">
    <div className="short-story-container">
      <div className="short-story-images">
        <img src="/assets/img/h07.jpg" alt="Plane" className="short-story-image" />
        <img src="/assets/img/h08.jpg" alt="Resort" className="short-story-image" />
        <img src="/assets/img/h09.jpg" alt="Hiker" className="short-story-image" />
        <img src="/assets/img/h10.jpg" alt="Sunset" className="short-story-image" />
      </div>
      <div className="short-story-content">
        <h2>OUR SHORT STORY</h2>
        <p>
          Our aim is to make global corporate travel management more personalized and seamless, and we do this through a network of exceptional local agencies that are not only leaders in their own respective markets...
        </p>
        <button className="see-more-btn" onClick={() => navigate("/blog")}>See more</button>
      </div>
    </div>
    </section>
  );
};

export default ShortStory;
