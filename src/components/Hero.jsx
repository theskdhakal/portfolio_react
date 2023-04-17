import React from "react";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="text">
          <h1>Shiva K. Dhakal</h1>
          <p>Web Developer</p>
        </div>
      </section>

      <section class="section2">
        <div class="info-container flex">
          <div class="info-lists flex">
            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>BIT</h5>
                <p>Graduate</p>
              </span>
            </div>
            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>5+ Project</h5>
                <p>Completed</p>
              </span>
            </div>
            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>

              <span>
                <h5>1+ year</h5>
                <p>Coding experience</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
