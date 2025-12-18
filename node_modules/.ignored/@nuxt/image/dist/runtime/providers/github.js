import { encodeQueryItem, joinURL } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const operationsGenerator = createOperationsGenerator({
  joinWith: "&",
  formatter: (key, value) => encodeQueryItem(key, value)
});
export default defineProvider({
  getImage: (src, { modifiers, baseURL = "https://avatars.githubusercontent.com/" }) => {
    let size = 460;
    if (modifiers?.width || modifiers?.height) {
      size = Math.max(modifiers?.height ?? 0, modifiers?.width ?? 0);
    }
    const operations = operationsGenerator({
      v: 4,
      s: size
    });
    return {
      url: joinURL(baseURL, src + "?" + operations)
    };
  }
});
