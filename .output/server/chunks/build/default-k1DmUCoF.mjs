import { h as _export_sfc, L as __nuxt_component_0, M as _sfc_main$a, a as _sfc_main$v, _ as _sfc_main$B, j as __nuxt_component_2$2 } from './server.mjs';
import { withCtx, renderSlot, defineComponent, mergeProps, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'vue-router';
import 'devalue';
import 'unhead/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import 'minimark/hast';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'better-sqlite3';
import 'ipx';

const _imports_0 = publicAssetsURL("/images/footer/appScreen.webp");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = [
      { label: "Home", to: "/" },
      { label: "Contact us", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms-conditions" }
    ];
    const socialLinks = [
      { icon: "i-simple-icons-facebook", to: "#", label: "Facebook" },
      { icon: "i-simple-icons-linkedin", to: "#", label: "LinkedIn" },
      { icon: "i-simple-icons-instagram", to: "#", label: "Instagram" },
      { icon: "i-simple-icons-youtube", to: "#", label: "YouTube" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$v;
      const _component_UIcon = _sfc_main$B;
      const _component_NuxtLink = __nuxt_component_2$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#020817] text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-300" }, _attrs))}><div class="relative pt-20 pb-0 sm:pt-24 lg:pt-32"><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="max-w-2xl"><h2 class="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"> Track your stats,<br> manage campaigns, send messages<br><span class="text-primary-600 dark:text-primary-500">— all from the app.</span></h2><p class="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"> With the BeOn app, you have everything you need at your fingertips — from tracking detailed performance metrics, managing and scheduling marketing campaigns, to sending messages across multiple channels — anytime, anywhere. </p><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "#",
        color: "gray",
        variant: "solid",
        size: "xl",
        class: "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 h-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-simple-icons-googleplay",
              class: "w-8 h-8 text-green-600 dark:text-green-500"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-start"${_scopeId}><span class="text-xs text-gray-500 dark:text-gray-400 uppercase"${_scopeId}>Get it on</span><span class="text-lg font-bold"${_scopeId}>Google Play</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode(_component_UIcon, {
                  name: "i-simple-icons-googleplay",
                  class: "w-8 h-8 text-green-600 dark:text-green-500"
                }),
                createVNode("div", { class: "flex flex-col items-start" }, [
                  createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400 uppercase" }, "Get it on"),
                  createVNode("span", { class: "text-lg font-bold" }, "Google Play")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "#",
        color: "gray",
        variant: "solid",
        size: "xl",
        class: "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 h-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-simple-icons-apple",
              class: "w-8 h-8 text-gray-900 dark:text-white"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-start"${_scopeId}><span class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>Download on the</span><span class="text-lg font-bold"${_scopeId}>App Store</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode(_component_UIcon, {
                  name: "i-simple-icons-apple",
                  class: "w-8 h-8 text-gray-900 dark:text-white"
                }),
                createVNode("div", { class: "flex flex-col items-start" }, [
                  createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, "Download on the"),
                  createVNode("span", { class: "text-lg font-bold" }, "App Store")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><img${ssrRenderAttr("src", _imports_0)} alt="App Screenshot" class="w-full aspect-square object-contain opacity-80"></div></div></div><div class="relative py-24 sm:py-32 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0f172a]/50"><div class="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10"><h2 class="text-3xl sm:text-4xl font-bold mb-8 flex items-center justify-center gap-3 text-gray-900 dark:text-white"> Start connecting smarter, join BeOn now. <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white text-xl shadow-lg shadow-primary-500/30">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-rocket-launch" }, null, _parent));
      _push(`</span></h2><div class="flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "#",
        label: "Talk to Sales",
        color: "gray",
        variant: "outline",
        size: "xl",
        class: "px-8 py-3 rounded-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        label: "Start Your Free Trial",
        color: "primary",
        variant: "solid",
        size: "xl",
        class: "px-8 py-3 rounded-full shadow-lg shadow-primary-500/30"
      }, null, _parent));
      _push(`</div></div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div></div><div class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#020817]"><div class="max-w-7xl mx-auto px-6 lg:px-8 py-8"><div class="flex flex-col md:flex-row justify-between items-center gap-6"><div class="flex items-center gap-6"><div class="flex items-center gap-2"><span class="text-2xl font-bold text-gray-900 dark:text-white">Be<span class="text-primary-600 dark:text-primary-500">on</span></span></div><div class="flex items-center gap-4"><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(ssrRenderComponent(_component_UButton, {
          key: social.label,
          to: social.to,
          icon: social.icon,
          color: "gray",
          variant: "ghost",
          class: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
          "aria-label": social.label
        }, null, _parent));
      });
      _push(`<!--]--></div></div><nav class="flex flex-wrap justify-center gap-6"><!--[-->`);
      ssrRenderList(footerLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.label,
          to: link.to,
          class: "text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div class="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800/50 pt-8"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-meta",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>Meta Business Partners</span></div><p> Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Unlimited Software. All Rights Reserved. </p></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "Footer" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_UMain = _sfc_main$a;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, { class: "fixed top-2 z-50 end-[50%] translate-x-1/2 rtl:-translate-x-1/2 w-[95%] sm:w-[90%] mx-auto flex items-center justify-center" }, null, _parent));
  _push(ssrRenderComponent(_component_UMain, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-k1DmUCoF.mjs.map
