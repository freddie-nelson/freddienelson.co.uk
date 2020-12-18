<script lang="ts">
import InputBox from "./components/InputBox.vue";
import { Icon } from "@iconify/vue";

// social icons 
import twitter from "@iconify-icons/line-md/twitter";
import email from "@iconify-icons/line-md/email";
import github from "@iconify-icons/line-md/github";
import linkedIn from "@iconify-icons/line-md/linkedin";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
  components: {
    InputBox,
    Icon
  },
  data() {
    return {
      email: "",
      subject: "",
      message: "",
      icons: {
        twitter,
        email,
        github,
        linkedIn
      }
    }
  }
});
</script>

<template>
  <section id="contact">
    <div class="heading">
      <div class="line" />
      <h1>Contact Me</h1>
      <div class="line" />
    </div>

    <div class="social">
      <a href="https://twitter.com/freddie_dev" target="_blank" rel="noopener">
        <icon :icon="icons.twitter" />
      </a>
      <a href="mailto:freddie0208@hotmail.com">
        <icon :icon="icons.email" class="email" />
      </a>
      <a href="https://github.com/freddie-nelson" target="_blank" rel="noopener">
        <icon :icon="icons.github" />
      </a>
      <a href="https://www.linkedin.com/in/freddie-nelson-19a62515a/" target="_blank" rel="noopener">
        <icon :icon="icons.linkedIn" />
      </a>
    </div>
    
    <form name="contact" method="POST" netlify>
      <input-box v-model="email" label="Email" type="email" />
      <input-box v-model="subject" label="Subject" type="text" />
      <input-box v-model="message" label="Message" :textarea="true" />

      <button class="submit-btn" type="submit">Send Message</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
#contact {
  margin: calc(max(6rem, 15vh)) 0;
  display: flex;
  flex-direction: column;
  color: var(--heading-light);

  .heading {
    width: 100%;
    display: flex;
    align-items: center;

    h1 {
      font: var(--heading);
      padding: 0 1.8rem;
    }

    .line {
      flex-grow: 1;
      height: 4px;
      border-radius: 2px;
      background-color: var(--heading-light);
    }
  }

  .social {
    display: flex;
    width: 100%;
    max-width: 20rem;
    justify-content: space-between;
    margin: 1rem auto;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      color: var(--heading-light);
      transition: color .2s ease;
      outline: none;
      
      &.email {
        stroke: var(--heading-light);
      }

      &:hover, &:focus {
        color: var(--accent-dark);
      }
    }
  }

  .submit-btn {
    float: right;
    padding: .5rem .9rem;
    background-color: var(--accent-dark);
    border-radius: .4rem;
    color: var(--heading-dark);
    font-weight: bold;
    margin-top: 1rem;
    outline: none;
    transition: background-color .3s ease;

    &:hover, &:focus {
      background-color: var(--accent-light);
    }
  }
}
</style>
