import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "careers",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 min-h-screen pt-32 pb-24" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="max-w-3xl mx-auto text-center"><h1 class="text-4xl font-bold text-white mb-6">Careers</h1><p class="text-xl text-gray-400"> We are hiring! Check back soon for open positions. </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=careers-27POfEfk.mjs.map
