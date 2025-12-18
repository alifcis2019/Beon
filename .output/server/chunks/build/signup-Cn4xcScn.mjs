import { d as useI18n, f as useSeoMeta, g as _sfc_main$o } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'better-sqlite3';
import 'ipx';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import 'minimark/hast';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: t("signup.meta.title"),
      description: t("signup.meta.description"),
      ogTitle: t("signup.meta.ogTitle"),
      ogDescription: t("signup.meta.ogDescription"),
      twitterTitle: t("signup.meta.twitterTitle"),
      twitterDescription: t("signup.meta.twitterDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$o;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "py-12" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl font-bold mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("signup.title"))}</h1><p${_scopeId}>${ssrInterpolate(_ctx.$t("signup.coming_soon"))}</p>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl font-bold mb-4" }, toDisplayString(_ctx.$t("signup.title")), 1),
              createVNode("p", null, toDisplayString(_ctx.$t("signup.coming_soon")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-Cn4xcScn.mjs.map
