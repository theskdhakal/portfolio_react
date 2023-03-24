import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div class="footer-container flex">
        <div class="footer-top flex">
          <div class="flex">
            <h3>Navigation-links</h3>
            <ul class="flex">
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

          <div class="flex">
            <h3>External Links</h3>
            <ul class="flex">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Github</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom flex">
          <p>@2023 | All rights reserved !</p>
        </div>
      </div>
    </footer>
  );
};
