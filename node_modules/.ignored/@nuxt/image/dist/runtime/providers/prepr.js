import { joinURL } from "ufo";
import { createOperationsGenerator } from "../utils/index.js";
import { defineProvider } from "../utils/provider.js";
const keyMap = {
  crop: "c",
  format: "format",
  height: "h",
  quality: "q",
  width: "w"
};
const valueMap = {
  format: {
    jpeg: "jpg"
  },
  fit: {
    cover: "crop"
    // Prepr.io accepts value `crop` defaulting to value `centre`
  }
};
export function formatter(key, value) {
  return String(value) === "true" ? key : `${key}_${value}`;
}
const operationsGenerator = createOperationsGenerator({
  formatter,
  joinWith: ",",
  keyMap,
  valueMap
});
export default defineProvider({
  getImage: (src, options, _ctx) => {
    const { projectName } = options;
    if (typeof projectName !== "string" || !projectName.trim()) {
      throw new TypeError("[nuxt] [image] [prepr] No project name provided.");
    }
    const fileBucket = "stream";
    const fileOperations = operationsGenerator(options.modifiers);
    const filePath = fileOperations ? joinURL(fileOperations, src) : src;
    const projectUrl = `https://${projectName.trim()}.${fileBucket}.prepr.io`;
    return {
      url: joinURL(projectUrl, filePath)
    };
  }
});
