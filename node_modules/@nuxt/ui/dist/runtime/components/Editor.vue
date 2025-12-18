<script>
import theme from "#build/ui/editor";
</script>

<script setup>
import { computed, provide, useAttrs, watch } from "vue";
import { defu } from "defu";
import { Primitive, useForwardProps } from "reka-ui";
import { mergeAttributes } from "@tiptap/core";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Mention from "@tiptap/extension-mention";
import Placeholder from "@tiptap/extension-placeholder";
import { Markdown } from "@tiptap/markdown";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { reactiveOmit } from "@vueuse/core";
import { useAppConfig } from "#imports";
import { createHandlers } from "../utils/editor";
import { tv } from "../utils/tv";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  as: { type: null, required: false },
  modelValue: { type: null, required: false },
  contentType: { type: String, required: false },
  starterKit: { type: Object, required: false },
  placeholder: { type: [String, Object], required: false },
  markdown: { type: Object, required: false },
  image: { type: Object, required: false },
  mention: { type: Object, required: false },
  handlers: { type: null, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false },
  extensions: { type: Array, required: false },
  injectCSS: { type: Boolean, required: false },
  injectNonce: { type: null, required: false },
  autofocus: { type: [String, Number, Boolean, null], required: false },
  editable: { type: Boolean, required: false },
  textDirection: { type: String, required: false },
  editorProps: { type: Object, required: false },
  parseOptions: { type: Object, required: false },
  coreExtensionOptions: { type: Object, required: false },
  enableInputRules: { type: [Array, Boolean], required: false },
  enablePasteRules: { type: [Array, Boolean], required: false },
  enableCoreExtensions: { type: [Boolean, Object], required: false },
  enableContentCheck: { type: Boolean, required: false },
  emitContentError: { type: Boolean, required: false },
  onBeforeCreate: { type: Function, required: false },
  onCreate: { type: Function, required: false },
  onMount: { type: Function, required: false },
  onUnmount: { type: Function, required: false },
  onContentError: { type: Function, required: false },
  onUpdate: { type: Function, required: false },
  onSelectionUpdate: { type: Function, required: false },
  onTransaction: { type: Function, required: false },
  onFocus: { type: Function, required: false },
  onBlur: { type: Function, required: false },
  onDestroy: { type: Function, required: false },
  onPaste: { type: Function, required: false },
  onDrop: { type: Function, required: false },
  onDelete: { type: Function, required: false }
});
const emits = defineEmits(["update:modelValue"]);
defineSlots();
const attrs = useAttrs();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.editor || {} })());
const rootProps = useForwardProps(reactiveOmit(props, "starterKit", "extensions", "editorProps", "contentType", "class", "placeholder", "markdown", "image", "mention", "handlers"));
const editorProps = computed(() => defu(props.editorProps, {
  attributes: {
    autocomplete: "off",
    autocorrect: "off",
    autocapitalize: "off",
    ...attrs,
    class: ui.value.base({ class: props.ui?.base })
  }
}));
const contentType = computed(() => props.contentType || (typeof props.modelValue === "string" ? "html" : "json"));
const starterKit = computed(() => defu(props.starterKit, {
  horizontalRule: false,
  headings: {
    levels: [1, 2, 3, 4]
  },
  dropcursor: {
    color: "var(--ui-primary)",
    width: 2
  },
  link: {
    openOnClick: false
  }
}));
const placeholder = computed(() => defu(typeof props.placeholder === "string" ? { placeholder: props.placeholder } : props.placeholder, {
  showOnlyWhenEditable: false,
  showOnlyCurrent: true
}));
const markdown = computed(() => defu(props.markdown, {
  markedOptions: {
    gfm: true
  }
}));
const image = computed(() => defu(props.image, {}));
const mention = computed(() => defu(props.mention, {
  HTMLAttributes: {
    class: "mention"
  }
}));
const extensions = computed(() => [
  contentType.value === "markdown" && Markdown.configure(markdown.value),
  StarterKit.configure(starterKit.value),
  HorizontalRule.extend({
    renderHTML() {
      return [
        "div",
        mergeAttributes(this.options.HTMLAttributes, { "data-type": this.name }),
        ["hr"]
      ];
    }
  }),
  Image.configure(image.value),
  props.placeholder && Placeholder.configure(placeholder.value),
  Mention.configure(mention.value),
  ...props.extensions || []
].filter((extension) => !!extension));
const editor = useEditor({
  ...rootProps.value,
  content: props.modelValue,
  contentType: contentType.value,
  extensions: extensions.value,
  editorProps: editorProps.value,
  onUpdate: ({ editor: editor2 }) => {
    let value;
    try {
      if (contentType.value === "html") {
        value = editor2.getHTML();
      } else if (contentType.value === "json") {
        value = editor2.getJSON();
      } else if (contentType.value === "markdown") {
        value = editor2.getMarkdown();
      }
    } catch (error) {
      value = editor2.getText();
    }
    emits("update:modelValue", value);
  }
});
watch(() => props.modelValue, (newVal) => {
  if (!editor.value || newVal == null) {
    return;
  }
  const currentContent = contentType.value === "html" ? editor.value.getHTML() : contentType.value === "json" ? JSON.stringify(editor.value.getJSON()) : contentType.value === "markdown" ? editor.value.getMarkdown() : editor.value.getText();
  const newContent = contentType.value === "json" && typeof newVal === "object" ? JSON.stringify(newVal) : String(newVal);
  if (currentContent !== newContent) {
    const currentSelection = editor.value.state.selection;
    const currentPos = currentSelection.from;
    editor.value.commands.setContent(newVal);
    const newDoc = editor.value.state.doc;
    if (currentPos <= newDoc.content.size) {
      editor.value.commands.setTextSelection(currentPos);
    }
  }
});
const handlers = computed(() => ({
  ...createHandlers(),
  ...props.handlers
}));
provide("editorHandlers", handlers);
defineExpose({
  editor
});
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <template v-if="editor">
      <slot :editor="editor" :handlers="handlers" />

      <EditorContent
        role="presentation"
        :editor="editor"
        data-slot="content"
        :class="ui.content({ class: props.ui?.content })"
      />
    </template>
  </Primitive>
</template>
