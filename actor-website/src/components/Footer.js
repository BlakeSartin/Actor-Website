import React from "react"
import "./Footer.scss"
import { Instagram, Twitter, Email } from "@mui/icons-material";

export default function Footer () {
  return (
    <nav className="footer_nav">
      <h2 className="quote">Life is finite, love is infinite.</h2>
      <div className="footer-contact-icons">
      <Instagram />
      <Twitter />
      <Email />
      </div>
      </nav>
  )
}