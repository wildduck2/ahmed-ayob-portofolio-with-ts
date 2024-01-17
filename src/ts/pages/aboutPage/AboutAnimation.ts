import { ScrollTrigger, gsap } from "gsap/all";

export const AboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".second-col-about",
      start: "top 0%",
      end: "150% bottom",
      scrub: 1.14,
    },
  });

  tl.to(
    ".aobut-img",
    3,
    {
      height: "750px",
      ease: "power1.out",
    },
    "<"
  );

  // make the text pin at the center
  // const tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".second-col-about",
  //     start: "top 20%",
  //     end: "120% bottom",
  //     scrub: 1.14,
  //     pin: ".col-text",
  //     markers: true,
  //   },
  // });
};
