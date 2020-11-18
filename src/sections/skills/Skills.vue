<template>
  <section class="skills">
    <div class="buttons">
      <skill-btn text="Frontend" :selected="frontend" @click="changeSkill" />
      <skill-btn text="Backend" :selected="backend" @click="changeSkill" />
      <skill-btn text="UI Design" :selected="ui" @click="changeSkill" />
    </div>
  </section>
</template>

<script lang="ts">
import Button from "./components/Button.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
  components: {
    "skill-btn": Button
  },
  data() {
    return {
      frontend: true,
      backend: false,
      ui: false
    }
  },
  methods: {
    changeSkill(e: any) {
      const text = e.srcElement.innerText;

      this.frontend = false;
      this.backend = false;
      this.ui = false;
      
      if (text === "Frontend") {
        this.frontend = true;
      } else if (text === "Backend") {
        this.backend = true;
      } else {
        this.ui = true;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.skills {
  width: calc(100% - var(--side-padding) * 2);
  height: 400px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  padding: 19px 45px 25px 45px !important;
  margin: 0 var(--side-padding);
  margin-top: -180px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 25px 50px rgba(0, 0, 0, 0.09);

  .buttons {
    display: flex;
    flex-wrap: wrap;

    :nth-child(2) {
      margin: 6px 2%;

      @media screen and (max-width: 566px) {
        margin-right: 0px;
      }

      @media screen and (max-width: 413px) {
        margin-left: 0px;
        min-width: 160px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
