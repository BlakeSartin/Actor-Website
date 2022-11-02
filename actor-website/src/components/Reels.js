import React from "react";  
import "./Reels.scss"

export default function Reels() {
  return (
    <div className="reels-container">
      <div className="reel-container">
        <video></video>
        <h2 className="video-description"></h2>
        <h3 className="viedo-author"></h3>
        </div>
      </div>
  )
}