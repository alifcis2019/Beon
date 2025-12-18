import { defineNuxtPlugin } from "#imports";
export default defineNuxtPlugin(async () => {
  return {
    provide: {
      content: {
        loadLocalDatabase: () => {
          return import("../internal/database.client.js").then((m) => m.loadDatabaseAdapter);
        }
      }
    }
  };
});
