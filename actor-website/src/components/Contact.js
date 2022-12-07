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
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label className="contact-form">
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
