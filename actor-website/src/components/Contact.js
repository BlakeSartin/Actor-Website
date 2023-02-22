import React, {useState} from "react";
import "./Contact.scss";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
      event.preventDefault();
     setSubmitting(true);
  
     setTimeout(() => {
       setSubmitting(false);
     }, 3000)
   }

  return (
    <div className="contact-container">
      <div className="picture-box">
      <img className="contact-photo" src="../photos/Blue water colours brushstroke.png"></img>
      <img className="contact-photo2" src="../photos/Blue water colours brushstroke.png"></img>
        </div>
      {submitting && <div>Submtting Form...</div>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset>
          <label className="contact-label">
          <h1 className="contact-title">Contact Me Anytime!</h1>
            <p className="contact-form-p">Name</p>
            <input name="name" />
            <p className="contact-form-p">Email</p>
            <input email="email"/>
            <p className="contact-form-p">Message</p>
            <input message="message"/>
            <button type="submit">Submit</button>
          </label>
        </fieldset>
      </form>
    </div>
  );
}
