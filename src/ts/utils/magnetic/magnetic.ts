import gsap from "gsap";

export const MagnaticObject = () => {
  const domElemetns = document.querySelectorAll(
    ".magnetic"
  ) as NodeListOf<HTMLElement>;

  let boundingClientRect: DOMRect,
    domElementText: Element | null,
    domElementFill: Element | null,
    magnetsStrength: string | null,
    magnetsStrengthText: string | null;

  const buttonMovement = (Element: HTMLElement, event: MouseEvent) => {
    domElementText = Element.querySelector(".btn-text-m");
    boundingClientRect = Element.getBoundingClientRect();
    magnetsStrength = Element.getAttribute("data-strength") as string;
    magnetsStrengthText = Element.getAttribute("data-strength-text") as string;

    // setting context scope to prevent buggs in animation on larger screens
    const ctx1 = gsap.context(() => {
      if (window.innerWidth > 540) {
        gsap.to(Element, 1.5, {
          x:
            ((event.clientX - boundingClientRect.left) / Element.offsetWidth -
              0.5) *
            +magnetsStrength!,
          y:
            ((event.clientY - boundingClientRect.top) / Element.offsetHeight -
              0.5) *
            +magnetsStrength!,
          rotate: "0.001deg",
          ease: "elestic.out",
        });

        if (domElementText) {
          gsap.to(domElementText, 1.5, {
            x:
              ((event.clientX - boundingClientRect.left) / Element.offsetWidth -
                0.5) *
              +magnetsStrengthText!,
            y:
              ((event.clientY - boundingClientRect.top) / Element.offsetHeight -
                0.5) *
              +magnetsStrengthText!,
            ease: "elestic.out",
          });

          if (Element.classList.contains("filter-button")) {
            gsap.to(domElementText, 0.3, {
              color: "#fff",
              ease: "power1.inOut",
            });
          }

          if (Element.querySelector(".lucide-filter")) {
            gsap.to(".lucide-filter", 0.3, {
              stroke: "#fff",
              ease: "power1.inOut",
            });
          }
        }
      }
    });
    return () => ctx1.revert();
  };

  // mouseEnter handler animation
  domElemetns.forEach((Element: HTMLElement) => {
    Element.addEventListener("mouseenter", (event: MouseEvent | any) => {
      domElementFill = Element.querySelector(".btn-fill");
      buttonMovement(Element, event);

      const ctx2 = gsap.context(() => {
        // if there is a fill layer do else not
        if (window.innerWidth > 540) {
          if (domElementFill) {
            gsap.to(domElementFill, 0.6, {
              startAt: { y: "76%" },
              y: "0%",
              ease: "power1.inOut",
            });
          }
        }
        // anomation for the works button
        if (event.target?.closest(".works-btn")) {
          if (window.innerWidth > 540) {
            gsap.to(".btn-c", 0.6, {
              color: "#fff",
              ease: "power1.inOut",
            });
          }
        }
      });
      return () => ctx2.revert();
    });
  });

  domElemetns.forEach((Element: HTMLElement) => {
    Element.addEventListener("mousemove", (event: MouseEvent) => {
      buttonMovement(Element, event);
    });
  });

  domElemetns.forEach((Element: HTMLElement) => {
    Element.addEventListener("mouseleave", () => {
      domElementText = Element.querySelector(".btn-text-m");
      let magnetButtonfill = Element.querySelector(".btn-fill");
      let btnC = Element.querySelector(".btn-c");

      // restring all tweens on mouseLeave
      const ctx3 = gsap.context(() => {
        gsap.to(Element, 1.5, {
          x: 0,
          y: 0,
          ease: "elastic.out",
        });

        if (domElementText) {
          gsap.to(domElementText, 1.5, {
            x: 0,
            y: 0,
            ease: "elastic.out",
          });

          if (
            !Element.classList.contains("active") &&
            Element.classList.contains("filter-button")
          ) {
            gsap.to(domElementText, 0.3, {
              color: "rgb(28, 29, 32)",
              ease: "power1.inOut",
            });
          }

          Element.parentElement?.querySelectorAll("button").forEach((item) => {
            const icon = item.querySelector("svg");
            if (!item.classList.contains("active")) {
              gsap.to(icon, 0.3, {
                stroke: "rgb(28, 29, 32)",
                ease: "power1.inOut",
              });
            }
          });
        }

        if (magnetButtonfill) {
          gsap.to(magnetButtonfill, 0.6, {
            y: "-76%",
            ease: "power1.inout",
          });
        }

        if (window.innerWidth > 540) {
          if (btnC) {
            gsap.to(btnC, 0.6, {
              color: "#1C1D20",
              ease: "power1.out",
            });
          }
        }

        return () => ctx3.revert();
      });
    });
  });
};
