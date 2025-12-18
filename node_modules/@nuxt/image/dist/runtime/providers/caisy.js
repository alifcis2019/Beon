import { joinURL } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    width: "w",
    height: "h",
    quality: "q"
  }
});
export default defineProvider({
  getImage: (src, { modifiers }) => {
    const operations = operationsGenerator(modifiers);
    return {
      url: joinURL(src + (operations ? "?" + operations : ""))
    };
  }
});
