import { getQuery, withBase, withQuery } from "ufo";
import { operationsGenerator } from "./imgix.js";
import unsplashProvider, { unsplashCDN } from "./unsplash.js";
import { defineProvider } from "../utils/provider.js";
const prismicCDN = "https://images.prismic.io/";
export default defineProvider(() => {
  const { getImage: getUnsplashImage } = unsplashProvider();
  return {
    getImage: (src, { modifiers, baseURL = prismicCDN }, ctx) => {
      if (src.startsWith(unsplashCDN)) {
        return getUnsplashImage(src, { modifiers }, ctx);
      }
      const operations = operationsGenerator(modifiers);
      return {
        url: withQuery(withBase(src, baseURL), getQuery("?" + operations))
      };
    }
  };
});
