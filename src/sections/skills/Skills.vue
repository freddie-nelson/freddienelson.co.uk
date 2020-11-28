<script lang="ts">
import Button from "./components/Button.vue";

import { Icon } from "@iconify/vue";
import getIcon from "./getIcon";
import sendIcon from "@iconify-icons/tabler/send";

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
        br: computed(() => getIcon(frontend.value, backend.value, "br")),
        send: sendIcon
      }
    }
  }
});
</script>

<template>
  <section class="skills">

    <div class="buttons">
      <skill-btn text="Frontend" :selected="frontend" @click="changeSkill" />
      <skill-btn text="Backend" :selected="backend" @click="changeSkill" />
      <skill-btn text="UI Design" :selected="ui" @click="changeSkill" />
    </div>

    <div class="main">
      <div class="icons">
        <Icon :icon="icons.tl.value" />
        <Icon :icon="icons.tr.value" />
        <Icon :icon="icons.bl.value" />
        <Icon :icon="icons.br.value" />
      </div>

      <div class="text" v-if="frontend">
        <h2>Frontend</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor et sed elit sed dignissim fermentum vulputate. 
          Pellentesque amet turpis varius habitant aliquam, pretium, sit. Sodales magna lacus quam praesent. Ipsum ac, sed tellus eu leo.
        </p>
      </div>

      <div class="text" v-else-if="backend">
        <h2>Backend</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor et sed elit sed dignissim fermentum vulputate. 
          Pellentesque amet turpis varius habitant aliquam, pretium, sit. Sodales magna lacus quam praesent. Ipsum ac, sed tellus eu leo.
        </p>
      </div>

      <div class="text" v-else>
        <h2>UI Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor et sed elit sed dignissim fermentum vulputate. 
          Pellentesque amet turpis varius habitant aliquam, pretium, sit. Sodales magna lacus quam praesent. Ipsum ac, sed tellus eu leo.
        </p>
      </div>
    </div>

    <div class="contact">
      <div class="content">
        <h2>Get in touch</h2>
        <p>Let’s talk about your ideas and build a solution together.</p>
        <div class="input">
          <input placeholder="Email..." label="email" type="text">
          <button name="Fill contact form"><Icon :icon="icons.send" /></button>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.skills {
  width: calc(100% - var(--side-padding) * 2);
  height: 420px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  padding: 19px 45px 45px 45px;
  margin: 0 var(--side-padding);
  margin-top: -210px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 25px 50px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    height: 680px;
  }

  @media screen and (max-width: 950px) {
    height: 835px;
    padding: 20px;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    z-index: 3;

    :nth-child(2) {
      margin: 6px 2%;

      @media screen and (max-width: 516px) {
        margin-right: 0px;
      }

      @media screen and (max-width: 359px) {
        margin-left: 0px;
        min-width: 160px;
      }
    }
  }

  .main {
    display: grid;
    grid-template-columns: 260px 1fr;
    flex-grow: 1;
    width: 65%;

    @media screen and (max-width: 1400px) {
      width: 100%;
      flex-grow: 0;
    }

    @media screen and (max-width: 950px) {
      grid-template-columns: 1fr;
      grid-template-rows: 260px 220px;
    }
  }

  .icons {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    // width: 18vw;
    // height: 18vw;
    // min-width: 230px;
    // min-height: 230px;
    // max-height: 290px;
    // max-width: 290px;
    width: 260px;
    height: 260px;
    color: var(--accent-dark);
    margin: auto 0;
    margin-left: 2.7%;

    svg {
      width: 50%;
      height: 50%;
      margin: auto;
    }

    @media screen and (max-width: 950px) {
      margin: auto;
      width: 280px;
      height: 280px;
    }
  }

  .text {
    margin: auto 0;
    margin-left: 5%;

    h2 {
      font: var(--heading);
      font-size: 2.5rem;
      margin-bottom: 8px;
    }

    p {
      font: var(--para);
      font-family: "Lato", "Arial", sans-serif;
      color: var(--para-light);
      line-height: 1.35;
    }
  }

  .contact {
    background-color: var(--accent-dark);
    height: 100%;
    width: 24%;
    min-width: 275px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0 20px 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    flex-direction: column;
    padding-right: 45px;

    @media screen and (max-width: 1400px) {
      width: 100%;
      height: 175px;
      border-radius: 0px 0px 20px 20px;
      padding: 45px;
      top: unset;
      bottom: 0;

      .content {
        margin-top: -5%;
      }

      &::before {
        left: -1px !important;
        width: calc(100% + 1px) !important;
        top: -150px !important;
        background-image: url("../../assets/skills-curve-mobile.svg") !important;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: left bottom;
        margin-left: 0;
      }
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h2 {
      font: var(--heading);
      font-size: 2.5rem;
      color: var(--heading-dark);
      margin-bottom: 6px;
    }

    p {
      text-align: center;
      color: var(--heading-dark);
      font-family: "Lato", "Arial", sans-serif;
      font-size: 1rem;
      width: 100%;
      margin-bottom: 20px;
    }

    .input {
      width: 95%;
      display: flex;
      border-radius: 6px;
      background: var(--heading-dark);
      padding: 6px 11px;

      input {
        font-size: 1rem;
        background: none;
        outline: none;
        width: 100%;

        &::placeholder {
          color: var(--heading-light);
          opacity: .4;
        }
      }

      button {
        color: var(--heading-light);
        opacity: .4;
        width: 24px;
        height: 24px;
        margin: 1px -3px 0px 8px;
        outline: none;
        transition: opacity .2s ease;

        svg {
          width: 100%;
          height: 100%;
          transform: scale(1.05);
        }

        &:hover {
          opacity: .8;
        }
      }
    }


    &::before {
      content: "";
      background-image: url("../../assets/skills-curve.svg");
      height: 100%;
      width: 300px;
      left: -180px;
      top: 0;
      position: absolute;
      z-index: -1;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
