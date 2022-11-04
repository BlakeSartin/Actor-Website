import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-photo-container">
        <img></img>
        image
      </div>
      <div className="title-container">
        <h2 className="welcome-statement">Hello</h2>
      </div>
      <div className="news-container">
        <h2 className="news">News</h2>
      </div>
    </div>
  );
}
