import { joinURL, withBase } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    width: "width",
    height: "height",
    format: "format",
    quality: "quality",
    padColor: "pad_color",
    crop: "crop",
    cropLeft: "crop_left",
    cropTop: "crop_top",
    cropWidth: "crop_width",
    cropHeight: "crop_height"
  },
  valueMap: {
    crop: {
      center: "center",
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
      region: "region"
    }
  }
});
export default defineProvider({
  getImage: (src, { modifiers, baseURL = "" }) => {
    const operations = operationsGenerator(modifiers);
    return {
      url: withBase(joinURL(src + (operations ? "?" + operations : "")), baseURL)
    };
  }
});
