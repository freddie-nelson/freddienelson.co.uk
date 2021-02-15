<script lang="ts">
import { defineComponent } from "vue";

import Curve from "./components/Curve.vue";
import Card from "./components/Card.vue";

// project images
const mustapImage: string = require("../../assets/mustap.webp");
const discordImage: string = require("../../assets/discord-clone.webp");
const unoImage: string = require("../../assets/uno.webp");

export default defineComponent({
  name: "Projects",
  components: {
    Curve,
    Card,
  },
  data() {
    return {
      mustapImage,
      discordImage,
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
          name="Mustap"
          description="A modern music player with many advanced features built from scratch in Vue and Typescript."
          code="https://github.com/freddie-nelson/mustap.me"
          site="https://mustap.app"
          :image="mustapImage"
        />
        <card
          name="Discord Clone"
          description="A clone of discord with all major features working. Built with Vue, Node, Express and MongoDB."
          code="https://github.com/freddie-nelson/discord-clone"
          site="https://discord-clone-freddie.herokuapp.com/"
          :image="discordImage"
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
