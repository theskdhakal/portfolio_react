import React from "react";
import html from "../Asset/html.png";
import css from "../Asset/css.png";
import js from "../Asset/js.png";
import react from "../Asset/react.png";
import firebase from "../Asset/firebase.png";

export const Skills = () => {
  return (
    <div class="skills-container flex">
      <h1>Skills</h1>
      <div class="flex">
        <img src={html} alt="" class="icons" />
        <span>HTML</span>
      </div>

      <div class="flex">
        <img src={css} alt="" class="icons" />
        <span>CSS</span>
      </div>

      <div class="flex">
        <img src={js} alt="" class="icons" />

        <span>JavaScript</span>
      </div>

      <div class="flex">
        <img src={react} alt="" class="icons" />
        <span>React</span>
      </div>

      <div class="flex">
        <img src={firebase} alt="" class="icons" />
        <span>firebase</span>
      </div>
    </div>
  );
};
