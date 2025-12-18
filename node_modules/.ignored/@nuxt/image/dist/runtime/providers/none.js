import { defineProvider } from "../utils/provider.js";
export default defineProvider({
  getImage: (url) => ({ url })
});
