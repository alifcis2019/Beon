import type { ImgHTMLAttributes } from 'vue';
import type { BaseImageProps } from '../utils/props.js';
import type { ProviderDefaults, ConfiguredImageProviders } from '@nuxt/image';
export interface ImageProps<Provider extends keyof ConfiguredImageProviders> extends BaseImageProps<Provider> {
    custom?: boolean;
    placeholder?: boolean | string | number | [w: number, h: number, q?: number, b?: number];
    placeholderClass?: string;
}
export interface DefaultSlotProps {
    imgAttrs: ImgHTMLAttributes;
    isLoaded: boolean;
    src?: string;
}
declare const __VLS_export: <Provider extends keyof ConfiguredImageProviders = ProviderDefaults["provider"]>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<ImageProps<Provider> & __VLS_EmitsToProps<__VLS_NormalizeEmits<{
        (event: "load", payload: Event): unknown;
        (event: "error", payload: string | Event): unknown;
    }>>> & import("vue").PublicProps;
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        imgEl: Readonly<import("vue").ShallowRef<any>>;
    }>) => void;
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
