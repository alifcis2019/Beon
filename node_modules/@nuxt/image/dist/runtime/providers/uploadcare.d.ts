/**
 * Image provider for Uploadcare
 * URL API reference:
 * @link https://uploadcare.com/api-refs/url-api/
 *
 * URL format: https://ucarecdn.com/:uuid/-/:operation/:params/:filename
 *
 * Operations:
 * [X] Image Compression
 * [/] Image Geometry
 * [ ] Image Overlays
 * [ ] Image Colours
 * [ ] Image Definition
 * [ ] Image Rotations
 *
 * Other stuff to think about later:
 * - Signed URLs
 * - File Groups
 */
import type { ImageModifiers } from '@nuxt/image';
export interface UploadcareModifiers extends ImageModifiers {
    format: 'jpeg' | 'png' | 'webp' | 'auto';
    quality: 'smart' | 'smart_retina' | 'normal' | 'better' | 'best' | 'lighter' | 'lightest';
    progressive: 'yes' | 'no';
    strip_meta: 'all' | 'none' | 'sensitive';
    preview: `${number}x${number}`;
    resize: `${number}x${number}` | `${number}x` | `x${number}`;
    smart_resize: `${number}x${number}`;
    crop: string | string[];
    scale_crop: string | string[];
    border_radius: string | string[];
    setfill: string;
    zoom_objects: string;
    stretch: string;
}
export interface UploadcareOptions {
    cdnURL: string;
    modifiers: Partial<UploadcareModifiers>;
}
declare const _default: () => import("../../module.js").ImageProvider<Partial<UploadcareOptions>>;
export default _default;
