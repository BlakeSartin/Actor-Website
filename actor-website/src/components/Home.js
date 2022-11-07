import React from "react";
import "./Home.scss";


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-photo1-container">
        <img className="home-photo1" src="../photos/photo1.JPG" ></img>
      </div>
      <div className="home-photo2-container">
        <img className="home-photo2" src="../photos/photo2.jpg"></img>
      </div>
      <div className="home-photo3-container">
        <img className="home-photo3" src="../photos/photo3.jpg"></img>
      </div>
    </div>
  );
}
