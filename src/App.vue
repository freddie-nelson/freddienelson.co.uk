<template>
  <hero />
</template>

<script lang="ts">
// import sections
import Hero from "./sections/hero/Hero.vue";

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Hero
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Merriweather:wght@300&display=swap');

// fluid font change
html {
  font-size: 13px;
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
  --heading: 700 3.375rem "Lato", "Arial", sans-serif;
  --heading-bolder: 900 3.375rem "Lato", "Arial", sans-serif;
  --para: 300 max(1.3vw, 1.2rem)/1.55 "Merriweather", serif;
  --para-small: 300 0.875rem/1.55 "Merriweather", serif;

  // spacing
  --side-padding: min(11vw, 250px);

  // responsive variables
  @media screen and (max-width: 700px) {
    --side-padding: 4.5vw;
    --page-title: 900 max(4.2vw, 2.8rem)/.95 "Lato", "Arial", sans-serif;
    --para: 300 max(1.3vw, 1.02rem)/1.45 "Merriweather", serif;
  }
}

#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  
  section {
    padding: 0 var(--side-padding);
  }
}
</style>
