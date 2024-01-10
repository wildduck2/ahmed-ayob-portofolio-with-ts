import { ScrollTrigger, gsap } from "gsap/all";
import SplitType from "split-type";

export const FooterAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    const titleText = new SplitType(".footer-title", {
        types: "words, chars",
    });

    const char = document.querySelectorAll(".footer-title .char");
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

    gsap.context(() => {
        // the rounded shape animation trigger
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-seciton",
                start: "0% 100%",
                end: "50% 80%",
                scrub: 1,
            },
        });
        tl.to(
            ".footer-shape",
            {
                height: 0,
                rotate: "0.001deg",
                ease: "none",
            },
            0,
        );

        // hamburger border animation trigger
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-seciton",
                start: "top 50%",
                toggleActions: "play none none reset",
            },
            ease: "none",
        });

        tl2.to(
            ".hamburger-btn",
            {
                boxShadow: `inset 0px 0px 0px 1px rgba(255, 255, 255, 0)`,
            },
            "<",
        );

        tl2.to(
            ".hamburger-btn",
            {
                boxShadow: `inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2)`,
            },
            "<",
        );

        tl2.to(
            ".menu-slide ",
            { boxShadow: `inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2)` },
            "<",
        );

        tl2.to(
            ".rounded-div",
            { boxShadow: `inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2)` },
            "<",
        );

        // footer elements animation fade in trigger
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-seciton",
                start: "top 85%",
                end: "30% 55%",
                scrub: 1.14,
            },
        });

        tl3.to(".first-col", {
            startAt:{marginTop:0},
            marginTop: "3rem",
        },'<');
        tl3.from(
            ".footer-img",
            {
                scale: 0.9,
                opacity: 0.7,
                ease: "bounce.inout",
                rotate: "0.001deg",
            },
            "<",
        );

        tl3.from(
            ".line",
            {
                width: "50%",
                rotate: "0.001deg",
            },
            "<",
        );
        tl3.from(
            ".footer-btn-wrapper",
            {
                x: `-195px`,
                rotate: "0.001deg",
            },
            "<",
        );

        tl3.from(
            ".footer-arrow",
            {
                x: 60,
                y: -60,
                opacity: 0,
                rotation: 0.01,
            },
            "<.2",
        );

        tl3.from(
            ".footer-btn-wrapper-contact",
            {
                y: `100%`,
                opacity: 0,
                stagger: 0.1,
                rotate: "0.001deg",
            },
            "<",
        );
    });
};
