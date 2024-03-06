<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";

import Curve from "./components/Curve.vue";
import Card from "./components/Card.vue";

// project images
const blaze2dImage: string = require("../../assets/blaze2d.webp");
const unoImage: string = require("../../assets/uno.webp");
const haggisImage: string = require("../../assets/haggis-lang.webp");
const smmImage: string = require("../../assets/scoot-map-manager.webp");
const sliderImage: string = require("../../assets/vue3-slider.webp");
const shortyImage: string = require("../../assets/shorty.lol.webp");

export default defineComponent({
  name: "Projects",
  components: {
    Curve,
    Card,
  },
  setup() {
    const scuffedUnoPlays = ref(2800000);
    const fetchScuffedUnoPlays = async () => {
      scuffedUnoPlays.value = await fetch(
        "https://gist.githubusercontent.com/freddie-nelson/3fbffb9c94575acd9aac4d1c58b8b8d0/raw/scuffed-uno-stats.json"
      )
        .then(async (res) => (await res.json()).totalVisits)
        .catch((err) => (console.log(err), {}));
    };
    onBeforeMount(fetchScuffedUnoPlays);

    return {
      scuffedUnoPlays,

      haggisImage,
      blaze2dImage,
      unoImage,
      shortyImage,
      sliderImage,
      smmImage,
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
          :description="`A web game based on the card game UNO with ${scuffedUnoPlays
            .toString()
            .replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ','
            )} plays. Built with VueJS and SocketIO.`"
          code="https://github.com/freddie-nelson/scuffed-uno"
          hideCode
          site="https://scuffeduno.online/"
          :image="unoImage"
        />

        <card
          name="Shorty"
          description="A simple URL shortener and tracker with accounts. Built with React, Express and MySQL."
          code="https://github.com/freddie-nelson/shorty.lol"
          site="https://shortyranout.com/"
          :image="shortyImage"
        />

        <card
          name="SCOOT Map Manager"
          description="A tool that helps you manage your maps for the game SCOOT and lets you upload or download maps."
          code="https://github.com/freddie-nelson/scoot-map-manager"
          site="https://scootmaps.club"
          :image="smmImage"
        />

        <card
          name="Haggis Lang"
          description="An interpreter for 'haggis', a reference language originally created for use in exam questions."
          code="https://github.com/freddie-nelson/haggis-lang"
          site="https://haggislang.org/"
          :image="haggisImage"
        />

        <card
          name="Vue 3 Slider"
          description="A custom horizontal, vertical and circular slider for Vue 3 with 5,000+ npm downloads."
          code="https://github.com/freddie-nelson/vue3-slider"
          site="https://freddie-nelson.github.io/vue3-slider/"
          :image="sliderImage"
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
