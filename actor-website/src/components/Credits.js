import React, { useState } from "react";
import "./Credits.scss";

export default function Credits() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let data = [
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      img: "../photos/Riverdale.jpg",
    },
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      img: "../photos/Riverdale.jpg",
    },
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      img: "../photos/Riverdale.jpg",
    },
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      img: "../photos/Riverdale.jpg",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="credits-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="credits-img-container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="desc-container">{d.desc}</div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="button-left" onClick={()=>handleClick("left")}>Left</button>
      <button className="button-right" onClick={()=>handleClick()}>Right</button>
    </div>
  );
}
