import type { InferModifiers } from '../utils/index.js';
declare const fits: import("..").Mapper<"missingValue" | "fill" | "contain" | "cover" | "inside" | "outside", "contain" | "cover" | "inside" | "resize">;
declare const operationsGenerator: (modifiers: Partial<Record<string, string | number>>) => string;
interface TwicpicsOptions {
    baseURL?: string;
    modifiers?: InferModifiers<typeof operationsGenerator> & {
        fit?: 'fill' | 'inside' | 'outside' | 'cover' | 'contain';
    } & Partial<Record<'resize' | 'fill' | 'contain' | 'inside' | 'outside' | 'cover' | 'missingValue', string>> & Partial<Record<typeof fits extends (fit: string) => infer Fit ? NonNullable<Fit> : string, string>>;
}
declare const _default: () => import("../../module.js").ImageProvider<TwicpicsOptions>;
export default _default;
