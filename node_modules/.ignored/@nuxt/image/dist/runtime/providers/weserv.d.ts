export interface WeservOptions {
    /**
     * The url of your site that is exposed to the internet.
     */
    baseURL: string;
    /**
     * The url of the weserv service.
     *
     * @default https://wsrv.nl
     */
    weservURL?: string;
    modifiers?: {
        background?: string;
        pixelDensity?: string;
        trimImage?: string;
        sharpen?: string;
        brightness?: string;
        saturation?: string;
        hue?: string;
        filter?: string;
        gamma?: string;
        contrast?: string;
        blur?: string;
        mirror?: string;
        rotate?: string;
        mask?: string;
        maskTrim?: string;
        maskBackground?: string;
    };
}
declare const _default: () => import("../../module.js").ImageProvider<WeservOptions>;
export default _default;
