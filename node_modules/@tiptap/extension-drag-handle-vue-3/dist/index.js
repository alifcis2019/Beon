// src/DragHandle.ts
import {
  defaultComputePositionConfig,
  DragHandlePlugin,
  dragHandlePluginDefaultKey
} from "@tiptap/extension-drag-handle";
import { defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
var DragHandle = defineComponent({
  name: "DragHandleVue",
  props: {
    pluginKey: {
      type: [String, Object],
      default: dragHandlePluginDefaultKey
    },
    editor: {
      type: Object,
      required: true
    },
    computePositionConfig: {
      type: Object,
      default: () => ({})
    },
    onNodeChange: {
      type: Function,
      default: null
    },
    onElementDragStart: {
      type: Function,
      default: null
    },
    onElementDragEnd: {
      type: Function,
      default: null
    },
    class: {
      type: String,
      default: "drag-handle"
    }
  },
  setup(props, { slots }) {
    const root = ref(null);
    const pluginHandle = shallowRef(null);
    onMounted(async () => {
      await nextTick();
      const { editor, pluginKey, onNodeChange, onElementDragEnd, onElementDragStart, computePositionConfig } = props;
      if (!root.value) {
        return;
      }
      if (!props.editor || props.editor.isDestroyed) {
        return;
      }
      const init = DragHandlePlugin({
        editor,
        element: root.value,
        pluginKey,
        computePositionConfig: { ...defaultComputePositionConfig, ...computePositionConfig },
        onNodeChange,
        onElementDragStart,
        onElementDragEnd
      });
      pluginHandle.value = init;
      props.editor.registerPlugin(init.plugin);
    });
    onBeforeUnmount(() => {
      var _a, _b;
      if (!pluginHandle.value) {
        return;
      }
      if (props.editor && !props.editor.isDestroyed) {
        props.editor.unregisterPlugin(props.pluginKey);
      }
      (_b = (_a = pluginHandle.value).unbind) == null ? void 0 : _b.call(_a);
      pluginHandle.value = null;
    });
    return () => {
      var _a;
      return h(
        "div",
        {
          ref: root,
          class: props.class,
          style: { visibility: "hidden", position: "absolute" },
          "data-dragging": "false"
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
  }
});

// src/index.ts
var index_default = DragHandle;
export {
  DragHandle,
  index_default as default
};
//# sourceMappingURL=index.js.map