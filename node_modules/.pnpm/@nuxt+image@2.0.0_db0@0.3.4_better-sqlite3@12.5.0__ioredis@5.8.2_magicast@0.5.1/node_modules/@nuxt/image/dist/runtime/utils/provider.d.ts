import type { ImageProvider } from '../../module.js';
export declare function defineProvider<T>(setup: ImageProvider<T> | (() => ImageProvider<T>)): () => ImageProvider<T>;
