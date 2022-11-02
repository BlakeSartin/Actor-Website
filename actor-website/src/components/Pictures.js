import React from "react";
import "./Pictures.scss";

export default function Pictures() {
  return (
    <div className="pictures-container">
      <div className="pic-container">
        <img></img>
        <h2 className="description"></h2>
        <h3 className="author"></h3>
      </div>
    </div>
  );
}
