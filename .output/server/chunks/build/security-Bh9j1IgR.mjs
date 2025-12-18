import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 min-h-screen pt-32 pb-24" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="max-w-3xl mx-auto text-center"><h1 class="text-4xl font-bold text-white mb-6">Security</h1><p class="text-xl text-gray-400"> Your security is our top priority. Details coming soon. </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=security-Bh9j1IgR.mjs.map
