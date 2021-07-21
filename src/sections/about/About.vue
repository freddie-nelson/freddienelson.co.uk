<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<template>
  <section id="about">
    <h1>Hi, I'm <span class="highlight">Freddie Nelson</span></h1>

    <p>I’m a 16 year old student from Scotland who loves a challenge. I have always had an interest in tech but once I got my first taste of programming at school I fell in love and have been hooked ever since. 
      I currently enjoy working with <a href="https://vuejs.org" class="highlight">Vue</a> for frontend apps and <a href="https://nodejs.org" class="highlight">Nodejs</a> for the backend, 
      however I am also looking into <a href="https://golang.org" class="highlight">Golang</a> as a more performant alternative to <a href="https://nodejs.org" class="highlight">Nodejs</a>.
    </p>

    <p>
      Aside from programming I also enjoy

      <ul class="list">
        <li>- Music</li>
        <li>- Scootering</li>
        <li>- Video Games</li>
      </ul>
    </p>
  </section>
</template>

<style lang="scss" scoped>
#about {
  width: 100%;
  background-color: var(--bg-light);
  padding-top: calc(min(13rem, 30vw));
  padding-bottom: calc(min(13rem, 30vw));
  --spacing: 1.5rem;

  h1 {
    font: var(--heading);
    margin-bottom: var(--spacing);
    color: var(--heading-light);

    span {
      display: inline-block;
    }
  }

  p {
    font: var(--para-sans);
    font-size: 1.15rem;
    color: var(--para-light);

    &:first-of-type {
      margin-bottom: var(--spacing);
    }
  }

  .list {
    margin: var(--spacing) 0 0 var(--spacing);
    font: var(--para-sans);
    font-size: 1.15rem;
    color: var(--para-light);
  }

  .highlight {
    color: var(--accent-dark);

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
