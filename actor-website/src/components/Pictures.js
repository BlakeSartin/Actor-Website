import React from "react";
import "./Pictures.scss";
import News from "./News";

export default function Pictures() {
  return (
    <div className="pictures-container">
      <div className="gallery_container">
        
          <img
          className="pictures_photo1"
          src="../photos/KatrinaTeitz(2).jpeg"
        ></img>
        <img className="pictures_photo2" src="../photos/5.png"></img>
        <img className="pictures_photo3" src="../photos/File_001.png"></img>
        <img
          className="pictures_photo4"
          src="../photos/kill_the_ripper2.jpg"
        ></img>
        <img
          className="pictures_photo5"
          src="../photos/The Body Of My Name 名自字体 - 12.jpg"
        ></img>
        <img className="pictures_photo6" src="../photos/bdt_0004.jpg"></img>
        <img
          className="pictures_photo7"
          src="../photos/KatrinaTeitz_Photo (1).jpg"
        ></img>
        <img
          className="pictures_photo8"
          src="../photos/KT_VitaeApparel(1).jpg"
        ></img>
      </div>
    </div>
  );
}
