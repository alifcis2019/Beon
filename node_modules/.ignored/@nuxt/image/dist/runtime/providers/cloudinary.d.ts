import type { ImageModifiers } from '@nuxt/image';
export interface CloudinaryModifiers extends ImageModifiers {
    format: string;
    quality: string;
    background: string;
    rotate: 'auto_right' | 'auto_left' | 'ignore' | 'vflip' | 'hflip' | number;
    roundCorner: string;
    gravity: string;
    effect: string;
    color: string;
    flags: string;
    dpr: string;
    opacity: number;
    overlay: string;
    underlay: string;
    transformation: string;
    zoom: number;
    colorSpace: string;
    customFunc: string;
    density: number;
    aspectRatio: string;
    blur: number;
}
export interface CloudinaryOptions {
    baseURL?: string;
    modifiers?: Partial<CloudinaryModifiers>;
    [key: string]: any;
}
declare const _default: () => import("../../module.js").ImageProvider<CloudinaryOptions>;
export default _default;
