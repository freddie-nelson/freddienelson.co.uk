<script lang="ts">
import { defineComponent } from "vue";

import Curve from "./components/Curve.vue";
import Card from "./components/Card.vue";

// project images
const smmImage: string = require("../../assets/scoot-map-manager.webp");
const caaanvasImage: string = require("../../assets/caaanvas.webp");
const unoImage: string = require("../../assets/uno.webp");

export default defineComponent({
  name: "Projects",
  components: {
    Curve,
    Card,
  },
  data() {
    return {
      smmImage,
      caaanvasImage,
      unoImage,
    };
  },
});
</script>

<template>
  <div class="projects-container">
    <curve />

    <section id="projects">
      <h1>My Work</h1>
      <div class="underline" />

      <div class="cards">
        <card
          name="SCOOT Map Manager"
          description="A tool that helps you manage your maps for the game SCOOT and lets you upload or download maps."
          code="https://github.com/freddie-nelson/scoot-map-manager"
          site="https://scootmaps.club"
          :image="smmImage"
        />
        <card
          name="Caaanvas"
          description="An infinite canvas to store all of your ideas and inspiration, or pretty much anything else."
          code="https://github.com/freddie-nelson/caaanvas"
          site="https://github.com/freddie-nelson/caaanvas"
          :image="caaanvasImage"
        />
        <card
          name="Uno"
          description="A web version of the classic card game uno. Supports online multiplayer with up to 4 people."
          code="https://github.com/freddie-nelson/uno"
          site="https://scuffeduno.online/"
          :image="unoImage"
        />
      </div>
    </section>

    <curve class="bottom-curve" />
  </div>
</template>

<style lang="scss" scoped>
.projects-container {
  width: 100%;
}

#projects {
  background-color: var(--bg-dark);
  padding-top: 6rem;
  padding-bottom: 6rem;

  h1 {
    font: var(--heading);
    color: var(--heading-dark);
  }

  .underline {
    font: var(--heading);
    margin-top: 0.5ch;
    width: 3.5ch;
    height: 0.22ch;
    border-radius: 0.11ch;
    background-color: var(--accent-light);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2rem;
  }
}

.bottom-curve {
  transform: rotate(180deg);
  margin-top: -1px;
}
</style>
