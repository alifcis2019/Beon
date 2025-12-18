import { a as _export_sfc, G as __nuxt_component_0, H as _sfc_main$a, b as _sfc_main$v, _ as _sfc_main$B, h as _sfc_main$3, j as __nuxt_component_3$2 } from './server.mjs';
import { withCtx, renderSlot, defineComponent, ref, mergeProps, createTextVNode, createVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const socialLinks = [
      { icon: "i-simple-icons-facebook", to: "#", label: "Facebook" },
      { icon: "i-simple-icons-linkedin", to: "#", label: "LinkedIn" },
      { icon: "i-simple-icons-instagram", to: "#", label: "Instagram" },
      { icon: "i-simple-icons-youtube", to: "#", label: "YouTube" }
    ];
    const email = ref("");
    const subscribe = () => {
      email.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$v;
      const _component_UIcon = _sfc_main$B;
      const _component_UInput = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_3$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white overflow-hidden relative" }, _attrs))}><div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"><div class="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-primary-900/20 rounded-full blur-3xl"></div><div class="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl"></div></div><div class="relative border-b border-gray-800"><div class="max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32"><div class="relative z-10 text-center max-w-3xl mx-auto"><h2 class="text-4xl sm:text-5xl font-bold mb-8 tracking-tight"> Ready to transform your<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">customer communication?</span></h2><p class="text-lg text-gray-400 mb-10 leading-relaxed"> Join thousands of businesses using BeOn to connect with their customers on WhatsApp, SMS, and more. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "rounded-full px-8 py-4 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
      }, {
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-right",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-heroicons-arrow-right",
                class: "w-5 h-5"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Free Trial `);
          } else {
            return [
              createTextVNode(" Start Free Trial ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "/contact",
        size: "xl",
        color: "white",
        variant: "ghost",
        class: "rounded-full px-8 py-4 text-white hover:bg-white/10 transition-all duration-300 font-semibold w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Sales `);
          } else {
            return [
              createTextVNode(" Contact Sales ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"><div class="lg:col-span-5 space-y-8"><div class="flex items-center gap-2"><span class="text-3xl font-bold text-white">Be<span class="text-primary-500">on</span></span></div><p class="text-gray-400 leading-relaxed max-w-md"> The all-in-one platform for WhatsApp marketing, automation, and customer support. Empower your team to do more with less. </p><div class="max-w-sm"><h4 class="text-sm font-semibold text-white mb-3"> Subscribe to our newsletter </h4><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        placeholder: "Enter your email",
        color: "gray",
        variant: "outline",
        class: "flex-1 bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500",
        ui: { rounded: "rounded-lg" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        variant: "solid",
        label: "Subscribe",
        class: "rounded-lg",
        onClick: subscribe
      }, null, _parent));
      _push(`</div></div></div><div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8"><div><h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-6"> Product </h3><ul class="space-y-4"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/solutions/whatsapp",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`WhatsApp API`);
          } else {
            return [
              createTextVNode("WhatsApp API")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/solutions/sms",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SMS Marketing`);
          } else {
            return [
              createTextVNode("SMS Marketing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/solutions/otp",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`OTP Service`);
          } else {
            return [
              createTextVNode("OTP Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-6"> Company </h3><ul class="space-y-4"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/careers",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Careers`);
          } else {
            return [
              createTextVNode("Careers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-6"> Legal </h3><ul class="space-y-4"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms-conditions",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/security",
        class: "text-gray-400 hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Security`);
          } else {
            return [
              createTextVNode("Security")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div><div class="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"><div class="flex gap-4"><a href="#" class="opacity-70 hover:opacity-100 transition-opacity"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" class="h-10"></a><a href="#" class="opacity-70 hover:opacity-100 transition-opacity"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" class="h-10"></a></div><div class="flex gap-4"><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(ssrRenderComponent(_component_UButton, {
          key: social.label,
          to: social.to,
          icon: social.icon,
          color: "gray",
          variant: "ghost",
          class: "text-gray-400 hover:text-white hover:bg-white/10",
          "aria-label": social.label
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="mt-8 text-center md:text-left text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4"><p> Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Unlimited Software. All Rights Reserved. </p><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-meta",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>Meta Business Partner</span></div></div></div></footer>`);
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
//# sourceMappingURL=default-rzHNcyKG.mjs.map
