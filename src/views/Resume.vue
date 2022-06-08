<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

import { Icon } from "@iconify/vue";
import downloadIcon from "@iconify-icons/tabler/download";
import emailIcon from "@iconify-icons/tabler/mail";
import linkedInIcon from "@iconify-icons/tabler/brand-linkedin";
import siteIcon from "@iconify-icons/tabler/world";
import phoneIcon from "@iconify-icons/tabler/phone";
import githubIcon from "@iconify-icons/tabler/brand-github";
import twitterIcon from "@iconify-icons/tabler/brand-twitter";

export default defineComponent({
  name: "Resume",
  components: {
    Icon,
  },
  setup() {
    // window.addEventListener("resize", () => {
    //   const e = document.querySelector(".resume");
    //   if (e) console.log(e.clientWidth / e.clientHeight);
    // });

    const resume = ref<HTMLElement>();

    const scaleResumeContent = () => {
      if (!resume.value) return;

      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.width = "210mm";
      div.style.pointerEvents = "none";
      document.body.append(div);

      const maxWidth = div.getBoundingClientRect().width;
      document.body.removeChild(div);

      const rect = resume.value.getBoundingClientRect();
      const scale = rect.width / maxWidth;

      const content = document.querySelector(
        ".resume .content"
      ) as HTMLDivElement;
      if (content) content.style.transform = `scale(${scale})`;
    };

    onMounted(() => {
      scaleResumeContent();
      window.addEventListener("resize", scaleResumeContent);
    });
    onUnmounted(() => window.removeEventListener("resize", scaleResumeContent));

    return {
      resume,

      icons: {
        download: downloadIcon,
        email: emailIcon,
        linkedIn: linkedInIcon,
        site: siteIcon,
        phone: phoneIcon,
        github: githubIcon,
        twitter: twitterIcon,
      },
    };
  },
});
</script>

<template>
  <div class="resume-container">
    <div class="top-bar">
      <router-link to="/" class="link">Freddie Nelson</router-link>

      <a class="download-btn" href="/freddie-nelson-resume.pdf">
        <Icon :icon="icons.download" />
        Download as PDF
      </a>
    </div>

    <article class="resume" ref="resume">
      <div class="content">
        <header>
          <h1>Freddie Nelson</h1>

          <div class="contacts">
            <a class="contact" href="mailto:freddie0208@hotmail.com">
              <Icon :icon="icons.email" />
              <p>freddie0208@hotmail.com</p>
            </a>

            <a class="contact" href="https://freddienelson.co.uk">
              <Icon :icon="icons.site" />
              <p>freddienelson.co.uk</p>
            </a>

            <a class="contact" href="tel:+447452989421">
              <Icon :icon="icons.phone" />
              <p>+44 7452 989421</p>
            </a>

            <!-- <a class="contact" href="https://twitter.com/freddie_dev">
              <Icon :icon="icons.twitter" />
              <p>@freddie_dev</p>
            </a>

            <a class="contact" href="https://github.com/freddie-nelson">
              <Icon :icon="icons.github" />
              <p>@freddie-nelson</p>
            </a> -->
          </div>
        </header>

        <section>
          <div class="title">
            <h1>Education</h1>
          </div>

          <div class="body">
            <h2><strong>St Ninian's High School, </strong> 2016 - 2022</h2>
            <p style="margin-left: 2rem">
              <strong>Highers:</strong> Maths (A), English (A), Computing
              Science (A), Physics (A), Geography (A)
            </p>

            <p style="margin-left: 2rem">
              <strong>N5s:</strong> Maths (A), English (A), Computing Science
              (A), Physics (A), Geography (A), Art and Design (A), Design and
              Manufacture (A), French (B)
            </p>

            <p style="margin-left: 2rem">
              <strong>NPAs:</strong> Cyber Security SCQF Level 6, Computer Games
              Development SCQF Level 6
            </p>
          </div>
        </section>

        <section class="skills">
          <div class="title">
            <h1>Skills</h1>
          </div>

          <div class="body">
            <p>
              <strong>Programming Languages: </strong>
              HTML, CSS/SCSS, JavaScript/TypeScript, PHP, SQL, GoLang, C, Visual
              Basic
            </p>

            <p>
              <strong>Technologies: </strong> Vue.js, Node.js, Express.js,
              Electron.js, Socket.IO, Three.js, Firebase, MongoDB, MySQL
            </p>

            <p>
              <strong>Tools: </strong> Git, Github, Digitalocean, Docker,
              Netlify, Heroku, Figma, Photoshop, Trello
            </p>
          </div>
        </section>

        <section>
          <div class="title">
            <h1>Projects</h1>
          </div>

          <div class="body">
            <h2>
              <strong>Scuffed Uno </strong>
              <a href="https://scuffeduno.online">(live site)</a>
            </h2>
            <ul>
              <li>
                A web game based on the card game UNO with over 50,000 monthly
                players
              </li>
              <li>
                Created custom 3D models and animations with Three.js and
                Tween.js
              </li>
              <li>
                Implemented a live chat utilizing websockets based on user
                feedback
              </li>
              <li>
                Cooperated with a game advertising agency to monetize the site
              </li>
            </ul>

            <h2 style="margin-top: 0.5rem">
              <strong>Haggis Lang </strong>
              <a href="https://github.com/freddie-nelson/haggis-lang">
                (code)
              </a>
              <a href="https://haggislang.org"> (live site)</a>
            </h2>
            <ul>
              <li>
                An interpreter for 'haggis', a reference language originally
                created for use in SQA exam questions
              </li>
              <li>
                Handwritten scanner and recursive descent parser following
                original language spec
              </li>
              <li>
                Implemented type checker and semantic analysis stages to ensure
                input code is valid
              </li>
              <li>
                Built a web playground complete with syntax highlighting and
                input/output in Vue.js
              </li>
            </ul>

            <h2 style="margin-top: 0.5rem">
              <strong>Blaze 2D </strong>
              <a href="https://github.com/freddie-nelson/blaze-2d">(code) </a>
              <a href="https://blaze2d.netlify.app">(live site)</a>
            </h2>
            <ul>
              <li>
                A 2D WebGL 2 game engine written from scratch in TypeScript
              </li>
              <li>
                Custom physics engine for dynamics, collisions and constraints
                simulation
              </li>
              <li>
                Implemented SPH and metaball rendering for fast 2D fluid
                simulation
              </li>
              <li>
                Developed a batch renderer with automatic texture swapping and
                atlas building
              </li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.resume-container {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--bg-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  color: #000;

  .top-bar {
    display: flex;
    margin: 1.5rem 0;
    justify-content: space-between;
    align-items: center;
    width: 95vw;
    max-width: 210mm;
  }
}

.link {
  font: var(--heading);
  color: var(--heading-dark);
  font-size: 1.3rem;
  position: relative;

  &:hover {
    &::before {
      width: calc(100% + 20px);
    }
  }

  &::before {
    content: "";
    position: absolute;
    background-color: var(--accent-dark);
    top: calc(49%);
    left: -10px;
    border-radius: 2px;
    transition: width 0.2s ease;
    height: 4px;
    width: 0px;
  }
}

.resume {
  --width: 95vw;
  margin-bottom: calc((100vw - var(--width)) / 2);
  width: var(--width);
  max-width: 210mm;
  height: calc(297 / 210 * var(--width));
  max-height: 297mm;
  background: #fcf9f4;
  border-radius: 0.3rem;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .content {
    width: 210mm;
    height: 297mm;
    position: absolute;
    overflow: hidden;
    padding: 2%;

    // * {
    //   font-family: "Times New Roman", Times, serif;
    // }
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 100%;

    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 1.8rem;
      opacity: 0.4;
    }

    .contacts {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      gap: 1rem 0.5rem;
      margin-top: 0.6rem;

      .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        vertical-align: middle;
        text-align: center;

        svg {
          width: 1.4rem;
          height: 1.4rem;
          transition: color 0.2s ease;
        }

        &:hover {
          svg {
            color: #7f22fd;
          }
        }
      }
    }
  }

  section {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    padding: 0;

    .title {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 2px;
      background: #00000056;
      margin-bottom: 1rem;

      h1 {
        position: absolute;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 0 1rem;
        background: #fcf9f4;
      }
    }

    .body {
      a {
        font-style: italic;
        color: #7f22fd;
      }

      h2 {
        font-size: 1.1rem;
      }

      ul {
        list-style-type: disc;
        padding-left: 2rem;
      }
    }
  }
}

.download-btn {
  display: flex;
  justify-items: center;
  align-items: center;
  background: var(--accent-dark);
  border-radius: 0.3rem;
  padding: 1rem;
  gap: 0.3rem;
  transition: background 0.3s ease;
  outline: none !important;
  color: var(--bg-dark);

  &:hover {
    background: var(--accent-light);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>