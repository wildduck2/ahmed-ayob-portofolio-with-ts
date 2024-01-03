import { FooterSection } from "../../layouts";
import { WorksFilter } from "./WorksFilter";

export const WorksPage = () => {
  const validationEl = document.querySelector(".works-section-container");
  if (!validationEl) return;

  FooterSection();
  WorksFilter();
};
