import React from "react";
import JSLogo1 from "../assets/images/JSLogo1.jpg";
import EmailForm from "./EmailForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black">
        <div className="mt-8  flex flex-col justify-center items-center md:justify-start text-white lg:mt-0">
          <img src={JSLogo1} alt="JSLogo" className="flex m-4 mt-20 lg:m-0 lg:max-w-screen-md justify-center" />
        </div>
        <div className="flex flex-col my-8 max-w-sm">
          <p>
            Hello world, my name is Jake and I am a DJ based out of Seattle, WA.
            Born and raised in Seattle, I started out as a guitarist and I have been interested in music for as long as I can remember.
            I have been DJing professionally since 2017 and I absolutely love it!  It is my passion to share music with people.</p>
            <p>
            I own and operate top of the line, industry standard multi-players and a mixer and a quality speaker system.
            I have been lucky enough to DJ a wide variety of venues including cannabis shops, bars and private events.
            I have a working vehicle and I can transport my gear to where you need the music played, so if you live in an area outside of Seattle, that's no problem!
            My music collection is ever expanding so I can DJ a lot of different genres, but I specialize in EDM, hip/hop & rap, and hard rock/metal.
            If you would like to know more, don't hesitate to call/text/email/DM!
          </p>
          <p>
            My philosophy is to play 50% for the crowd, and 50% for myself.  Even Steven.
            I want your event to be awesome and I want the audience to have a great time.
            Take a look at my rates page, but keep in mind I am open to negotiations about price of my services.
            Again, anything else you wanna know, don't hesitate to call/text/email/DM.
          </p>
          <p>
            Keep on rocking in the free world,

            - Jake ➗
          </p>
        </div>

        <div className="m-8 flex flex-col items-center justify-center" id="contact">
          <h1 className="mb-5 lg:text-6xl text-yellow-600">Contact Me</h1>
          <h2 className="lg:text-6xl mb-5">
            Cell: 1- (206) 669-3748
          </h2>
          <h2 className="mb-5">
            Email: djdivide1@gmail.com
          </h2>
          <h2 className="mb-5"> 
            <a href="https://www.instagram.com/rickyrakehell/" alt="link to instagram" target="blank">
            Instagram: rickyrakehell
              </a>
            </h2>
            <EmailForm/>
        </div>



        <div className="m-8 flex flex-col items-center justify-center" id="rates">
          <h1 className="mb-5 text-yellow-600">
            Rates
          </h1>
          <h2 className="mb-5">
            Thus far I have been charging $450 for a five hour set
          </h2>
          <h2 className="mb-5">
            $800 for a seven hour or longer set.
          </h2>
          <h2 className="mb-5">
            I am open to getting compensated in store credit, however I would strongly prefer cash
          </h2>
        </div>
      </div>
    </>
  );
}
