import React from "react";
import "./Home.scss";
import News from "./News";

export default function Home() {
  return (
    <div>
    <div className="home-container">
      <div className="home-photo-container">
        <img className="home-photo1" src="../photos/katrina1.jpg"></img>
        <img className="home-photo2" src="../photos/katrina2.jpg"></img>
        <img className="home-photo3" src="../photos/katrina3.jpg"></img>
      </div>
      <div className="home-title-container">
        <h1 className="actor">Actor</h1>
        <h1 className="stunt-performer">Stunt Performer</h1>
        <h1 className="social-media">Social Media Coordinator</h1>
      </div>
      <div className="text_container">
      <h1 className="home_text">Katrina Teitz is an actor/singer/dancer based in Vancouver, BC. She has been in several shows around town after receiving her Diploma in Musical Theatre from Capilano University (2017). Her favourite credits include Next to Normal (West Moon Theatre), Crybaby the Musical (Awkward Stage Productions), Kill The Ripper (Geekenders/Affair of Honor). She is an aspiring stunt performer with training in flips, tricks, Wushu and a black belt in Karate. Katrina is also a proud cat mama of two. You can find her on all socials at @Katrinateitz</h1>
      </div>
    </div>
   
    </div>
  );
}
