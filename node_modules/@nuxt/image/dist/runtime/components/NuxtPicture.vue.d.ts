import type { ImgHTMLAttributes } from 'vue';
import type { BaseImageProps } from '../utils/props.js';
import type { ConfiguredImageProviders, ProviderDefaults } from '@nuxt/image';
export interface PictureProps<Provider extends keyof ConfiguredImageProviders> extends BaseImageProps<Provider> {
    legacyFormat?: string;
    imgAttrs?: ImgHTMLAttributes;
}
export interface DefaultSlotProps {
    imgAttrs: ImgHTMLAttributes;
    isLoaded: boolean;
    src?: string;
}
declare const __VLS_export: <Provider extends keyof ConfiguredImageProviders = ProviderDefaults["provider"]>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<PictureProps<Provider> & __VLS_EmitsToProps<__VLS_NormalizeEmits<{
        (event: "load", payload: Event): unknown;
        (event: "error", payload: string | Event): unknown;
    }>>> & import("vue").PublicProps;
    expose: (exposed: {}) => void;
    attrs: any;
    slots: {
        default(props: DefaultSlotProps): any;
    };
    emit: {
        (event: "load", payload: Event): unknown;
        (event: "error", payload: string | Event): unknown;
    };
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
