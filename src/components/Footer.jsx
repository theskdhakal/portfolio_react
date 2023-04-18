import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <footer>
      <div class="footer-container flex">
        <div class="footer-top flex">
          <div class="flex">
            <h3>Navigation-links</h3>
            <ul class="flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
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

          <div class="flex">
            <h3>External Links</h3>
            <ul class="flex">
              <Link to="https://www.linkedin.com/in/shiva-kumar-dhakal/">
                <li>LinkedIn</li>
              </Link>

              <Link to="https://twitter.com/theskdhakal">
                <li>Twitter</li>
              </Link>

              <Link to="https://github.com/theskdhakal">
                <li>Github</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="topLoader">
          <i class="fa-solid fa-chevron-up" onClick={backToTop}></i>
        </div>{" "}
        <div class="footer-bottom flex">
          <p>@2023 | All rights reserved !</p>
        </div>
      </div>
    </footer>
  );
};
