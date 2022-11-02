import React from "react";
import "./Pictures.scss";

export default function Pictures() {
  return (
    <div className="pictures-container">
      <div className="pic-container">
        <img></img>
        <h2 className="photo-description"></h2>
        <h3 className="photo-author"></h3>
      </div>
    </div>
  );
}
