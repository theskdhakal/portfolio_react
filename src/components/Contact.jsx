import React, { useRef } from "react";
import point from "../Asset/point.png";
import { Layout } from "./Layout";

export const Contact = () => {
  const linkedinRef = useRef(null);
  const facebookRef = useRef(null);
  const githubRef = useRef(null);
  const twitterRef = useRef(null);
  const instagramRef = useRef(null);

  const animatedElements = [
    linkedinRef,
    facebookRef,
    githubRef,
    twitterRef,
    instagramRef,
  ];

  const pauseAnimation = () => {
    animatedElements.forEach((ref) => {
      if (ref.current) {
        ref.current.style.animationPlayState = "paused";
      }
    });
  };
  const resumeAnimation = () => {
    animatedElements.forEach((ref) => {
      if (ref.current) {
        ref.current.style.animationPlayState = "running";
      }
    });
  };

  return (
    <Layout>
      <section className="section6 flex" id="contact">
        <h1 className="title">Contact</h1>
        <div className="content flex">
          <div className="visual">
            <img src={point} alt="" />
          </div>
          <div>
            <div
              className="socials flex"
              id="social"
              onMouseEnter={pauseAnimation}
              onMouseLeave={resumeAnimation}
            >
              <i class="fa-brands fa-linkedin" ref={linkedinRef}></i>
              <i class="fa-brands fa-facebook" ref={facebookRef}></i>
              <i class="fa-brands fa-github" ref={githubRef}></i>
              <i class="fa-brands fa-twitter" ref={twitterRef}></i>
              <i class="fa-brands fa-instagram" ref={instagramRef}></i>
            </div>
          </div>

          <div class="new-right">
            <h1>OR</h1>
            <div class="email-section flex">
              <p>Reach out over email</p>
              <div class="email">
                <a href="mailto:theskdhakal@gmail.com">theskdhakal@gmail.com</a>

                <div class="send">
                  <i class="fa-solid fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
