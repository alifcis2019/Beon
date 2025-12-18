/**
 * Get estimate size for virtualizers that checks each item individually
 * NOTE: This requires Reka UI to support functions for estimateSize (https://github.com/unovue/reka-ui/pull/2288)
 * Until then, we check if ANY item has a description and use that for all items
 */
export declare function getEstimateSize(items: any[], size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', descriptionKey?: string): number;
