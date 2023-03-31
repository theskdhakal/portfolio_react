import React from "react";
import dark from "../Asset/dark.mp4";

export const Hero = () => {
  return (
    <section class="hero">
      <video src={dark} type="video/mp4" muted autoPlay loop></video>
      <div class="text">
        <h1>Shiva K. Dhakal</h1>
        <p>Web Developer</p>
      </div>
    </section>
  );
};
