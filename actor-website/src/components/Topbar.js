import React from "react";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <nav className="nav">
      <ul>
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
