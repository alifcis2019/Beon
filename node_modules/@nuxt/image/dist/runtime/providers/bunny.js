import { joinURL } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    width: "width",
    height: "height",
    aspectRatio: "aspect_ratio",
    quality: "quality",
    sharpen: "sharpen",
    blur: "blur",
    crop: "crop",
    cropGravity: "crop_gravity",
    flip: "flip",
    flop: "flop",
    brightness: "brightness",
    saturation: "saturation",
    hue: "hue",
    contrast: "contrast",
    autoOptimize: "auto_optimize",
    sepia: "sepia"
  }
});
export default defineProvider({
  getImage: (src, { modifiers, baseURL }) => {
    const operations = operationsGenerator(modifiers);
    return {
      url: joinURL(baseURL, src + (operations ? "?" + operations : ""))
    };
  }
});
