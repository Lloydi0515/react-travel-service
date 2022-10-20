import "./ContactFormStyles.css";
import React, { useState } from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  // deconstructing the  variable from the inputs
  const { Name, Email, Message } = inputs;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { Name, Email, Message };

      const response = await fetch(
        // "https://api.ahglab.com/api:fXznCvvM",
        "https://api.ahglab.com/apidoc:fXznCvvM/#/contact_us/post_contact_us",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();

      if (parseRes.Email === Email) {
        return alert("success");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" id="Name" name="Name" placeholder="Name" />
        <input type="text" id="email" name="email" placeholder="Email" />
        {/* <input type="text" id="subject" name="subject" placeholder="Subject" /> */}
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Message"
          rows="4"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
