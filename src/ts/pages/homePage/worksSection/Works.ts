import { ScrollTrigger, gsap } from "gsap/all";
import SplitType from "split-type";

export const WorksAnimation = () => {
  const titleText = new SplitType(".works-title", {
    types: "words, chars",
  });

  const char = document.querySelectorAll(".works-title .char");

  char.forEach((char) => {
    char.addEventListener("mouseenter", () => {
      char.classList.add("animate__rubberBand");
    });
  });
  char.forEach((char) => {
    char.addEventListener("mouseleave", () => {
      setTimeout(() => {
        char.classList.remove("animate__rubberBand");
      }, 700);
    });
  });

  gsap.registerPlugin(ScrollTrigger);
  const tl1 = gsap.timeline({
    defaults: {
      scrollTrigger: {
        trigger: ".works-section",
        start: "top 90% ",
        end: "center center",
        scrub: 1,
        // markers: true,
      },
    },
  });

  tl1.from(
    ".imgy",
    {
      scale: "1.3",
      rotate: () => Math.floor(Math.random() * 40 - 20),
      x: () => Math.floor(Math.random() * 300 - 150),
      y: () => Math.floor(Math.random() * 300 - 150),
    },
    "-=1"
  );

  //the navigation and more works btn scrool trigger animation
  const tl2 = gsap.timeline({
    defaults: {
      scrollTrigger: {
        trigger: ".works-section",
        start: "top 70% ",
        end: "center 60%",
        scrub: 1,
        // markers: true,
      },
    },
  });
  // card info fade in
  tl2.from(".card-info", 7, {
    y: `-100%`,
    rotation: 0.01,
    opacity: 0.1,
    stagger: 0.5,
  });
  tl2.from(".works-title", {
    y: `100%`,
    rotation: 0.01,
    opacity: 0,
  });
  tl2.from(".btn-nav", 1, {
    scale: 0.6,
    rotation: 0.01,
    opacity: 0,
  });
  tl2.from(".works-btn", 1, {
    scale: 0.6,
    rotation: 0.01,
    opacity: 0,
  });
};
