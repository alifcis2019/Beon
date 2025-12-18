import type { AppConfig } from '@nuxt/schema';
import type { Editor as TiptapEditor, EditorOptions, Content } from '@tiptap/vue-3';
import type { StarterKitOptions } from '@tiptap/starter-kit';
import type { PlaceholderOptions } from '@tiptap/extension-placeholder';
import type { MarkdownExtensionOptions } from '@tiptap/markdown';
import type { ImageOptions } from '@tiptap/extension-image';
import type { MentionOptions } from '@tiptap/extension-mention';
import theme from '#build/ui/editor';
import type { EditorHandlers, EditorCustomHandlers } from '../types/editor';
import type { ComponentConfig } from '../types/tv';
type Editor = ComponentConfig<typeof theme, AppConfig, 'editor'>;
export type EditorContentType = 'json' | 'html' | 'markdown';
export interface EditorProps<T extends Content = Content, H extends EditorCustomHandlers = EditorCustomHandlers> extends Omit<Partial<EditorOptions>, 'content' | 'element'> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    modelValue?: T;
    /**
     * The content type the content is provided as.
     * When not specified, it's automatically inferred: strings are treated as 'html', objects as 'json'.
     */
    contentType?: EditorContentType;
    /**
     * The starter kit options to configure the editor.
     * @defaultValue { headings: { levels: [1, 2, 3, 4] }, link: { openOnClick: false }, dropcursor: { color: 'var(--ui-primary)', width: 2 } }
     * @see https://tiptap.dev/docs/editor/extensions/functionality/starterkit
     */
    starterKit?: Partial<StarterKitOptions>;
    /**
     * The placeholder text to show in empty paragraphs.
     * `{ showOnlyWhenEditable: false, showOnlyCurrent: true }`{lang="ts-type"}
     * Can be a string or PlaceholderOptions from `@tiptap/extension-placeholder`.
     * @see https://tiptap.dev/docs/editor/extensions/functionality/placeholder
     */
    placeholder?: string | Partial<PlaceholderOptions>;
    /**
     * The markdown extension options to configure markdown parsing and serialization.
     * @see https://tiptap.dev/docs/editor/extensions/functionality/markdown
     */
    markdown?: Partial<MarkdownExtensionOptions>;
    /**
     * The image extension options to configure image handling.
     * @see https://tiptap.dev/docs/editor/extensions/nodes/image
     */
    image?: Partial<ImageOptions>;
    /**
     * The mention extension options to configure mention handling.
     * @see https://tiptap.dev/docs/editor/extensions/nodes/mention
     */
    mention?: Partial<MentionOptions>;
    /**
     * Custom item handlers to override or extend the default handlers.
     * These handlers are provided to all child components (toolbar, suggestion menu, etc.).
     */
    handlers?: H;
    class?: any;
    ui?: Editor['slots'];
}
export interface EditorEmits<T extends Content = Content> {
    'update:modelValue': [value: T];
}
export interface EditorSlots<H extends EditorCustomHandlers = EditorCustomHandlers> {
    default(props: {
        editor: TiptapEditor;
        handlers: EditorHandlers<H>;
    }): any;
}
declare const __VLS_export: <T extends Content, H extends EditorCustomHandlers>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<EditorProps<T, H> & __VLS_EmitsToProps<__VLS_NormalizeEmits<(evt: "update:modelValue", value: T) => void>>> & import("vue").PublicProps & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        editor: import("vue").ShallowRef<TiptapEditor | undefined, TiptapEditor | undefined>;
    }>) => void;
    attrs: any;
    slots: EditorSlots<H>;
    emit: (evt: "update:modelValue", value: T) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
