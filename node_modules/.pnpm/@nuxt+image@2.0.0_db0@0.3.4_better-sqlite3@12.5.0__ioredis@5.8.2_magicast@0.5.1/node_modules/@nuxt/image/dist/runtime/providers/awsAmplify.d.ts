import type { NitroConfig } from 'nitropack';
interface AmplifyOptions {
    baseURL?: string;
    formats?: NonNullable<NonNullable<NitroConfig['awsAmplify']>['imageSettings']>['formats'];
    modifiers?: {
        quality?: string | number;
    };
}
declare const _default: () => import("../../module.js").ImageProvider<AmplifyOptions>;
export default _default;
