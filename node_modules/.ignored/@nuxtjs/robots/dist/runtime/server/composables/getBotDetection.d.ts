import type { H3Event } from 'h3';
export type { BotDetectionContext } from '@nuxtjs/robots/util';
/**
 * Server-side bot detection using request headers
 * @param event H3 event object
 * @returns Bot detection context
 */
export declare function getBotDetection(event: H3Event): any;
/**
 * Check if the current request is from a bot
 * @param event H3 event object
 * @returns boolean indicating if request is from a bot
 */
export declare function isBot(event: H3Event): boolean;
/**
 * Get bot information if detected
 * @param event H3 event object
 * @returns Bot info object or null
 */
export declare function getBotInfo(event: H3Event): any;
