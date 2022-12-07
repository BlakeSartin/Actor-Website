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
      <h1>Contact Me Anytime!</h1>
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
            <p>Email</p>
            <input email="email"/>
            <p>Message</p>
            <input message="message"/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
