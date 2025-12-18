import { getQuery, withBase, withQuery } from "ufo";
import { operationsGenerator } from "./imgix.js";
import { defineProvider } from "../utils/provider.js";
export const unsplashCDN = "https://images.unsplash.com/";
export default defineProvider({
  getImage: (src, { modifiers, baseURL = unsplashCDN }) => {
    const operations = operationsGenerator(modifiers);
    return {
      url: withQuery(withBase(src, baseURL), getQuery("?" + operations))
    };
  }
});
