import React, { useRef } from "react";
import point from "../Asset/point.png";
import { Link } from "react-router-dom";

export const Contact = () => {
  const linkedinRef = useRef(null);
  const facebookRef = useRef(null);
  const githubRef = useRef(null);
  const twitterRef = useRef(null);
  const instagramRef = useRef(null);

  const email = "theskdhakal@gmail.com";

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:${email}";
  };
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
    <>
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
              <Link to="https://www.linkedin.com/in/shiva-kumar-dhakal/">
                <i class="fa-brands fa-linkedin" ref={linkedinRef}></i>
              </Link>

              <Link to="https://www.facebook.com/iamshivadhakal">
                {" "}
                <i class="fa-brands fa-facebook" ref={facebookRef}></i>
              </Link>

              <Link to="https://github.com/theskdhakal">
                <i class="fa-brands fa-github" ref={githubRef}></i>
              </Link>

              <Link to="https://twitter.com/theskdhakal">
                <i class="fa-brands fa-twitter" ref={twitterRef}></i>
              </Link>

              <Link to="https://www.instagram.com/thesk_dhakal/">
                {" "}
                <i class="fa-brands fa-instagram" ref={instagramRef}></i>
              </Link>
            </div>
          </div>

          <div class="new-right">
            <h1>OR</h1>
            <div class="email-section flex">
              <p>Reach out over email</p>
              <div class="email">
                <a href="">Send E-mail</a>

                <div class="send">
                  <i
                    class="fa-solid fa-paper-plane"
                    onClick={handleEmailButtonClick}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
