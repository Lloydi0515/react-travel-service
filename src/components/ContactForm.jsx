import "./ContactFormStyles.css";
import React, { useState } from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
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
      console.log(parseRes);

      if (!parseRes) {
        return alert("Failed");
      } else {
        return alert("Success");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Name"
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => onChange(e)}
        />
        {/* <input type="text" id="subject" name="subject" placeholder="Subject" /> */}
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Message"
          rows="4"
          onChange={(e) => onChange(e)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
