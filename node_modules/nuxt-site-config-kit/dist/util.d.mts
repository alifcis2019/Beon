interface NitroOriginContext {
    isDev?: boolean;
    isPrerender?: boolean;
    requestHost?: string;
    requestProtocol?: 'http' | 'https';
}
declare function getNitroOrigin(ctx?: NitroOriginContext): string;
/**
 * @deprecated use getNitroOrigin instead
 */
declare function useNitroOrigin(): string;

export { getNitroOrigin, useNitroOrigin };
export type { NitroOriginContext };
