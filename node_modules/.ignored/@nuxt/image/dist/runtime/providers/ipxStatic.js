import { joinURL, encodePath } from "ufo";
import { operationsGenerator } from "./ipx.js";
import { defineProvider } from "../utils/provider.js";
export default defineProvider({
  validateDomains: true,
  supportsAlias: true,
  getImage(src, { modifiers, baseURL }, ctx) {
    if (modifiers.width && modifiers.height) {
      modifiers.resize = `${modifiers.width}x${modifiers.height}`;
      delete modifiers.width;
      delete modifiers.height;
    }
    const params = operationsGenerator(modifiers) || "_";
    if (!baseURL) {
      baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
    }
    return {
      url: joinURL(baseURL, params, encodePath(src).replace(/\/{2,}/g, "/"))
    };
  }
});
