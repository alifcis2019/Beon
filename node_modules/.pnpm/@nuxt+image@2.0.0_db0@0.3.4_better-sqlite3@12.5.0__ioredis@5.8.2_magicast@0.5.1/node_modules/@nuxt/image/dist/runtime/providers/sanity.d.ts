interface SanityOptions {
    projectId: string;
    dataset?: string;
    modifiers?: {
        'crop'?: string | {
            left: number;
            top: number;
            right: number;
            bottom: number;
        };
        'rect'?: `${number},${number},${number},${number}`;
        'hotspot'?: string | {
            x: number;
            y: number;
        };
        'fp-x'?: number;
        'fp-y'?: number;
        'auto'?: string;
        'bg'?: string;
    };
}
declare const _default: () => import("../../module.js").ImageProvider<SanityOptions>;
export default _default;
