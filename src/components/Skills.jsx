import React from "react";
import html from "../Asset/html.png";
import css from "../Asset/css.png";
import js from "../Asset/js.png";
import react from "../Asset/react.png";
import firebase from "../Asset/firebase.png";
import redux from "../Asset/redux.png";
import bootstrap from "../Asset/bootstrap.png";
import figma from "../Asset/figma.png";
import { Layout } from "./Layout";

export const Skills = () => {
  return (
    <Layout>
      <div class="skills-container ">
        <h1>Skills</h1>

        <div className="skills">
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
            <span>Firebase</span>
          </div>

          <div class="flex">
            <img src={redux} alt="" class="icons" />
            <span>Redux</span>
          </div>

          <div class="flex">
            <img src={bootstrap} alt="" class="icons" />
            <span>Bootstrap</span>
          </div>

          <div class="flex">
            <img src={figma} alt="" class="icons" />
            <span>Figma</span>
          </div>
          <div class="flex">
            <img src={figma} alt="" class="icons" />
            <span>Figma</span>
          </div>
          <div class="flex">
            <img src={figma} alt="" class="icons" />
            <span>Figma</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
