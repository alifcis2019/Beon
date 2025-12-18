interface AliyunOptions {
    baseURL?: string;
    modifiers?: {
        resize?: {
            w: number;
        } | {
            h: number;
        } | {
            fw: number;
            fh: number;
        };
        quality?: '';
    };
}
declare const _default: () => import("../../module.js").ImageProvider<AliyunOptions>;
export default _default;
