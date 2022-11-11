import React from "react";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <nav className="nav">
      <h1 className="name" >Katrina Teitz</h1>
      <ul className="font-link">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Credits">Credits</a>
        </li>
        <li>
          <a href="/Reels">Reels</a>
        </li>
        <li>
          <a href="/Pictures">Pictures</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
