<script lang="ts">
import { defineComponent } from "vue";

import Curve from "./components/Curve.vue";
import Card from "./components/Card.vue";

// project images
const blaze2dImage: string = require("../../assets/blaze2d.webp");
const unoImage: string = require("../../assets/uno.webp");
const smmImage: string = require("../../assets/scoot-map-manager.webp");
const particleImage: string = require("../../assets/particle-sim.webp");
const sliderImage: string = require("../../assets/vue3-slider.webp");
const chessImage: string = require("../../assets/scuffed-chess.webp");

export default defineComponent({
  name: "Projects",
  components: {
    Curve,
    Card,
  },
  data() {
    return {
      smmImage,
      blaze2dImage,
      unoImage,
      chessImage,
      sliderImage,
      particleImage,
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
          name="Blaze 2D"
          description="A fast, 2D WebGL 2 game engine written from scratch in TypeScript."
          code="https://github.com/freddie-nelson/blaze-2d"
          site="https://blaze2d.netlify.app"
          :image="blaze2dImage"
        />

        <card
          name="Scuffed Uno"
          description="A web game based on the card game UNO with over 1,000,000 plays. Built with VueJS and SocketIO."
          code="https://github.com/freddie-nelson/uno"
          site="https://scuffeduno.online/"
          :image="unoImage"
        />

        <card
          name="SCOOT Map Manager"
          description="A tool that helps you manage your maps for the game SCOOT and lets you upload or download maps."
          code="https://github.com/freddie-nelson/scoot-map-manager"
          site="https://scootmaps.club"
          :image="smmImage"
        />

        <card
          name="Particle Sim"
          description="Cellular automata particle simulation with material interactions built in Typescript on HTML5 Canvas."
          code="https://github.com/freddie-nelson/js-particle-sim"
          site="https://particles.freddienelson.co.uk/"
          :image="particleImage"
        />

        <card
          name="Vue 3 Slider"
          description="A custom horizontal, vertical and circular slider for Vue 3 with 5,000+ npm downloads."
          code="https://github.com/freddie-nelson/vue3-slider"
          site="https://freddie-nelson.github.io/vue3-slider/"
          :image="sliderImage"
        />

        <card
          name="Scuffed Chess"
          description="The most themeable online multiplayer chess. Built with Vue 3 connected to a Golang backend."
          code="https://github.com/freddie-nelson/scuffed-chess"
          site="https://scuffedchess.online/"
          :image="chessImage"
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
