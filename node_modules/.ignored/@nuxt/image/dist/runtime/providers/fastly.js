import { joinURL } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const operationsGenerator = createOperationsGenerator({
  valueMap: {
    fit: {
      fill: "crop",
      inside: "crop",
      outside: "crop",
      cover: "bounds",
      contain: "bounds"
    }
  }
});
export default defineProvider({
  getImage: (src, { modifiers, baseURL = "/" }) => {
    const operations = operationsGenerator(modifiers);
    return {
      url: joinURL(baseURL, src + (operations ? "?" + operations : ""))
    };
  }
});
