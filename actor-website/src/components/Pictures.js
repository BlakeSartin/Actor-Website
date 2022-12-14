import React from "react";
import "./Pictures.scss";

export default function Pictures() {
  return (
    <div className="pictures-container">
      <div className="pic-container">
      <img className="home-photo1" src="../photos/photo1.JPG"></img>
        <h2 className="photo-description"></h2>
        <h3 className="photo-author"></h3>
      </div>
      <div className="pic-container">
      <img className="home-photo1" src="../photos/photo1.JPG"></img>
        <h2 className="photo-description"></h2>
        <h3 className="photo-author"></h3>
      </div>
      <div className="pic-container">
      <img className="home-photo1" src="../photos/photo1.JPG"></img>
        <h2 className="photo-description"></h2>
        <h3 className="photo-author"></h3>
      </div>
    </div>
  );
}
