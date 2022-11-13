import React, { useState } from "react";
import "./Credits.scss";


export default function Credits() {
  const [currentSlide, setCurrentSlide] = useState(0)

  let data = [
    { id: "1", title: "TV Show", img: "../photos/photo1.JPG" },
    { id: "1", title: "TV Show", img: "../photos/photo2.jpg" },
    { id: "1", title: "TV Show", img: "../photos/photo3.jpg" },
    { id: "1", title: "TV Show", img: "../photos/photo3.jpg" },
  ];
  
  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return <div className="credits-container"></div>;
}
