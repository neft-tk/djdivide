import React from "react";
import JSLogo1 from "../assets/images/JSLogo1.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-black">
        <div className="mt-8 md:p-16 flex flex-col justify-center items-center md:justify-start text-white">
          <h1 className="flex justify-center">Dj Divide</h1>
          <h2 className="flex text-center justify-center">
            DJ Expert 
          </h2>
        <img src={JSLogo1} alt="JSLogo" className="flex max-w-md justify-center"/>
        </div>
        <p>
          Hello world, my name is Jake and I am a DJ based out of Seattle, WA.
          Born and raised in Seattle, I started out as a guitarist and I have been interested in music for as long as I can remember.
          I have been DJing professionally since 2017 and I absolutely love it!  It is my passion to share music with people.
          I own and operate top of the line, industry standard multi-players and a mixer and a quality speaker system.
          I have been lucky enough to DJ a wide variety of venues including cannabis shops, bars and private events.
          I have a working vehicle and I can transport my gear to where you need the music played, so if you live in an area outside of Seattle, that's no problem!
          My music collection is ever expanding so I can DJ a lot of different genres, but I specialize in EDM, hip/hop & rap, and hard rock/metal.
          If you would like to know more, don't hesitate to call/text/email/DM!</p>
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

        <div className="mx-4 flex flex-col items-center justify-center" id="contact">
          <h2 className="mb-5">
            Cell: 206.427.1555
          </h2>
          <h2 className="mb-5">
            Email: djdivide1@gmail.com
          </h2>
          <h2 className="mb-5">Instagram: rickyrakehell</h2>
        </div>
      </div>
    </>
  );
}
