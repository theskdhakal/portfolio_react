import React from "react";
import project1 from "../Asset/project1.JPG";
import project2 from "../Asset/project2.JPG";
import project3 from "../Asset/project3.JPG";
import project4 from "../Asset/project4.JPG";
import project5 from "../Asset/project5.JPG";
import project6 from "../Asset/project6.JPG";

export const Projects = () => {
  return (
    <>
      <section class="section4 flex" id="projects">
        <h1 class="title">Recent Projects</h1>

        <div class="project-container grid">
          <div class="project-card flex">
            <div class="top">
              <img src={project1} alt="" />
            </div>

            <div class="bottom">
              <p>Prank Calculator</p>
            </div>
          </div>

          <div class="project-card flex">
            <div class="top">
              <img src={project2} alt="" />
            </div>

            <div class="bottom">
              <p>Movie-list Generator</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={project3} alt="" />
            </div>

            <div class="bottom">
              <p>Age-calculator</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={project4} alt="" />
            </div>

            <div class="bottom">
              <p>Tic-Tac-Toe</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={project5} alt="" />
            </div>

            <div class="bottom">
              <p>Contact-List</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={project6} alt="" />
            </div>

            <div class="bottom">
              <p>Analogue Clock</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
