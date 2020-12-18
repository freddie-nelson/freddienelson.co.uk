<script lang="ts">
// import sections
import MobileMenu from "./components/MobileMenu.vue";
import Navbar from "./sections/nav/Nav.vue";
import Hero from "./sections/hero/Hero.vue";
import Skills from "./sections/skills/Skills.vue";
import About from "./sections/about/About.vue";
import Projects from "./sections/projects/Projects.vue";
import Contact from "./sections/contact/Contact.vue";
import Footer from "./sections/footer/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    MobileMenu,
    Navbar,
    Hero,
    Skills,
    About,
    Projects,
    Contact,
    "page-footer": Footer
  },
  data() {
    return {
      showMenu: false
    }
  },
  watch: {
    showMenu(val: boolean) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }
});
</script>

<template>
  <mobile-menu :showMenu="showMenu" @close-menu="showMenu = false" />
  <navbar @show-menu="showMenu = true" />
  <hero />
  <skills />
  <about />
  <projects />
  <contact />
  <page-footer />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Merriweather:wght@300&display=swap");

// fluid font change
html {
  font-size: 13px;
  scroll-behavior: smooth;
}

@media screen and (min-width: 320px) {
  html {
    font-size: calc(13px + 3 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 1000px) {
  html {
    font-size: 16px;
  }
}

:root {
  /* colors start */
  --bg-dark: #0B0808;
  --bg-light: #F5F5F5;
  --bg-lighter: #FFFFFF;
  --accent-dark: #2CB978;
  --accent-light: #83E85A;
  --heading-dark: #FFFFFF;
  --heading-light: #000000;
  --para-dark: rgba(245, 245, 245, 0.65);
  --para-light: rgba(0, 0, 0, 0.8);
  --placeholder: #C4C4C4;

  //  skills section
  --skills-btn-bg: #eeeeee;
  --skills-btn-text: #4d4d4d;
  --skills-btn-selected-bg: #FFECF1;
  --skills-btn-selected-text: #FF1F5A;
  /* colors end */

  /* dark colors start */
  @media (prefers-color-scheme: dark) {
    --bg-dark: #0c0c0c;
    --bg-light: #121212;
    --bg-lighter: #181818;
    --accent-dark: #7F22FD;
    --accent-light: #985EFF;
    --heading-dark: #E2E2E2;
    --heading-light: #CBCBCB;
    --para-dark: rgba(245, 245, 245, 0.65);
    --para-light:rgba(245, 245, 245, 0.4);
    --placeholder: #C4C4C4;

    //  skills section
    --skills-btn-bg: #252525;
    --skills-btn-text: #bbbbbb;
    --skills-btn-selected-bg: #005457;
    --skills-btn-selected-text: #03DAC5;
  }
  /* dark colors end */

  // fonts
  --sans: "Lato", "Arial", sans-serif;
  --serif: "Merriweather", serif;
  --page-title: 900 max(4.2vw, 2.8rem) var(--sans);
  --page-subtitle: 300 max(1.3vw, 1.2rem)/1.55 var(--serif);
  --heading: 700 3.375rem var(--sans);
  --heading-bolder: 900 3.375rem var(--sans);
  --para: 300 1rem/1.55 var(--serif);
  --para-sans: 400 1rem/1.55 var(--sans);
  --para-small: 300 0.875rem/1.55 var(--serif);

  // spacing
  --side-padding: min(12vw, 250px);

  // responsive variables
  @media screen and (max-width: 700px) {
    --side-padding: 3vw;
    --page-title: 900 max(4.2vw, 2.8rem)/.95 var(--sans);
    --page-subtitle: 300 max(1.3vw, 1.02rem)/1.45 var(--serif);
  }
}

* {
  font-family: var(--sans);
}

// a:focus, button:focus {
//   outline: 2px solid var(--accent-dark) !important;
// }

#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: var(--bg-light);
}

section, nav {
  padding: 0 var(--side-padding);
}
</style>
