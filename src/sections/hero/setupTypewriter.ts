const desktop = [ "JavaScript", "VueJS", "Electron", "Express", "SEO", "NodeJS", "MongoDB", "Mobile", "Capacitor", "Ionic", "Web", "HTML", "CSS" ];

export function setupTypewriterDesktop(tw: any, delay: number, pause: number) {
  tw.typeString(desktop[0]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[1]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[2]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[3]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[4]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[5]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[6]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[7]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[8]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[9]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[10]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[11]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(desktop[12]).pauseFor(delay).deleteAll().pauseFor(pause)
    .start();
}

const mobile = [ "JS", "Vue", "CSS", "Web", "App", "SEO"]

export function setupTypewriterMobile(tw: any, delay: number, pause: number) {
  tw.typeString(mobile[0]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(mobile[1]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(mobile[2]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(mobile[3]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(mobile[4]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(mobile[5]).pauseFor(delay).deleteAll().pauseFor(pause)
    .typeString(mobile[6]).pauseFor(delay).deleteAll().pauseFor(pause)
    .start();
}

