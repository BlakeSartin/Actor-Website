import React from "react";
import "./Topbar.scss";
import { Instagram, Twitter, Email } from "@mui/icons-material";

export default function Topbar() {
  return (
    <nav className="nav">
      <h1 className="name">Katrina Teitz</h1>
      <ul className="font-link">
        <li>
          <a className="link" href="/home">Home</a>
        </li>
        <li>
          <a className="link" href="/about">About</a>
        </li>
        <li>
          <a className="link" href="/reels">Reels</a>
        </li>
        <li>
          <a className="link" href="/pictures">Gallery</a>
        </li>
        <li>
          <a className="link" href="/contact">Contact</a>
        </li>
      </ul>
      <div className="contact-icons">
        <a className="icon" href="https://www.instagram.com/katrinateitz/?hl=en">
          <Instagram  fontSize="large"/>
        </a>
      </div>
    </nav>
  );
}
