import React from "react"
import "./Contact.scss"
import News from "./News"

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-message-container">
        <h1 className="contact-message">Hello this is a message</h1>
        <form className="contact-form">
          <input></input>
          <textarea></textarea>
          <button type="submit"></button>
        </form>
        </div>
      </div>
  )
}