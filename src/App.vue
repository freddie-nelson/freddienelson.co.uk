<template>
  <mobile-menu :showMenu="showMenu" @close-menu="showMenu = false" />
  <navbar @show-menu="showMenu = true" />
  <hero />
  <skills />
  <about />
</template>

<script lang="ts">
// import sections
import MobileMenu from "./components/MobileMenu.vue";
import Navbar from "./sections/nav/Nav.vue";
import Hero from "./sections/hero/Hero.vue";
import Skills from "./sections/skills/Skills.vue";
import About from "./sections/about/About.vue";

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    MobileMenu,
    Navbar,
    Hero,
    Skills,
    About
  },
  data() {
    return {
      showMenu: false
    }
  },
  watch: {
    showMenu(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Merriweather:wght@300&display=swap');

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
  // colors
  --bg-dark: #0B0808;
  --bg-light: #F5F5F5;
  --accent-dark: #2CB978;
  --accent-light: #83E85A;
  --heading-dark: #FFFFFF;
  --heading-light: #000000;
  --para-dark: rgba(245, 245, 245, 0.65);
  --para-light: rgba(0, 0, 0, 0.65);
  --placeholder: #C4C4C4;

  // fonts
  --page-title: 900 max(4.2vw, 2.8rem) "Lato", "Arial", sans-serif;
  --page-subtitle: 300 max(1.3vw, 1.2rem)/1.55 "Merriweather", serif;
  --heading: 700 3.375rem "Lato", "Arial", sans-serif;
  --heading-bolder: 900 3.375rem "Lato", "Arial", sans-serif;
  --para: 300 1rem/1.55 "Merriweather", serif;
  --para-small: 300 0.875rem/1.55 "Merriweather", serif;

  // spacing
  --side-padding: min(11vw, 250px);

  // skills section
  --skills-btn-bg: #eeeeee;
  --skills-btn-text: #4d4d4d;
  --skills-btn-selected-bg: #FFECF1;
  --skills-btn-selected-text: #FF1F5A;

  // responsive variables
  @media screen and (max-width: 700px) {
    --side-padding: 3vw;
    --page-title: 900 max(4.2vw, 2.8rem)/.95 "Lato", "Arial", sans-serif;
    --page-subtitle: 300 max(1.3vw, 1.02rem)/1.45 "Merriweather", serif;
  }
}
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  
  section, nav {
    padding: 0 var(--side-padding);
  }
}
</style>
