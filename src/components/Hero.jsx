import React from "react";
import light from "../Asset/light.mp4";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
      <section class="hero">
        <video src={light} type="video/mp4" muted autoPlay loop></video>
        <div class="text">
          <h1>Shiva K. Dhakal</h1>
          <p>Web Developer</p>
        </div>
      </section>
    </Layout>
  );
};
