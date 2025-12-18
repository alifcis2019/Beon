import { defineComponent, mergeProps, ref, computed, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { f as useSeoMeta, a as _export_sfc, u as useMouseInElement, _ as _sfc_main$B, b as _sfc_main$v, e as useIntersectionObserver } from './server.mjs';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SmsHero",
  __ssrInlineRender: true,
  setup(__props) {
    const target = ref(null);
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);
    const cardTransform = computed(() => {
      if (isOutside.value) return "";
      const MAX_ROTATION = 15;
      const rX = (MAX_ROTATION / 2 - elementY.value / elementHeight.value * MAX_ROTATION).toFixed(2);
      const rY = (elementX.value / elementWidth.value * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);
      return `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-gray-900 min-h-[90vh] flex items-center transition-colors duration-300"
      }, _attrs))} data-v-2ae3f6f6><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-2ae3f6f6><div class="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] animate-pulse" data-v-2ae3f6f6></div><div class="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-1000" data-v-2ae3f6f6></div><div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px]" data-v-2ae3f6f6></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full" data-v-2ae3f6f6><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-2ae3f6f6><div class="max-w-2xl" data-v-2ae3f6f6><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 transition-all duration-700"
      ])}" data-v-2ae3f6f6>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-globe-alt",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Global SMS Coverage </div><h1 class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight transition-all duration-700 delay-100"
      ])}" data-v-2ae3f6f6> Reach Everyone,<br data-v-2ae3f6f6><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400" data-v-2ae3f6f6>Everywhere.</span></h1><p class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200"
      ])}" data-v-2ae3f6f6> The most reliable bulk SMS platform for marketing and transactional messages. Direct carrier connections ensure 99.9% delivery rates worldwide. </p><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "flex flex-wrap gap-4 transition-all duration-700 delay-300"
      ])}" data-v-2ae3f6f6>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "px-8 py-4 rounded-full shadow-lg shadow-blue-500/25 hover:scale-105 transition-transform font-bold"
      }, {
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-paper-airplane",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-heroicons-paper-airplane",
                class: "w-5 h-5"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Campaign `);
          } else {
            return [
              createTextVNode(" Start Campaign ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "gray",
        variant: "ghost",
        class: "px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Pricing `);
          } else {
            return [
              createTextVNode(" View Pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative perspective-1000" style="${ssrRenderStyle({ transform: unref(cardTransform) })}" data-v-2ae3f6f6><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0 rotate-y-[-12deg]" : "opacity-0 translate-y-20",
        "relative mx-auto w-[320px] h-[640px] bg-gray-100 dark:bg-gray-900 rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl transition-all duration-1000 delay-500 transform-style-3d"
      ])}" data-v-2ae3f6f6><div class="absolute inset-0 bg-white dark:bg-gray-950 rounded-[2.5rem] overflow-hidden flex flex-col" data-v-2ae3f6f6><div class="h-14 flex justify-between items-center px-6 text-gray-900 dark:text-white" data-v-2ae3f6f6><span class="text-sm font-medium" data-v-2ae3f6f6>9:41</span><div class="flex gap-2" data-v-2ae3f6f6>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-signal",
        class: "w-4 h-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-wifi",
        class: "w-4 h-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-battery-100",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div></div><div class="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900" data-v-2ae3f6f6><div class="px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between shadow-sm z-10" data-v-2ae3f6f6><div class="flex items-center gap-3" data-v-2ae3f6f6><div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs" data-v-2ae3f6f6> B </div><div data-v-2ae3f6f6><div class="text-sm font-semibold text-gray-900 dark:text-white" data-v-2ae3f6f6> BeOn Store </div><div class="text-[10px] text-gray-500" data-v-2ae3f6f6> Official Business Account </div></div></div></div><div class="flex-1 p-4 space-y-6 overflow-hidden" data-v-2ae3f6f6><div class="flex flex-col gap-1 animate-slide-up-fade" style="${ssrRenderStyle({ "animation-delay": "1.2s" })}" data-v-2ae3f6f6><div class="self-start bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-tl-none p-3 max-w-[85%]" data-v-2ae3f6f6><p class="text-sm text-gray-800 dark:text-gray-200" data-v-2ae3f6f6> 🔥 <span class="font-bold" data-v-2ae3f6f6>Flash Sale Alert!</span><br data-v-2ae3f6f6> Get 50% OFF everything for the next 2 hours only! </p></div><span class="text-[10px] text-gray-400 ml-2" data-v-2ae3f6f6>10:00 AM</span></div><div class="flex flex-col gap-1 animate-slide-up-fade" style="${ssrRenderStyle({ "animation-delay": "2.5s" })}" data-v-2ae3f6f6><div class="self-start bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-tl-none p-3 max-w-[85%]" data-v-2ae3f6f6><p class="text-sm text-gray-800 dark:text-gray-200" data-v-2ae3f6f6> 📦 <span class="font-bold" data-v-2ae3f6f6>Order Update</span><br data-v-2ae3f6f6> Your package has been shipped! Track it here: <span class="text-blue-500 underline" data-v-2ae3f6f6>beon.link/x8j29</span></p></div><span class="text-[10px] text-gray-400 ml-2" data-v-2ae3f6f6>2:30 PM</span></div></div><div class="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" data-v-2ae3f6f6><div class="h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center px-4 text-gray-400 text-sm" data-v-2ae3f6f6> Text message </div></div></div></div><div class="absolute -right-16 top-1/3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transform translate-z-20 animate-float" data-v-2ae3f6f6><div class="flex items-center gap-3" data-v-2ae3f6f6><div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400" data-v-2ae3f6f6>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chart-bar",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div data-v-2ae3f6f6><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-2ae3f6f6> 99.9% </div><div class="text-xs text-gray-500 dark:text-gray-400" data-v-2ae3f6f6> Delivery Rate </div></div></div></div><div class="absolute -left-12 bottom-1/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transform translate-z-30 animate-float-delayed" data-v-2ae3f6f6><div class="flex items-center gap-3" data-v-2ae3f6f6><div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400" data-v-2ae3f6f6>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-users",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div data-v-2ae3f6f6><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-2ae3f6f6> 10k+ </div><div class="text-xs text-gray-500 dark:text-gray-400" data-v-2ae3f6f6> Contacts Reached </div></div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sms/SmsHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SmsHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-2ae3f6f6"]]), { __name: "SmsHero" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SmsFeature",
  __ssrInlineRender: true,
  props: {
    title: {},
    features: {},
    imageSide: {},
    type: {}
  },
  setup(__props) {
    const target = ref(null);
    const isVisible = ref(false);
    useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) isVisible.value = true;
      },
      { threshold: 0.2 }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "py-24 sm:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300"
      }, _attrs))} data-v-935d8e96><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-935d8e96><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-935d8e96><div class="${ssrRenderClass([
        __props.imageSide === "right" ? "lg:order-1" : "lg:order-2",
        "transition-all duration-1000 ease-out",
        unref(isVisible) ? "opacity-100 translate-x-0" : __props.imageSide === "right" ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
      ])}" data-v-935d8e96><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-blue-900/20 border border-gray-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-sm" data-v-935d8e96>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.type === "marketing" ? "i-heroicons-megaphone" : "i-heroicons-bolt",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-935d8e96>${ssrInterpolate(__props.type === "marketing" ? "Bulk Marketing" : "Transactional Alerts")}</span></div><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8" data-v-935d8e96>${ssrInterpolate(__props.title)}</h2><div class="space-y-6" data-v-935d8e96><!--[-->`);
      ssrRenderList(__props.features, (feature, index) => {
        _push(`<div style="${ssrRenderStyle({ transitionDelay: `${index * 100}ms` })}" class="${ssrRenderClass([
          unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "flex gap-4 p-4 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900/50 shadow-sm hover:shadow-md"
        ])}" data-v-935d8e96><div class="shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400" data-v-935d8e96>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-check",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-v-935d8e96>${ssrInterpolate(feature)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([
        __props.imageSide === "right" ? "lg:order-2" : "lg:order-1",
        "relative perspective-1000"
      ])}" data-v-935d8e96><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 rotate-y-0 scale-100" : "opacity-0 rotate-y-12 scale-95",
        "relative aspect-square rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700 shadow-2xl transition-all duration-1000 delay-300"
      ])}" data-v-935d8e96><div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 flex flex-col" data-v-935d8e96>`);
      if (__props.type === "marketing") {
        _push(`<!--[--><div class="flex items-center justify-between mb-8" data-v-935d8e96><div class="text-sm font-semibold text-gray-900 dark:text-white" data-v-935d8e96> Campaign Performance </div><div class="flex gap-1" data-v-935d8e96><div class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" data-v-935d8e96></div><div class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" data-v-935d8e96></div></div></div><div class="flex items-end gap-2 h-32 mb-8 px-4" data-v-935d8e96><div class="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[40%]" data-v-935d8e96></div><div class="w-full bg-blue-200 dark:bg-blue-900/40 rounded-t-lg h-[60%]" data-v-935d8e96></div><div class="w-full bg-blue-300 dark:bg-blue-900/60 rounded-t-lg h-[30%]" data-v-935d8e96></div><div class="w-full bg-blue-400 dark:bg-blue-800/80 rounded-t-lg h-[80%]" data-v-935d8e96></div><div class="w-full bg-blue-500 dark:bg-blue-600 rounded-t-lg h-[50%]" data-v-935d8e96></div><div class="w-full bg-blue-600 dark:bg-blue-500 rounded-t-lg h-[90%]" data-v-935d8e96></div></div><div class="grid grid-cols-2 gap-4" data-v-935d8e96><div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl" data-v-935d8e96><div class="text-xs text-gray-500 dark:text-gray-400 mb-1" data-v-935d8e96> Sent </div><div class="text-lg font-bold text-gray-900 dark:text-white" data-v-935d8e96> 24.5k </div></div><div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl" data-v-935d8e96><div class="text-xs text-blue-600 dark:text-blue-400 mb-1" data-v-935d8e96> Clicks </div><div class="text-lg font-bold text-blue-700 dark:text-blue-300" data-v-935d8e96> 12.8% </div></div></div><!--]-->`);
      } else {
        _push(`<!--[--><div class="flex items-center justify-between mb-8" data-v-935d8e96><div class="text-sm font-semibold text-gray-900 dark:text-white" data-v-935d8e96> System Alerts </div><div class="h-2 w-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-[10px] flex items-center justify-center px-2 font-bold" data-v-935d8e96> LIVE </div></div><div class="space-y-4" data-v-935d8e96><div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex gap-4 items-center" data-v-935d8e96><div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0" data-v-935d8e96>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-check",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div><div data-v-935d8e96><div class="h-2 w-24 bg-gray-200 dark:bg-gray-600 rounded-full mb-2" data-v-935d8e96></div><div class="h-2 w-32 bg-gray-100 dark:bg-gray-600/50 rounded-full" data-v-935d8e96></div></div></div><div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex gap-4 items-center opacity-75" data-v-935d8e96><div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0" data-v-935d8e96>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-check",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div><div data-v-935d8e96><div class="h-2 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mb-2" data-v-935d8e96></div><div class="h-2 w-28 bg-gray-100 dark:bg-gray-600/50 rounded-full" data-v-935d8e96></div></div></div><div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex gap-4 items-center opacity-50" data-v-935d8e96><div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0" data-v-935d8e96>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-check",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div><div data-v-935d8e96><div class="h-2 w-24 bg-gray-200 dark:bg-gray-600 rounded-full mb-2" data-v-935d8e96></div><div class="h-2 w-16 bg-gray-100 dark:bg-gray-600/50 rounded-full" data-v-935d8e96></div></div></div></div><!--]-->`);
      }
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sms/SmsFeature.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SmsFeature = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-935d8e96"]]), { __name: "SmsFeature" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SmsIntegration",
  __ssrInlineRender: true,
  setup(__props) {
    const target = ref(null);
    const isVisible = ref(false);
    useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) isVisible.value = true;
      },
      { threshold: 0.2 }
    );
    const steps = [
      {
        id: 1,
        title: "Get API Credentials",
        description: "Create an account and generate your secure API key in seconds.",
        icon: "i-heroicons-key"
      },
      {
        id: 2,
        title: "Connect via REST",
        description: "Use our simple REST API to send messages from any application.",
        icon: "i-heroicons-server-stack"
      },
      {
        id: 3,
        title: "Scale Instantly",
        description: "Send millions of messages with high throughput and reliability.",
        icon: "i-heroicons-rocket-launch"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
      }, _attrs))}><div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div><div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="order-2 lg:order-1"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12"> Developer-friendly API,<br><span class="text-blue-600 dark:text-blue-400">built for scale.</span></h2><div class="space-y-8"><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="flex gap-6 relative group">`);
        if (index !== steps.length - 1) {
          _push(`<div class="absolute left-6 top-12 bottom-[-32px] w-px bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-500/50 transition-colors duration-300"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative"><div class="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: step.icon,
          class: "w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500"
        }, null, _parent));
        _push(`</div></div><div class="pb-8"><h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">${ssrInterpolate(step.title)}</h3><p class="text-gray-600 dark:text-gray-400 leading-relaxed">${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="order-1 lg:order-2"><div class="${ssrRenderClass([
        unref(isVisible) ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
        "relative rounded-xl bg-[#1e1e1e] shadow-2xl border border-gray-800 overflow-hidden transform transition-all duration-1000"
      ])}"><div class="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#333]"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div><div class="ml-4 text-xs text-gray-500 font-mono"> send-campaign.py </div></div><div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto"><div class="text-gray-400"> # Initialize BeOn Client </div><div class="flex"><span class="text-[#569cd6]">import</span><span class="text-[#d4d4d4] ml-2">beon</span></div><br><div class="text-gray-400"> # Send Bulk SMS Campaign </div><div class="flex"><span class="text-[#9cdcfe]">response</span><span class="text-[#d4d4d4] mx-2">=</span><span class="text-[#9cdcfe]">beon</span><span class="text-[#d4d4d4]">.</span><span class="text-[#dcdcaa]">send_sms</span><span class="text-[#d4d4d4]">(</span></div><div class="pl-4 flex"><span class="text-[#9cdcfe]">to</span><span class="text-[#d4d4d4]">=</span><span class="text-[#ce9178] ml-2">[&#39;+201234567890&#39;, &#39;+201098765432&#39;]</span><span class="text-[#d4d4d4]">,</span></div><div class="pl-4 flex"><span class="text-[#9cdcfe]">sender_id</span><span class="text-[#d4d4d4]">=</span><span class="text-[#ce9178] ml-2">&#39;BeOnStore&#39;</span><span class="text-[#d4d4d4]">,</span></div><div class="pl-4 flex"><span class="text-[#9cdcfe]">message</span><span class="text-[#d4d4d4]">=</span><span class="text-[#ce9178] ml-2">&#39;Flash Sale! 50% OFF today.&#39;</span></div><div class="text-[#d4d4d4]"> ) </div><br><div class="flex items-center gap-2 text-[#6a9955]"><span># Output: { &quot;status&quot;: &quot;queued&quot;, &quot;count&quot;: 2 }</span><span class="w-2 h-4 bg-white animate-pulse"></span></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sms/SmsIntegration.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SmsIntegration = Object.assign(_sfc_main$2, { __name: "SmsIntegration" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SmsVideo",
  __ssrInlineRender: true,
  setup(__props) {
    const target = ref(null);
    const isVisible = ref(false);
    useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold: 0.3 }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "py-24 sm:py-32 bg-gray-50 dark:bg-gray-900"
      }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        "relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 transition-all duration-1000 ease-out"
      ])}"><div class="relative overflow-hidden rounded-lg shadow-2xl"><div class="aspect-[16/9] bg-gray-900 relative flex items-center justify-center group cursor-pointer"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80" alt="SMS Dashboard Preview" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"><div class="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-play-solid",
        class: "w-10 h-10 text-blue-600 ml-1"
      }, null, _parent));
      _push(`</div><div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sms/SmsVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SmsVideo = Object.assign(_sfc_main$1, { __name: "SmsVideo" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sms",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "SMS Solutions - BeOn",
      description: "Reliable Bulk SMS for marketing and notifications.",
      ogTitle: "SMS Solutions - BeOn",
      ogDescription: "Reliable Bulk SMS for marketing and notifications.",
      ogImage: "https://beon.chat/og-image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-900 min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(SmsHero, null, null, _parent));
      _push(ssrRenderComponent(SmsFeature, {
        title: "Drive Sales with Targeted SMS Marketing",
        features: [
          "Send personalized promotional offers to thousands of customers instantly.",
          "Schedule campaigns for optimal delivery times.",
          "Track click-through rates and conversions with detailed analytics."
        ],
        "image-side": "right",
        type: "marketing"
      }, null, _parent));
      _push(ssrRenderComponent(SmsFeature, {
        title: "Keep Customers Informed with Real-time Alerts",
        features: [
          "Send instant order confirmations, shipping updates, and appointment reminders.",
          "Ensure critical notifications reach your users immediately.",
          "Reliable delivery for transactional messages via direct carrier routes."
        ],
        "image-side": "left",
        type: "transactional"
      }, null, _parent));
      _push(ssrRenderComponent(SmsIntegration, null, null, _parent));
      _push(ssrRenderComponent(SmsVideo, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solutions/sms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sms-Crd19Y81.mjs.map
