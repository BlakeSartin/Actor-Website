import React, { useState } from "react";
import "./News.scss";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleDown";

export default function News() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let data = [
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      img1: "../photos/Riverdale.jpg",
      img2: "../photos/Riverdale2.jpg",
      img3: "../photos/photo2.jpg",
    },
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      img1: "../photos/Riverdale.jpg",
      img2: "../photos/Riverdale2.jpg",
      img3: "../photos/photo2.jpg",
    },
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      iimg1: "../photos/Riverdale.jpg",
      img2: "../photos/Riverdale2.jpg",
      img3: "../photos/photo2.jpg",
    },
    {
      id: "1",
      title: "TV Show",
      desc: "This is a description of a tv show that Katrina Teitz has starred in!",
      img1: "../photos/Riverdale.jpg",
      img2: "../photos/Riverdale2.jpg",
      img3: "../photos/photo2.jpg",
    },
  ];

  const handleClick = (direction) => {
    direction === "up"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="credits-container">
      <div
        className="slider"
        style={{ transform: `translateY(-${currentSlide * 52.5}vw)` }}
      >
        {data.map((d) => (
          <div className="credits-img-container">
            <div className="item">
            <ArrowCircleDownIcon
              className="button-up"
              onClick={() => handleClick("up")}
            />
              <div className="left">
                <div className="left-container">
                  <div className="desc-container">{d.desc}</div>
                </div>
              </div>
              <div className="right">
                <img className="img3" src={d.img3} alt="" />
                <img className="img1" src={d.img1} alt="" />
                <img className="img2" src={d.img2} alt="" />
              </div>
              <ArrowCircleUpIcon
              className="button-down"
              onClick={() => handleClick()}
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
