const desktop = [
  "HTML",
  "CSS/SCSS",
  "JavaScript",
  "Typescript",
  "Vue",
  "React",
  "NodeJS",
  "ExpressJS",
  "Electron",
  "WebGL",
  "ThreeJS",
  "SQL",
  "MySQL",
  "MongoDB",
  "GoLang",
  "Docker",
  "C",
  "Visual Basic",
];

export function setupTypewriterDesktop(tw: any, delay: number, pause: number) {
  for (const tech of desktop) {
    tw = tw.typeString(tech).pauseFor(delay).deleteAll().pauseFor(pause);
  }
 
  tw.start()
}

const mobile = ["HTML", "CSS", "JS", "TS", "Vue", "React", "WebGL", "Node", "SQL"];

export function setupTypewriterMobile(tw: any, delay: number, pause: number) {
  for (const tech of mobile) {
    tw = tw.typeString(tech).pauseFor(delay).deleteAll().pauseFor(pause);
  }

  tw.start()
}
