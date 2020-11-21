<template>
  <section class="skills">
    <div class="buttons">
      <skill-btn text="Frontend" :selected="frontend" @click="changeSkill" />
      <skill-btn text="Backend" :selected="backend" @click="changeSkill" />
      <skill-btn text="UI Design" :selected="ui" @click="changeSkill" />
    </div>
    <div class="main">
      <div class="icons">
        <Icon :icon="icons.tl" />
        <Icon :icon="icons.tr" />
        <Icon :icon="icons.bl" />
        <Icon :icon="icons.br" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Button from "./components/Button.vue";

import { Icon } from "@iconify/vue";
import getIcon from "./getIcon";

import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Skills",
  components: {
    "skill-btn": Button,
    Icon
  },
  setup() {
    const frontend = ref(true);
    const backend = ref(false);
    const ui = ref(false);

    const changeSkill = (e: any) => {
      const text = e.srcElement.innerText;

      frontend.value = false;
      backend.value = false;
      ui.value = false;
      
      if (text === "Frontend") {
        frontend.value = true;
      } else if (text === "Backend") {
        backend.value = true;
      } else {
        ui.value = true;
      }
    }

    return {
      frontend,
      backend,
      ui,
      changeSkill,
      icons: {
        tl: computed(() => getIcon(frontend.value, backend.value, "tl")),
        tr: computed(() => getIcon(frontend.value, backend.value, "tr")),
        bl: computed(() => getIcon(frontend.value, backend.value, "bl")),
        br: computed(() => getIcon(frontend.value, backend.value, "br"))
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
  margin-top: -200px;
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
