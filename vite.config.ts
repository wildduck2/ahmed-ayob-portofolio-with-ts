import { defineConfig } from "vite";

export default defineConfig({
  base: "/ahmed-ayob-TheVimagen/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        about: "./about.html",
        works: "./works.html",
        contact: "./contact.html",
      },
    },
  },
});
