import type { ConfiguredImageProviders, ImageModifiers } from '@nuxt/image';
export interface BaseImageProps<Provider extends keyof ConfiguredImageProviders> {
    src?: string;
    format?: string;
    quality?: string | number;
    background?: string;
    fit?: string;
    modifiers?: Partial<Omit<ImageModifiers, 'format' | 'quality' | 'background' | 'fit'>> & ('modifiers' extends keyof ConfiguredImageProviders[Provider] ? ConfiguredImageProviders[Provider]['modifiers'] : Record<string, unknown>);
    preset?: string;
    provider?: Provider;
    sizes?: string | Record<string, any>;
    densities?: string;
    preload?: boolean | {
        fetchPriority: 'auto' | 'high' | 'low';
    };
    width?: string | number;
    height?: string | number;
    crossorigin?: 'anonymous' | 'use-credentials' | boolean;
    nonce?: string;
}
export declare const useImageProps: <Provider extends keyof ConfiguredImageProviders>(props: BaseImageProps<Provider>) => {
    providerOptions: import("vue").ComputedRef<{
        provider: Provider | undefined;
        preset: string | undefined;
    }>;
    normalizedAttrs: import("vue").ComputedRef<{
        width: number | undefined;
        height: number | undefined;
        crossorigin: "anonymous" | "use-credentials" | undefined;
        nonce: string | undefined;
    }>;
    imageModifiers: import("vue").ComputedRef<ImageModifiers>;
};
