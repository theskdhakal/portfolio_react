import React from "react";

export const Header = () => {
  return (
    <nav class="primary-header flex">
      <div class="logo">
        <h1>
          [<span>SK</span>/]
        </h1>
      </div>

      <div class="menu">
        <input type="checkbox" id="check" />
        <label for="check" class="menu-icon">
          <i class="fa-solid fa-bars"></i>
        </label>
        <ul class="navigation flex">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
