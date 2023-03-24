const animatedElement = document.querySelectorAll(".fa-brands");

const pauseAnimation = () => {
  animatedElement.forEach((element) => {
    element.style.animationPlayState = "paused";
  });
  console.log("pausing animations");
};

const resumeAnimation = () => {
  animatedElement.forEach((element) => {
    element.style.animationPlayState = "running";
  });
  console.log("resuming animations");
};

const parentDiv = document.getElementById("social");

parentDiv.addEventListener("mouseover", pauseAnimation);
parentDiv.addEventListener("mouseout", resumeAnimation);
