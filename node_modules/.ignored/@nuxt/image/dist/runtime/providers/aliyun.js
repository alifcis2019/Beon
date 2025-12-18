import { joinURL, encodePath } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
import { useRuntimeConfig } from "#imports";
const operationsGenerator = createOperationsGenerator({
  joinWith: "/",
  formatter: (key, value) => {
    if (typeof value === "object") {
      return `${key},${encodePath(Object.entries(value).map(([k, v]) => `${k}_${v}`).join(","))}`;
    }
    return encodePath(`${key},${value}`);
  }
});
function getResizeValue(height, width) {
  if (width && height) {
    return { fw: width, fh: height };
  } else if (width) {
    return { w: width };
  } else if (height) {
    return { h: height };
  }
}
export default defineProvider({
  getImage: (src, { modifiers, baseURL }) => {
    if (!baseURL) {
      baseURL = useRuntimeConfig().public.siteUrl || "/";
    }
    const _modifiers = { ...modifiers };
    const { resize, width, height, quality } = _modifiers;
    const resizeValue = getResizeValue(height, width);
    if (!resize && resizeValue) {
      _modifiers.resize = resizeValue;
    }
    delete _modifiers.width;
    delete _modifiers.height;
    if (quality) {
      _modifiers.quality = `Q_${quality}`;
    }
    const operations = operationsGenerator(_modifiers);
    return {
      url: joinURL(baseURL, src + (operations ? "?image_process=" + operations : ""))
    };
  }
});
