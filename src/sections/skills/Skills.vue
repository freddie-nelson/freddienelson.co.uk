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

      <svg class="curve desktop" viewBox="0 0 316 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M88.8575 232.536C4.89816 330.392 -4.43065 398.285 1.39986 420C82.9688 420 210.435 419.629 315.086 419.486V0.0405273L139.441 0.0810872C157.563 36.7928 172.817 134.68 88.8575 232.536Z"/>
      </svg>
      <svg preserveAspectRatio="xMinYMax meet" class="curve mobile" width="1420" height="231" viewBox="0 0 1420 231" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M633.867 65.1443C302.988 3.59095 73.4229 -3.24832 -6.108e-05 1.02622C-6.3694e-05 60.8271 1.25335 154.277 1.73687 231L1420 231L1419.86 102.229C1295.73 115.515 964.746 126.698 633.867 65.1443Z" fill="#2CB978"/>
      </svg>

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
  background-color: var(--bg-lighter);
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
      color: var(--heading-light);
      font-size: 2.5rem;
      margin-bottom: 8px;
    }

    p {
      font: var(--para-sans);
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

    .curve {
      height: 100%;
      left: -170px;
      top: 0;
      position: absolute;
      z-index: -1;
      display: none;

      &.desktop {
        display: block;
      }

      path {
        fill: var(--accent-dark);
        height: 100%;
      }
    }

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

      .curve {
        left: -1px !important;
        width: calc(100% + 1px) !important;
        top: -150px !important;
        margin-left: 0;

        &.desktop {
          display: none;
        }

        &.mobile {
          display: block;
        }

        path {
          height: unset;
          width: 100%;
        }
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
      font-family: var(--sans);
      font-size: 1rem;
      width: 100%;
      margin-bottom: 20px;
    }

    .input {
      width: 95%;
      display: flex;
      border-radius: 6px;
      background: var(--bg-lighter);
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
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
