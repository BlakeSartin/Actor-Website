import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-photo-container">
      <img className="home-photo1" src="../photos/photo1.JPG"></img>
      <img className="home-photo2" src="../photos/photo2.jpg"></img>
      <img className="home-photo3" src="../photos/photo3.jpg"></img>
      </div>
      <div className="home-title-container">
        <h1 className="actor">Actor</h1>
        <h1 className="stunt-performer">Stunt Performer</h1>
        <h1 className="social-media">Social Media Coordinator</h1>
        </div>
    </div>
  );
}
