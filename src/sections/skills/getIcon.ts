import ftl from "@iconify-icons/uil/android-alt";
import ftr from "@iconify-icons/uil/html3-alt";
import fbl from "@iconify-icons/uil/html5-alt";
import fbr from "@iconify-icons/uil/vuejs-alt";

import btl from "@iconify-icons/uil/android-alt";
import btr from "@iconify-icons/uil/html3-alt";
import bbl from "@iconify-icons/uil/html5-alt";
import bbr from "@iconify-icons/uil/vuejs-alt";

import utl from "@iconify-icons/uil/android-alt";
import utr from "@iconify-icons/uil/html3-alt";
import ubl from "@iconify-icons/uil/html5-alt";
import ubr from "@iconify-icons/uil/vuejs-alt";

export default (f: boolean, b: boolean, pos: string) => {
  if (f) {
    switch (pos) {
      case "tl":
        return ftl;
      case "tr":
        return ftr;
      case "bl":
        return fbl;
      case "br":
        return fbr;
    }
  } else if (b) {
    switch (pos) {
      case "tl":
        return btl;
      case "tr":
        return btr;
      case "bl":
        return bbl;
      case "br":
        return bbr;
    }
  } else {
    switch (pos) {
      case "tl":
        return utl;
      case "tr":
        return utr;
      case "bl":
        return ubl;
      case "br":
        return ubr;
    }
  }
};
