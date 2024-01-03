import barba, { ITransitionData } from "@barba/core";
import { ScrollTrigger, gsap } from "gsap/all";
import { initScript } from "../..";
export const BarbaJSRoutingAnimation = () => {
  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
  });

  barba.init({
    sync: true,
    debug: false,
    timeout: 7000,
    transitions: [
      {
        name: "default",
        once(data) {
          // do something once on the initial page load
          // initScript();
          initLoader();
        },
        async leave({ current }) {
          // animate loading screen in
          pageTransitionIn();
          await delay(495);
          current.container.remove();
        },
        async enter(data) {
          // animate loading screen away
          pageTransitionOut();
          initNextWord(data);
        },
        async beforeEnter() {
          // window.scrollTo( 0, 0 );
          ScrollTrigger.getAll().forEach((t) => t.kill());
          initScript();
        },
      },
      {
        name: "to-home",
        from: {},
        to: {
          namespace: ["home"],
        },
        once() {
          // do something once on the initial page load
          // initScript();
          initLoaderHome();
        },
      },
    ],
  });
};

function initNextWord(data: ITransitionData) {
  // update Text Loading https://github.com/barbajs/barba/issues/507
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, "text/html");
  let nextProjects = dom.querySelector(".loading-words");
  document.querySelector(".loading-words")!.innerHTML = nextProjects!.innerHTML;
}

function delay(n: number) {
  n = n || 2000;
  return new Promise<void>((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// Animation - First Page Load
function initLoaderHome() {
  var tl = gsap.timeline();

  tl.set(".loading-screen", {
    top: "0",
  });

  if (innerWidth > 540) {
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh",
    });
  }

  tl.set(".loading-words", {
    opacity: 0,
    y: -50,
  });

  tl.set(".loading-words .active", {
    display: "none",
  });

  tl.set(".loading-words .home-active, .loading-words .home-active-last", {
    display: "block",
    opacity: 0,
  });

  tl.set(".loading-words .home-active-first", {
    opacity: 1,
  });

  if (innerWidth > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh",
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    });
  }

  tl.set("html", {
    cursor: "wait",
  });

  tl.set("body", { overflowY: "hidden" });

  tl.to(".loading-words", {
    duration: 0.8,
    opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: 0.5,
  });

  tl.to(
    ".loading-words .home-active",
    {
      duration: 0.01,
      opacity: 1,
      stagger: 0.15,
      ease: "none",
      onStart: homeActive,
    },
    "=-.4"
  );

  function homeActive() {
    gsap.to(".loading-words .home-active", {
      duration: 0.01,
      opacity: 0,
      stagger: 0.15,
      ease: "none",
      delay: 0.15,
    });
  }

  tl.to(".loading-words .home-active-last", {
    duration: 0.01,
    opacity: 1,
    delay: 0.15,
  });

  tl.to(".loading-screen", {
    duration: 0.8,
    top: "-100%",
    ease: "Power4.easeInOut",
    delay: 0.2,
  });

  tl.to(
    ".loading-screen .rounded-div-wrap.bottom",
    {
      duration: 1,
      height: "0vh",
      ease: "Power4.easeInOut",
    },
    "=-.8"
  );

  tl.to(
    ".loading-words",
    {
      duration: 0.3,
      opacity: 0,
      ease: "linear",
    },
    "=-.8"
  );

  tl.set(".loading-screen", {
    top: "calc(-100%)",
  });

  tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "0vh",
  });

  tl.to(
    "main .once-in",
    {
      duration: 1.5,
      y: "0vh",
      stagger: 0.07,
      ease: "Expo.easeOut",
      clearProps: true,
    },
    "=-.8"
  );

  tl.set(
    "html",
    {
      cursor: "auto",
    },
    "=-1.2"
  );

  tl.set("body", { overflowY: "scroll" }, "-=2");
}

// Animation - First Page Load
function initLoader() {
  var tl = gsap.timeline();

  tl.set(".loading-screen", {
    top: "0",
  });

  if (innerWidth > 540) {
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh",
    });
  }

  tl.set(".loading-words", {
    opacity: 1,
    y: -50,
  });

  if (innerWidth > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh",
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    });
  }

  tl.set("html", {
    cursor: "wait",
  });

  tl.to(".loading-screen", {
    duration: 0.8,
    top: "-100%",
    ease: "Power4.easeInOut",
    delay: 0.5,
  });

  tl.to(
    ".loading-screen .rounded-div-wrap.bottom",
    {
      duration: 1,
      height: "0vh",
      ease: "Power4.easeInOut",
    },
    "=-.8"
  );

  tl.to(
    ".loading-words",
    {
      duration: 0.3,
      opacity: 0,
      ease: "linear",
    },
    "=-.8"
  );

  tl.set(".loading-screen", {
    top: "calc(-100%)",
  });

  tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "0vh",
  });

  tl.to(
    "main .once-in",
    {
      duration: 1,
      y: "0vh",
      stagger: 0.05,
      ease: "Expo.easeOut",
      clearProps: "true",
    },
    "=-.8"
  );

  tl.set(
    "html",
    {
      cursor: "auto",
    },
    "=-.8"
  );
}

// Animation - Page transition In
function pageTransitionIn() {
  var tl = gsap.timeline();

  tl.set("body", { overflowY: "hidden" });

  tl.set(".loading-screen", {
    top: "100%",
  });

  tl.set(".loading-words", {
    opacity: 0,
    y: 0,
  });

  tl.set("html", {
    cursor: "wait",
  });

  if (innerWidth > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh",
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    });
  }

  tl.to(".loading-screen", {
    duration: 0.5,
    top: "0%",
    ease: "Power4.easeIn",
  });

  if (innerWidth > 540) {
    tl.to(
      ".loading-screen .rounded-div-wrap.top",
      {
        duration: 0.4,
        height: "10vh",
        ease: "Power4.easeIn",
      },
      "=-.5"
    );
  } else {
    tl.to(
      ".loading-screen .rounded-div-wrap.top",
      {
        duration: 0.4,
        height: "10vh",
        ease: "Power4.easeIn",
      },
      "=-.5"
    );
  }

  tl.to(".loading-words", {
    duration: 0.8,
    opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: 0.05,
  });

  tl.set(".loading-screen .rounded-div-wrap.top", {
    height: "0vh",
  });

  tl.to(
    ".loading-screen",
    {
      duration: 0.8,
      top: "-100%",
      ease: "Power3.easeInOut",
    },
    "=-.2"
  );

  tl.to(
    ".loading-words",
    {
      duration: 0.6,
      opacity: 0,
      ease: "linear",
    },
    "=-.8"
  );

  tl.to(
    ".loading-screen .rounded-div-wrap.bottom",
    {
      duration: 0.85,
      height: "0",
      ease: "Power3.easeInOut",
    },
    "=-.6"
  );

  tl.set(
    "html",
    {
      cursor: "auto",
    },
    "=-0.6"
  );

  if (innerWidth > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh",
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    });
  }

  tl.set(".loading-screen", {
    top: "100%",
  });

  tl.set(".loading-words", {
    opacity: 0,
  });
}

// Animation - Page transition Out
function pageTransitionOut() {
  var tl = gsap.timeline();

  if (innerWidth > 540) {
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "20vh",
    });
  }

  tl.set(
    "html",
    {
      cursor: "auto",
    },
    "=-.8"
  );

  tl.to("main .once-in", {
    duration: 1,
    y: "0vh",
    stagger: 0.05,
    ease: "Expo.easeOut",
    delay: 0.8,
    clearProps: "true",
  });

  tl.set("body", { overflowY: "scroll" }, "-=2");
}
