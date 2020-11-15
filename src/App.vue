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
  --page-title: 900 4.5rem "Lato", "Arial", sans-serif;
  --title: 700 3.375rem "Lato", "Arial", sans-serif;
  --title-bolder: 900 3.375rem "Lato", "Arial", sans-serif;
  --para: 300 1.25rem/1.55 "Merriweather", serif;
  --para-small: 300 0.875rem/1.55 "Merriweather", serif;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
