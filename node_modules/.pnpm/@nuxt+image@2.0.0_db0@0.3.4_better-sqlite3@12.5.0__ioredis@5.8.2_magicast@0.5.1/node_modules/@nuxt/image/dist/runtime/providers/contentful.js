import { withBase, parseURL } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const contentfulCDN = "https://images.ctfassets.net";
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "fm",
    width: "w",
    height: "h",
    focus: "f",
    radius: "r",
    quality: "q",
    background: "bg"
  },
  valueMap: {
    format: {
      jpeg: "jpg"
    },
    fit: {
      cover: "crop",
      contain: "fill",
      fill: "scale",
      thumbnail: "thumb"
    }
  }
});
export default defineProvider({
  getImage: (src, { modifiers, baseURL = contentfulCDN }) => {
    const operations = operationsGenerator(modifiers);
    const { pathname } = parseURL(src);
    const path = pathname + (operations ? "?" + operations : "");
    const url = withBase(path, baseURL);
    return {
      url
    };
  }
});
