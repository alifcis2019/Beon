interface StrapiOptions {
    baseURL?: string;
    modifiers?: {
        breakpoint?: string;
        breakpoints?: string[];
        formats?: Partial<Record<string, {
            url?: string;
        }>>;
    };
}
declare const _default: () => import("../../module.js").ImageProvider<StrapiOptions>;
export default _default;
