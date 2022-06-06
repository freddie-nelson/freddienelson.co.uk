<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<template>
  <router-view />
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
  --bg-dark: #0b0808;
  --bg-light: #f5f5f5;
  --bg-lighter: #ffffff;
  --accent-dark: #2cb978;
  --accent-light: #83e85a;
  --heading-dark: #ffffff;
  --heading-light: #000000;
  --para-dark: rgba(245, 245, 245, 0.65);
  --para-light: rgba(0, 0, 0, 0.8);
  --placeholder: #c4c4c4;

  //  skills section
  --skills-btn-bg: #eeeeee;
  --skills-btn-text: #4d4d4d;
  --skills-btn-selected-bg: #ffecf1;
  --skills-btn-selected-text: #ff1f5a;
  /* colors end */

  /* dark colors start */
  @media (prefers-color-scheme: dark) {
    --bg-dark: #0c0c0c;
    --bg-light: #121212;
    --bg-lighter: #181818;
    --accent-dark: #7f22fd;
    --accent-light: #985eff;
    --heading-dark: #e2e2e2;
    --heading-light: #cbcbcb;
    --para-dark: rgba(245, 245, 245, 0.65);
    --para-light: rgba(245, 245, 245, 0.4);
    --placeholder: #c4c4c4;

    //  skills section
    --skills-btn-bg: #252525;
    --skills-btn-text: #bbbbbb;
    --skills-btn-selected-bg: #005457;
    --skills-btn-selected-text: #03dac5;
  }
  /* dark colors end */

  // fonts
  --sans: "Lato", "Arial", sans-serif;
  --serif: "Merriweather", serif;
  --page-title: 900 max(4.2vw, 2.8rem) var(--sans);
  --page-subtitle: 300 max(1.3vw, 1.2rem) / 1.55 var(--serif);
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
    --page-title: 900 max(4.2vw, 2.8rem) / 0.95 var(--sans);
    --page-subtitle: 300 max(1.3vw, 1.02rem) / 1.45 var(--serif);
  }
}

* {
  font-family: var(--sans);
}

#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: var(--bg-light);
}

section,
nav {
  padding: 0 var(--side-padding);
}
</style>
