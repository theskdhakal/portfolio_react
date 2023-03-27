import React from "react";
import pic from "../Asset/pic.png";
import interest1 from "../Asset/interest1.jpg";
import interest2 from "../Asset/interest2.jpg";
import interest3 from "../Asset/interest3.jpg";
import { Layout } from "./Layout";

export const About = () => {
  return (
    <Layout>
      <section class="about">
        <h1 class="title">About Me</h1>
        <div class="about-container flex">
          <div class="left flex">
            <div class="bg"></div>
            <img src={pic} alt="" />
          </div>

          <div class="right">
            <p>Hi, I'm</p>

            <h1>Shiva K. Dhakal</h1>

            <h2>
              A <span> Frontend developer</span> ,based on Sydney
            </h2>
          </div>
        </div>

        <div class="interest flex">
          <div class="interest-card flex">
            <h2>Travelling</h2>
            <div class="box flex">
              <img src={interest1} alt="" />
              <p>
                As an avid traveler, I am passionate about exploring new
                destinations and experiencing different cultures. I love trying
                new foods, meeting new people, and immersing myself in unique
                experiences. My travels allow me to broaden my horizons and
                learn more about the world, and with each trip, I gain a deeper
                appreciation for the diversity and beauty of our planet. Whether
                I'm traveling close to home or venturing further afield, I'm
                always eager to embark on my next adventure and see what
                exciting experiences await.
              </p>
            </div>
          </div>
          <div class="interest-card flex">
            <h2>Coding</h2>
            <div class="box flex">
              <img src={interest2} alt="" />
              <p>
                As a dedicated programmer, I am passionate about building
                innovative and user-friendly applications. I have experience
                coding in JavaScript and React, and I am skilled in using tools
                like Figma and Bootstrap to create beautiful and functional
                designs. I am constantly learning and improving my skills, and I
                love the challenge of solving complex problems and implementing
                creative solutions.
              </p>
            </div>
          </div>
          <div class="interest-card flex">
            <h2>Reading</h2>
            <div class="box flex">
              <img src={interest3} alt="" />
              <p>
                Reading books is one of my favorite pastimes. I enjoy exploring
                different genres, including history, biography, and fiction.
                Some of my favorite books include The Alchemist and Robinson
                Crusoe. I find reading to be not only entertaining but also
                enriching, as it allows me to expand my knowledge and gain new
                perspectives. Whether I'm curled up with a good book or browsing
                the shelves at the library, I always look forward to my next
                literary adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
