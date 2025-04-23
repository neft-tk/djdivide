import React from "react";
import EmailForm from "../components/EmailForm";
export default function Contact() {
    return (
        <>
<div className="m-8 flex flex-col items-center justify-center" id="contact">
          <h1 className="mb-5 lg:text-6xl text-yellow-600">Contact Me</h1>
          <h2 className="lg:text-6xl mb-5">
            Cell: 1- (206) 427-1555
          </h2>
          <h2 className="mb-5">
            Email: djdivide1@gmail.com
          </h2>
          <h2 className="mb-5">
            <a href="https://www.instagram.com/rickyrakehell/" alt="link to instagram" target="blank">
              Instagram: rickyrakehell
            </a>
          </h2>
          <EmailForm />
        </div>
        </>
    );
}



