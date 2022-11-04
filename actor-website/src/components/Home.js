import React from "react";
import "./Home.scss";
import video from '../videos/video1.mp4'


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-photo-container">
        <video className="video1" controls width="100%" height="100%" src={video} autoPlay loop muted >
        </video>
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
