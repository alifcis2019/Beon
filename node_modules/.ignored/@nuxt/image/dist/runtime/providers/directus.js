import { joinURL } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const operationsGenerator = createOperationsGenerator();
export default defineProvider({
  getImage: (src, { modifiers, baseURL }) => {
    const transforms = modifiers.transforms && Array.isArray(modifiers.transforms) && modifiers.transforms.length > 0 ? JSON.stringify(Array.from(new Set(modifiers.transforms.map((obj) => JSON.stringify(obj)))).map((value) => JSON.parse(value))) : void 0;
    const operations = operationsGenerator({
      ...modifiers,
      transforms
    });
    return {
      url: joinURL(baseURL, src + (operations ? "?" + operations.replace(/=+$/, "") : ""))
    };
  }
});
