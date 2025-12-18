import { withBase, withoutLeadingSlash } from "ufo";
import { defineProvider } from "../utils/provider.js";
export default defineProvider({
  validateDomains: true,
  getImage: (src, { modifiers, baseURL = "http://localhost:1337/uploads" }) => {
    const breakpoint = modifiers?.breakpoint ?? "";
    if (!breakpoint) {
      return {
        url: withBase(src, baseURL)
      };
    }
    return {
      url: withBase(`${breakpoint}_${withoutLeadingSlash(src)}`, baseURL)
    };
  }
});
