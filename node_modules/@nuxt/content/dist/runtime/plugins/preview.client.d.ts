declare const _default: import("nuxt/app").Plugin<{
    content: {
        loadLocalDatabase: () => Promise<typeof import("../internal/database.client.js").loadDatabaseAdapter>;
    };
}> & import("nuxt/app").ObjectPlugin<{
    content: {
        loadLocalDatabase: () => Promise<typeof import("../internal/database.client.js").loadDatabaseAdapter>;
    };
}>;
export default _default;
