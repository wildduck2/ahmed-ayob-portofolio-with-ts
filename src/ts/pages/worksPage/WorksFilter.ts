import { projects } from "../../../vite-env";
import { AppendingFilterdWorks } from "./AppendingFiltedWorks";
import { AppendingFiltedShape } from "./AppendingFilterShpae";
import { WorksTypeShow } from "./WorksTypeShow";
import { gsap } from "gsap";
export const WorksFilter = () => {
  const projectsContainer = document.querySelector(
    ".projects-wrapper"
  ) as HTMLDivElement;

  const typeFilterButtons: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".type button");
  const projects = projectsContainer.querySelectorAll(
    ".project"
  ) as NodeListOf<HTMLLIElement>;

  const shapeFilterButtton: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".shape button");

  // checking if the button shpae and show the propjects correct grid with animation
  typeFilterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const el = e.target as HTMLButtonElement;
      typeFilterButtons.forEach((button) => {
        const btn = button.querySelector(".btn-text-m");
        btn?.classList.add("change");
        button.classList.remove("active");
      });
      el.querySelector(".btn-text-m")?.classList.remove("change");
      gsap.to(".btn-text-m.change", { color: "#1C1D20", clearProps: "all" });
      button.classList.add("active");

      projects.forEach((element) => {
        element.classList.remove("show");

        if (element.dataset.type === el.dataset.type) {
          element.classList.add("show");
        }
        if (el.dataset.type === "all") {
          element.classList.add("show");
        }
      });
    });
  });

  shapeFilterButtton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const el = e.target as HTMLButtonElement;
      const type = el.dataset.shape;

      shapeFilterButtton.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");

      // remove any prev class and add the current
      projectsContainer.classList.remove("grid");
      projectsContainer.classList.remove("menu");
      projectsContainer.classList.add(type!);

      // el.querySelector(".btn-text-m")?.classList.remove("change");
      // gsap.to(".btn-text-m.change", { color: "#1C1D20", clearProps: "all" });
      // button.classList.add("active");

      // projects.forEach((element) => {
      //   element.classList.remove("show");

      //   if (element.dataset.type === el.dataset.type) {
      //     element.classList.add("show");
      //   }
      //   if (el.dataset.type === "all") {
      //     element.classList.add("show");
      //   }
      // });

      // gsap.fromTo(
      //   ".project img",
      //   {
      //     opacity: 0,
      //     scale: 0.8,
      //   },
      //   {
      //     opacity: 1,
      //     scale: 1,
      //     stagger: { amount: 0.2 },
      //     ease: "power2.out",
      //   }
      // );
    });

  });
};
