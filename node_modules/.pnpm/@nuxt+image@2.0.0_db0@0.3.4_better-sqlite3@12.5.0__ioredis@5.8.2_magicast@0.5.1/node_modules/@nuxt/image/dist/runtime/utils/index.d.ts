import type { OperationGeneratorConfig } from '@nuxt/image';
export interface Mapper<Key, Value> {
    (key: Key): Value | Key;
    (): undefined;
}
export declare function createMapper<Key extends string, Value>(map: Partial<Record<Key, Value>> & {
    missingValue?: Value;
}): Mapper<Key, Value>;
export declare function createOperationsGenerator<ModifierKey extends string, ModifierValue = string | number, FinalKey = ModifierKey, FinalValue = ModifierValue>(config?: OperationGeneratorConfig<ModifierKey, ModifierValue, FinalKey, FinalValue>): (modifiers: Partial<Record<Extract<ModifierKey | FinalKey, string>, ModifierValue | FinalValue>>) => string;
export type InferModifiers<T extends (modifiers: any) => string> = T extends (modifiers: infer Modifiers) => string ? Modifiers : Record<string, unknown>;
export declare function parseDensities(input?: string | undefined): number[];
export declare function checkDensities(densities: number[]): void;
export declare function parseSize(input?: string | number | undefined): number | undefined;
export declare function parseSizes(input: Record<string, string | number> | string): Record<string, string>;
