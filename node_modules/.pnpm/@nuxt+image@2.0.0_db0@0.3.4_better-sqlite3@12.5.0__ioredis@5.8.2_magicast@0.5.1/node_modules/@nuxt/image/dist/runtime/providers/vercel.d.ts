import type { NitroConfig } from 'nitropack';
interface VercelOptions {
    baseURL?: string;
    formats?: NonNullable<NonNullable<NonNullable<NitroConfig['vercel']>['config']>['images']>['formats'];
    modifiers?: {
        quality?: string | number;
    };
}
declare const _default: () => import("../../module.js").ImageProvider<VercelOptions>;
export default _default;
