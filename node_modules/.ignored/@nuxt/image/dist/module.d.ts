import * as _nuxt_schema from '@nuxt/schema';
import { Nuxt, RuntimeConfig } from '@nuxt/schema';
import { H3Event } from 'h3';

type ProviderSetup = (providerOptions: ImageModuleProvider, moduleOptions: ModuleOptions, nuxt: Nuxt) => void | Promise<void>;
interface InputProvider<T = any> {
    name?: string;
    provider?: string;
    options?: T;
    setup?: ProviderSetup;
}
interface ProviderDefaults {
}
interface ConfiguredImageProviders {
}
interface ImageProviders {
}
interface ImageModuleProvider {
    name: string;
    importName: string;
    options: any;
    provider: string;
    runtime: string;
    runtimeOptions: any;
    setup: ProviderSetup;
}

interface ImageModifiers {
    width: number | string;
    height: number | string;
    fit: string;
    format: string;
    quality: string | number;
    background: string;
    blur: number;
}
interface ResolvedImageModifiers extends ImageModifiers {
    width: number;
    height: number;
}
type DefaultProvider = ProviderDefaults extends Record<'provider', unknown> ? ProviderDefaults['provider'] : never;
interface ImageOptions<Provider extends keyof ConfiguredImageProviders = DefaultProvider> {
    provider?: Provider;
    preset?: string;
    densities?: string;
    modifiers?: Partial<Omit<ImageModifiers, 'format' | 'quality' | 'background' | 'fit'>> & ('modifiers' extends keyof ConfiguredImageProviders[Provider] ? ConfiguredImageProviders[Provider]['modifiers'] : Record<string, unknown>);
    sizes?: string | Record<string, any>;
}
interface ImageSizesOptions extends ImageOptions {
    sizes: Record<string, string | number> | string;
}
type ProviderGetImage<T = Record<string, unknown>> = (src: string, options: Omit<ImageOptions, 'modifiers'> & {
    modifiers: Partial<ResolvedImageModifiers>;
} & T, ctx: ImageCTX) => ResolvedImage;
interface ImageModifierOptions {
    modifiers?: Record<string, unknown>;
}
interface ImageProvider<T> extends ImageModifierOptions {
    defaults?: T;
    getImage: ProviderGetImage<T>;
    validateDomains?: boolean;
    supportsAlias?: boolean;
}
interface CreateImageOptions {
    providers: Record<keyof ConfiguredImageProviders, {
        defaults: unknown;
        setup: () => ImageProvider<Record<string, unknown>>;
    }>;
    nuxt: {
        baseURL: string;
    };
    event?: H3Event;
    presets: {
        [name: string]: ImageOptions;
    };
    provider: (string & {}) | keyof ImageProviders;
    screens: Record<string, number>;
    alias: Record<string, string>;
    domains: string[];
    densities: number[];
    format: string[];
    quality?: number;
    runtimeConfig: RuntimeConfig;
}
interface ImageInfo {
    width: number;
    height: number;
    placeholder?: string;
}
interface ResolvedImage {
    url: string;
    format?: string;
    getMeta?: () => Promise<ImageInfo>;
}
interface ImageSizes {
    srcset: string;
    sizes: string | undefined;
    src?: string;
}
interface Img {
    (source: string, modifiers?: ImageOptions['modifiers'], options?: ImageOptions): ResolvedImage['url'];
    options: CreateImageOptions;
    getImage: (source: string, options?: ImageOptions) => ResolvedImage;
    getSizes: (source: string, options?: ImageOptions, sizes?: string[]) => ImageSizes;
    getMeta: (source: string, options?: ImageOptions) => Promise<ImageInfo>;
}
type $Img = Img & {
    [preset: string]: $Img;
};
interface ImageCTX {
    options: CreateImageOptions;
    $img?: $Img;
}
type OperationMapper<From, To> = Record<string | Extract<From, string | number>, To> | ((key?: From) => To | From | undefined);
type OperationGeneratorConfig<Key extends string, Value, FinalKey, FinalValue> = {
    keyMap?: Partial<Record<Key, FinalKey>>;
    valueMap?: Partial<Record<Key, Partial<Record<Extract<Value, string>, FinalValue>> | ((key: Value) => Value | FinalValue)>>;
} & ({
    formatter?: (key: FinalKey, value: FinalValue) => string;
    joinWith?: undefined;
} | {
    formatter: (key: FinalKey, value: FinalValue) => string;
    joinWith: string;
});
interface ImageSizesVariant {
    size?: string;
    screenMaxWidth: number;
    _cWidth: number;
    _cHeight?: number | undefined;
}

interface ModuleOptions extends ImageProviders {
    inject: boolean;
    provider: CreateImageOptions['provider'];
    presets: {
        [name: string]: ImageOptions;
    };
    dir: string;
    dirs: string[];
    domains: string[];
    alias: Record<string, string>;
    screens: CreateImageOptions['screens'];
    providers: {
        [name: string]: InputProvider | any;
    };
    densities: number[];
    format: CreateImageOptions['format'];
    quality?: CreateImageOptions['quality'];
}

declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { _default as default };
export type { $Img, ConfiguredImageProviders, CreateImageOptions, ImageCTX, ImageInfo, ImageModifiers, ImageModuleProvider, ImageOptions, ImageProvider, ImageProviders, ImageSizes, ImageSizesOptions, ImageSizesVariant, Img, InputProvider, ModuleOptions, OperationGeneratorConfig, OperationMapper, ProviderDefaults, ProviderGetImage, ProviderSetup, ResolvedImage, ResolvedImageModifiers };
