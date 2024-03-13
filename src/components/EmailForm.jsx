import React from "react";
import emailjs from "emailjs-com";

export default function emailForm() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm("service_ff8aq7h", "template_9nl80f7", e.target, "3eJvPeASOvZx1u5Cr")
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form flex flex-col" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" className="m-2 bg-black border border-white rounded"/>
      <label>Email</label>
      <input type="email" name="from_email" className="m-2 bg-black border border-white rounded"/>
      <label>Subject</label>
      <input type="text" name="subject" className="m-2 bg-black border border-white rounded"/>
      <label>Message</label>
      <textarea name="message" className="m-2 bg-black border border-white rounded" />
      <input type="submit" value="Send" />
    </form>
  );
}
