import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
