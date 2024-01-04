import { ScrollTrigger, gsap } from "gsap/all";
import SplitType from "split-type";

export const AboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // split the title and paragraph to make it ready for the animaiton
  const titleText = new SplitType(".about-title", {
    types: "words, chars",
  });
  const parText = new SplitType(".about-paragraph", {
    types: "words, chars",
  });

  // about content animation
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "0% 90%",
      end: "100% 0%",
      toggleActions: "play none none reset",
    },

    ease: "power1.out",
  });

  tl.fromTo(
    ".about-section .char",
    {
      opacity: 0.3,
      y: "100%",
    },
    {
      opacity: 1,
      y: `-5px`,
      stagger: {
        amount: 1,
      },
    }
  );

  tl.fromTo(
    ".path",
    1,
    {
      strokeDashoffset: 1000,
    },
    {
      strokeDashoffset: 0,
    }
  );

  tl.fromTo(
    ".head",
    {
      opacity: 0,
    },
    { opacity: 1 },
    "<"
  );

  tl.fromTo(
    ".about-btn",
    1.2,
    {
      scale: 0.5,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "elastic.out",
    },
    "<.1"
  );
};
