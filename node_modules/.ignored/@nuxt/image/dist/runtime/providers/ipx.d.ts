import type { ImageModifiers } from '@nuxt/image';
import type { HTTPStorageOptions, NodeFSSOptions, IPXOptions as CoreIPXOptions } from 'ipx';
export interface IPXRuntimeConfig extends Omit<CoreIPXOptions, 'storage' | 'httpStorage'> {
    http: HTTPStorageOptions;
    fs: NodeFSSOptions;
    baseURL: string;
}
export interface IPXModifiers extends Omit<ImageModifiers, 'fit' | 'format' | 'blur'> {
    format: 'jpeg' | 'jpg' | 'png' | 'webp' | 'avif' | 'gif' | 'heif' | 'tiff' | 'auto' | string & {};
    fit: 'contain' | 'cover' | 'fill' | 'inside' | 'outside' | string & {};
    resize: string;
    quality: number | string;
    background: string;
    position: string;
    enlarge: true | 'true';
    kernel: 'nearest' | 'cubic' | 'mitchell' | 'lanczos2' | 'lanczos3' | string & {};
    trim: number | string;
    extend: string;
    extract: string;
    crop: string;
    rotate: number | string;
    flip: true | 'true';
    flop: true | 'true';
    sharpen: number | string;
    median: number | string;
    blur: number | string;
    flatten: true | 'true';
    gamma: string;
    negate: true | 'true';
    normalize: true | 'true';
    threshold: number | string;
    modulate: string;
    tint: number | string;
    grayscale: true | 'true';
    animated: true | 'true';
}
export interface IPXOptions extends Omit<IPXRuntimeConfig, 'alias'> {
    modifiers: Partial<IPXModifiers>;
}
export declare const operationsGenerator: (modifiers: Partial<Record<string, string | number>>) => string;
declare const _default: () => import("../../module.js").ImageProvider<Partial<IPXOptions>>;
export default _default;
