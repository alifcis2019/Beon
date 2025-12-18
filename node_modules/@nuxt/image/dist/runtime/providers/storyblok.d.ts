interface StoryblokOptions {
    baseURL?: string;
    modifiers?: {
        smart?: boolean;
        filters?: Record<string, string>;
    };
}
declare const _default: () => import("../../module.js").ImageProvider<StoryblokOptions>;
export default _default;
