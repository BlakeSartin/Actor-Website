import React from "react";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <nav className="nav">
      <ul className="font-link">
      <h1 className="name">Katrina Teitz</h1>
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
