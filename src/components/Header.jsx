import React from "react";
import { Link } from "react-router-dom";
import Resume from "../Asset/Resume.pdf";

export const Header = () => {
  return (
    <nav class="primary-header flex">
      <div class="logo">
        <h1>
          &#123; <span>SK</span> &#125;
        </h1>
      </div>

      <div class="menu">
        <input type="checkbox" id="check" />
        <label for="check" class="menu-icon">
          <i class="fa-solid fa-bars"></i>
        </label>
        <ul class="navigation flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href=".skills-container">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="download">
        <button onClick={() => window.open(Resume)}>
          Download CV{" "}
          <span>
            <i class="fa-solid fa-download"></i>
          </span>
        </button>
      </div>
    </nav>
  );
};
