import React from "react";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <nav className="nav">
      <h1 className="name" >Katrina Teitz</h1>
      <ul className="font-link">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/credits">Credits</a>
        </li>
        <li>
          <a href="/reels">Reels</a>
        </li>
        <li>
          <a href="/pictures">Pictures</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
