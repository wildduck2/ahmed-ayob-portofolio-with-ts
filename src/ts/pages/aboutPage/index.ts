import { FooterSection } from "../../layouts";
import { AboutAnimation } from "./AboutAnimation";

export const AboutPage = () => {
  const validationEl = document.querySelector(".aobut-img");
  if (!validationEl) return;

  AboutAnimation();
};
