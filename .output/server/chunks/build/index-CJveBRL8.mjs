import { d as useI18n, f as useSeoMeta, a as _export_sfc, u as useMouseInElement, _ as _sfc_main$B, b as _sfc_main$v, e as useIntersectionObserver } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useFetch } from './fetch-D_T_kmxd.mjs';
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
import '@vue/shared';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HeroDashboardMockup",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const containerRef = ref(null);
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(containerRef);
    const cardTransform = computed(() => {
      if (isOutside.value) return "";
      const MAX_ROTATION = 5;
      const rX = (MAX_ROTATION / 2 - elementY.value / elementHeight.value * MAX_ROTATION).toFixed(2);
      const rY = (elementX.value / elementWidth.value * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);
      return `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    const messages = ref([
      {
        id: 1,
        text: "Can I integrate BeOn with my existing Shopify store?",
        time: "11:12 PM",
        isUser: true,
        isSystem: false
      },
      {
        id: 2,
        text: "Workflow Started: Shopify Integration Support",
        isSystem: true,
        type: "workflow-start"
      }
    ]);
    const typingText = ref("");
    const isTyping = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "relative w-full max-w-[1200px] mx-auto perspective-1000 group"
      }, _attrs))} data-v-603ec222><div class="${ssrRenderClass([[
        isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      ], "relative w-full aspect-[16/9] bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 ease-out transform-style-3d overflow-hidden flex"])}" style="${ssrRenderStyle({
        transform: isVisible.value ? unref(isOutside) ? "perspective(1000px) rotateX(1deg) rotateY(-1deg)" : cardTransform.value : ""
      })}" data-v-603ec222><div class="w-16 bg-white dark:bg-[#0f172a] border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 gap-6 z-20" data-v-603ec222><div class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-lg" data-v-603ec222> B </div><div class="flex flex-col gap-4 w-full px-2" data-v-603ec222><div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex justify-center cursor-pointer" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-inbox",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div class="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex justify-center cursor-pointer transition-colors" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-users",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div class="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex justify-center cursor-pointer transition-colors" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chart-bar",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div class="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex justify-center cursor-pointer transition-colors" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-cog-6-tooth",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div></div></div><div class="w-80 bg-white dark:bg-[#0f172a] border-r border-gray-200 dark:border-gray-800 flex flex-col z-10 hidden md:flex" data-v-603ec222><div class="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4" data-v-603ec222><div class="font-semibold text-gray-900 dark:text-white" data-v-603ec222> All Inboxes </div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-funnel",
        class: "w-5 h-5 text-gray-400 cursor-pointer"
      }, null, _parent));
      _push(`</div><div class="p-4 border-b border-gray-200 dark:border-gray-800" data-v-603ec222><div class="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-gray-500" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-magnifying-glass",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-603ec222>Search conversations...</span></div></div><div class="flex-1 overflow-hidden relative" data-v-603ec222><div class="absolute inset-0 overflow-y-auto" data-v-603ec222><div class="p-2 space-y-1" data-v-603ec222><div class="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30 cursor-pointer" data-v-603ec222><div class="relative shrink-0" data-v-603ec222><div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 font-bold" data-v-603ec222> SM </div><div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-whatsapp",
        class: "w-3 h-3 text-green-500"
      }, null, _parent));
      _push(`</div></div><div class="flex-1 min-w-0" data-v-603ec222><div class="flex justify-between items-start" data-v-603ec222><div class="font-medium text-gray-900 dark:text-white text-sm truncate" data-v-603ec222> Seif Mostafa </div><div class="text-[10px] text-gray-400" data-v-603ec222>11:12 PM</div></div><div class="text-xs text-gray-500 truncate mt-1" data-v-603ec222> Can I integrate BeOn with... </div><div class="flex gap-1 mt-2" data-v-603ec222><span class="text-[10px] px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded" data-v-603ec222>Pending</span></div></div></div><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="flex gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg cursor-pointer transition-colors opacity-60" data-v-603ec222><div class="relative shrink-0" data-v-603ec222><div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 font-bold" data-v-603ec222> U${ssrInterpolate(i)}</div><div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center" data-v-603ec222>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-simple-icons-whatsapp",
          class: "w-3 h-3 text-green-500"
        }, null, _parent));
        _push(`</div></div><div class="flex-1 min-w-0" data-v-603ec222><div class="flex justify-between items-start" data-v-603ec222><div class="font-medium text-gray-900 dark:text-white text-sm" data-v-603ec222> User ${ssrInterpolate(i)}</div><div class="text-[10px] text-gray-400" data-v-603ec222>Yesterday</div></div><div class="h-2 w-24 bg-gray-100 dark:bg-gray-800 rounded mt-2" data-v-603ec222></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="flex-1 flex flex-col bg-white dark:bg-[#0f172a] relative" data-v-603ec222><div class="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 bg-white dark:bg-[#0f172a] z-10" data-v-603ec222><div class="flex items-center gap-3" data-v-603ec222><div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 font-bold text-xs" data-v-603ec222> SM </div><div data-v-603ec222><div class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2" data-v-603ec222> Seif Mostafa `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-whatsapp",
        class: "w-3 h-3 text-green-500"
      }, null, _parent));
      _push(`</div></div></div><div class="flex items-center gap-3" data-v-603ec222><div class="px-3 py-1.5 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-document-text",
        class: "w-3 h-3 text-orange-500"
      }, null, _parent));
      _push(` Select Stage `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chevron-right",
        class: "w-3 h-3"
      }, null, _parent));
      _push(`</div><div class="px-3 py-1.5 rounded bg-blue-600 text-white text-xs font-medium flex items-center gap-2 shadow-sm" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-clock",
        class: "w-3 h-3"
      }, null, _parent));
      _push(` Pending </div></div></div><div class="flex-1 bg-gray-50 dark:bg-[#0b1120] p-6 overflow-hidden relative flex flex-col" data-v-603ec222><div class="flex-1 space-y-6" data-v-603ec222><!--[-->`);
      ssrRenderList(messages.value, (msg) => {
        _push(`<div class="w-full" data-v-603ec222>`);
        if (msg.isSystem) {
          _push(`<div class="flex justify-center my-4" data-v-603ec222><div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 px-4 py-1.5 rounded-full text-xs text-yellow-700 dark:text-yellow-400 flex items-center gap-2 shadow-sm" data-v-603ec222>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-cpu-chip",
            class: "w-3 h-3"
          }, null, _parent));
          _push(` ${ssrInterpolate(msg.text)}</div></div>`);
        } else if (msg.isUser) {
          _push(`<div class="flex justify-start" data-v-603ec222><div class="max-w-[70%]" data-v-603ec222><div class="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 leading-relaxed" data-v-603ec222>${ssrInterpolate(msg.text)}</div><div class="text-[10px] text-gray-400 mt-1 ml-1" data-v-603ec222>${ssrInterpolate(msg.time)}</div></div></div>`);
        } else {
          _push(`<div class="flex justify-end" data-v-603ec222><div class="max-w-[70%]" data-v-603ec222><div class="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white leading-relaxed" data-v-603ec222>${ssrInterpolate(msg.text)}</div><div class="text-[10px] text-gray-400 mt-1 text-right flex items-center justify-end gap-1" data-v-603ec222>${ssrInterpolate(msg.time)} `);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-check",
            class: "w-3 h-3"
          }, null, _parent));
          _push(`</div></div></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (isTyping.value) {
        _push(`<div class="flex justify-end" data-v-603ec222><div class="bg-blue-600/10 dark:bg-blue-900/20 p-4 rounded-2xl rounded-tr-none max-w-[70%]" data-v-603ec222><p class="text-sm text-gray-700 dark:text-gray-300" data-v-603ec222>${ssrInterpolate(typingText.value)}<span class="inline-block w-1.5 h-4 bg-blue-600 ml-1 animate-pulse align-middle" data-v-603ec222></span></p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="p-4 bg-white dark:bg-[#0f172a] border-t border-gray-200 dark:border-gray-800" data-v-603ec222><div class="flex flex-col gap-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 focus-within:ring-2 ring-blue-500/20 transition-all" data-v-603ec222><div class="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2 mb-1" data-v-603ec222><div class="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded cursor-pointer" data-v-603ec222> Reply </div><div class="px-3 py-1 text-gray-400 text-xs font-medium cursor-pointer hover:text-gray-600" data-v-603ec222> Private Note </div></div><div class="h-12 text-sm text-gray-400 px-2 italic flex items-center" data-v-603ec222> Type your message here... </div><div class="flex justify-between items-center pt-1 px-1" data-v-603ec222><div class="flex gap-2 text-gray-400" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-paper-clip",
        class: "w-4 h-4 hover:text-gray-600 cursor-pointer"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-face-smile",
        class: "w-4 h-4 hover:text-gray-600 cursor-pointer"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-microphone",
        class: "w-4 h-4 hover:text-gray-600 cursor-pointer"
      }, null, _parent));
      _push(`</div><div class="bg-blue-600 text-white px-4 py-1.5 rounded text-xs font-medium flex items-center gap-2 shadow-sm hover:bg-blue-700 transition-colors cursor-pointer" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-paper-airplane",
        class: "w-3 h-3"
      }, null, _parent));
      _push(` Send </div></div></div></div></div></div><div class="${ssrRenderClass([
        isVisible.value ? "opacity-100 translate-x-0 rotate-y-12" : "opacity-0 translate-x-10",
        "absolute -right-16 top-32 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-700 delay-300 z-30 max-w-[200px]"
      ])}" style="${ssrRenderStyle({ "transform": "translateZ(60px) rotateY(-10deg)" })}" data-v-603ec222><div class="flex items-center gap-3 mb-2" data-v-603ec222><div class="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-bolt",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-603ec222> AI Workflows </div></div><p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" data-v-603ec222> Automatically detect intent and trigger workflows without human intervention. </p></div><div class="${ssrRenderClass([
        isVisible.value ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
        "absolute -left-12 bottom-40 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-700 delay-500 z-30 max-w-[220px]"
      ])}" style="${ssrRenderStyle({ "transform": "translateZ(80px) rotateY(10deg)" })}" data-v-603ec222><div class="flex items-center gap-3 mb-2" data-v-603ec222><div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-inbox-stack",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-603ec222> Unified Inbox </div></div><div class="flex gap-2 mt-2" data-v-603ec222>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-whatsapp",
        class: "w-4 h-4 text-green-500"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-messenger",
        class: "w-4 h-4 text-blue-500"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-instagram",
        class: "w-4 h-4 text-pink-500"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-telegram",
        class: "w-4 h-4 text-sky-500"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroDashboardMockup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HeroDashboardMockup = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["__scopeId", "data-v-603ec222"]]), { __name: "HomeHeroDashboardMockup" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const containerRef = ref(null);
    const { elementX, elementY } = useMouseInElement(containerRef);
    const spotlightStyle = computed(() => {
      return {
        background: `radial-gradient(800px circle at ${elementX.value}px ${elementY.value}px, rgba(var(--color-primary-500), 0.05), transparent 40%)`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen flex flex-col justify-center"
      }, _attrs))} data-v-2990178d><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-2990178d><div class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] animate-pulse" data-v-2990178d></div><div class="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[80px] animate-pulse delay-1000" data-v-2990178d></div><div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-70" data-v-2990178d></div><div class="absolute inset-0 pointer-events-none transition-opacity duration-500" style="${ssrRenderStyle(spotlightStyle.value)}" data-v-2990178d></div></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10" data-v-2990178d><div class="${ssrRenderClass([
        isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "mb-10 flex justify-center transition-all duration-700 ease-out"
      ])}" data-v-2990178d><div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-semibold shadow-sm hover:scale-105 transition-transform cursor-default" data-v-2990178d>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-sparkles",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-2990178d>${ssrInterpolate(_ctx.$t("index.hero.meta_provider"))}</span></div></div><h1 class="${ssrRenderClass([
        isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 transition-all duration-700 delay-100 ease-out max-w-5xl mx-auto leading-[1.1]"
      ])}" data-v-2990178d>${ssrInterpolate(_ctx.$t("index.hero.headline_1"))} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400" data-v-2990178d>${ssrInterpolate(_ctx.$t("index.hero.headline_2"))}</span></h1><p class="${ssrRenderClass([
        isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-200 ease-out leading-relaxed"
      ])}" data-v-2990178d>${ssrInterpolate(_ctx.$t("index.hero.description"))}</p><div class="${ssrRenderClass([
        isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 transition-all duration-700 delay-300 ease-out"
      ])}" data-v-2990178d>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "rounded-full px-10 py-4 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 font-bold text-lg w-full sm:w-auto"
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
            _push2(`${ssrInterpolate(_ctx.$t("index.hero.try_now"))} `);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("index.hero.try_now")) + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "#",
        size: "xl",
        color: "gray",
        variant: "ghost",
        class: "rounded-full px-10 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 font-bold text-lg w-full sm:w-auto"
      }, {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-play-circle",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-heroicons-play-circle",
                class: "w-6 h-6"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ${ssrInterpolate(_ctx.$t("index.hero.watch_demo") || "Watch Demo")}`);
          } else {
            return [
              createTextVNode(" " + toDisplayString(_ctx.$t("index.hero.watch_demo") || "Watch Demo"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([
        isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        "relative transition-all duration-1000 delay-500 ease-out"
      ])}" data-v-2990178d>`);
      _push(ssrRenderComponent(HeroDashboardMockup, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-2990178d"]]), { __name: "HomeHeroSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Logos",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: response } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://v3.admin.beon.chat/api/logos", "$2ggGcBb8_r")), __temp = await __temp, __restore(), __temp);
    const brands = computed(() => response.value?.data || []);
    const marqueeBrands = computed(() => {
      const list = brands.value;
      if (!list.length) return [];
      return Array(10).fill(list).flat();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 sm:py-20 bg-white dark:bg-gray-900 overflow-hidden border-y border-gray-100 dark:border-gray-800" }, _attrs))} data-v-d4ab70d5><div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12" data-v-d4ab70d5><h2 class="text-lg sm:text-xl font-semibold leading-8 text-gray-600 dark:text-gray-300" data-v-d4ab70d5>${ssrInterpolate(_ctx.$t("index.logos.trusted_by"))} <span class="text-primary-600 dark:text-primary-400 font-bold" data-v-d4ab70d5>${ssrInterpolate(_ctx.$t("index.logos.brand_count"))}</span></h2></div><div class="relative w-full overflow-hidden" dir="ltr" data-v-d4ab70d5><div class="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" data-v-d4ab70d5></div><div class="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" data-v-d4ab70d5></div><div class="flex w-max animate-marquee hover:pause" data-v-d4ab70d5><!--[-->`);
      ssrRenderList(unref(marqueeBrands), (item, index) => {
        _push(`<div class="flex flex-col items-center justify-center gap-3 mx-8 sm:mx-12 group cursor-pointer" data-v-d4ab70d5><div class="relative transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0 opacity-60 group-hover:opacity-100" data-v-d4ab70d5><img${ssrRenderAttr("src", item.logo)}${ssrRenderAttr("alt", item.name)} class="h-10 sm:h-24 w-auto object-contain" data-v-d4ab70d5></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Logos.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-d4ab70d5"]]), { __name: "HomeLogos" });
const services = [
  {
    label: "WhatsApp Campaigns",
    title: "Mass WhatsApp campaigns without blocking",
    features: [
      "Start by activating your official account with Meta through BeOn",
      "Communicate with your customers all over the world",
      "With the most important and widespread communication channel with complete security"
    ],
    image: "/images/services/1.jpg",
    link: "#",
    slot: "service"
  },
  {
    label: "SMS Campaigns",
    title: "SMS campaigns in your company name",
    features: [
      "SMS campaigns remain one of the most powerful communication tools",
      "They are excellent at gaining customer trust",
      "Enhance brand identity and increase sales"
    ],
    image: "/images/services/2.webp",
    link: "#",
    slot: "service"
  },
  {
    label: "OTP - Verification Code",
    title: "OTP verification code message arrives instantly",
    features: [
      "Your customers won't wait for the OTP verification code for more than a few seconds",
      "Connect your API system with BeOn and enjoy the fastest OTP message that arrives instantly",
      "Which is better, WhatsApp or SMS OTP message? Click for details"
    ],
    image: "/images/services/3.webp",
    link: "#",
    slot: "service"
  },
  {
    label: "Live Chat",
    title: "Conversation management made easier with live chat",
    features: [
      "Collect all your customer conversations in one organized inbox",
      "Distribute them intelligently between automation, your team members, or artificial intelligence",
      "Benefit from a comprehensive monitoring dashboard to measure your team's performance and improve results"
    ],
    image: "/images/services/4.webp",
    link: "#",
    slot: "service"
  },
  {
    label: "Customer Management CRM",
    title: "Manage your customer relationships more easily without switching to a CRM",
    features: [
      "Don't let any potential customer slip away, keep your customer data and record your notes",
      "Classify them according to the sales funnel stage with adding appointment and follow-up alerts",
      "All of this from within the conversations themselves without moving to any other tool"
    ],
    image: "/images/services/5.webp",
    link: "#",
    slot: "service"
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const getGridClass = (index) => {
      const classes = [
        "md:col-span-8",
        // WhatsApp
        "md:col-span-4",
        // SMS
        "md:col-span-4",
        // OTP
        "md:col-span-4",
        // Live Chat
        "md:col-span-4"
        // CRM
      ];
      return classes[index] || "md:col-span-4";
    };
    const servicesWithKeys = computed(() => {
      const keys = ["whatsapp", "sms", "otp", "live_chat", "crm"];
      return services.map((service, index) => ({
        ...service,
        key: keys[index],
        gridClass: getGridClass(index)
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300" }, _attrs))}><div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"><div class="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"></div><div class="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"><div class="text-center mb-16"><h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">${ssrInterpolate(_ctx.$t("index.services.title"))}</h2><p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> Everything you need to communicate with your customers, all in one place. </p></div><div class="grid grid-cols-1 md:grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(unref(servicesWithKeys), (item, index) => {
        _push(`<div class="${ssrRenderClass([
          item.gridClass,
          "group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
        ])}"><div class="h-full flex flex-col relative"><div class="${ssrRenderClass([{ "sm:h-80 group-hover:sm:h-48": index === 0 }, "relative h-48 sm:h-64 overflow-hidden transition-all duration-500 group-hover:h-32"])}"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", _ctx.$t(`index.services.items.${item.key}.label`))} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"><div class="absolute bottom-4 left-4 z-20"><div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: index === 0 ? "i-simple-icons-whatsapp" : "i-heroicons-chat-bubble-left-right",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div><h3 class="text-2xl font-bold text-white">${ssrInterpolate(_ctx.$t(`index.services.items.${item.key}.label`))}</h3></div></div><div class="p-6 flex-1 flex flex-col bg-white dark:bg-gray-900 relative z-20"><p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">${ssrInterpolate(_ctx.$t(`index.services.items.${item.key}.title`))}</p><div class="space-y-2 mb-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 ease-out overflow-hidden"><!--[-->`);
        ssrRenderList(3, (feature, fIndex) => {
          _push(`<div class="flex items-start gap-2">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-check-circle",
            class: "w-4 h-4 text-primary-500 mt-1 shrink-0"
          }, null, _parent));
          _push(`<span class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t(
            `index.services.items.${item.key}.features.${fIndex + 1}`
          ))}</span></div>`);
        });
        _push(`<!--]--></div><div class="mt-auto">`);
        _push(ssrRenderComponent(_component_UButton, {
          to: item.link,
          variant: "ghost",
          color: "primary",
          class: "group-hover:translate-x-2 transition-transform p-0"
        }, {
          trailing: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-right",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-right",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("index.services.learn_more"))} `);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("index.services.learn_more")) + " ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "HomeServices" });
const clientJourney = [
  {
    step: 1,
    title: "1- Send Your Marketing Campaigns",
    description: [
      "Choose the appropriate channel:",
      "WhatsApp Broadcast - Bulk SMS",
      "Accurate statistics on message engagement."
    ]
  },
  {
    step: 2,
    title: "2- Receive Advertising Messages with Maximum Efficiency:",
    description: [
      "Automatic distribution to:",
      "Team members - AI Agent - Workflow",
      "Fast responses - Performance tracking - Reports and analytics"
    ]
  },
  {
    step: 3,
    title: "3- Collect Client Data Accurately:",
    description: [
      "Customer interests - Client stage in the sales funnel",
      "Detailed data (location, purchasing power, etc.)",
      "Follow-up schedules - Notes and reminders"
    ]
  },
  {
    step: 4,
    title: "4- Take the Appropriate Action:",
    description: [
      "Feed advertising platforms with data to improve performance.",
      "Customized messages for each stage in the sales funnel.",
      "Identify high-value customers."
    ]
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ClientJourney",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const clientJourneyWithKeys = computed(() => {
      return clientJourney.map((item) => ({
        ...item,
        key: item.step.toString()
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300" }, _attrs))}><div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"><div class="text-center mb-20"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">${ssrInterpolate(_ctx.$t("index.client_journey.title"))}</h2><p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> A simple, transparent process to get you started with BeOn. </p></div><div class="relative"><div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"><!--[-->`);
      ssrRenderList(unref(clientJourneyWithKeys), (item, index) => {
        _push(`<div class="relative group"><div class="relative z-10 flex justify-center mb-6"><div class="w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-100 dark:border-gray-800 flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300 shadow-sm">${ssrInterpolate(item.step)}</div></div><div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative z-10 h-full flex flex-col items-center text-center"><div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">${ssrInterpolate(_ctx.$t(`index.client_journey.steps.${item.key}.title`))}</h3><ul class="space-y-2 text-left w-full"><!--[-->`);
        ssrRenderList(3, (line, lIndex) => {
          _push(`<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-check",
            class: "w-4 h-4 text-green-500 shrink-0 mt-0.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(_ctx.$t(
            `index.client_journey.steps.${item.key}.description.${lIndex + 1}`
          ))}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ClientJourney.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "HomeClientJourney" });
const smartMessages = [
  {
    title: "Empower Your Team",
    description: "I'm your AI assistant — helping your team craft the right replies to customer messages, saving their time, and offering valuable suggestions.",
    icon: "i-heroicons-light-bulb"
  },
  {
    title: "Analyze Customer Intent",
    description: "I'm your AI assistant — helping your team understand and analyze customer intent (inquiry, complaint, purchase), suggesting suitable responses, and boosting conversion.",
    icon: "i-heroicons-cpu-chip"
  },
  {
    title: "Instant Replies",
    description: "I'm your AI assistant — no need to burden your team with repetitive questions. I handle instant responses and provide your customers with immediate answers.",
    icon: "i-heroicons-chat-bubble-left-right"
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SmartMessages",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const smartMessagesWithKeys = computed(() => {
      const keys = ["empower_team", "analyze_intent", "instant_replies"];
      return smartMessages.map((item, index) => ({
        ...item,
        key: keys[index]
      }));
    });
    const typedText = ref("");
    const isTyping = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative" }, _attrs))} data-v-7604eded><div class="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" data-v-7604eded></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" data-v-7604eded><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center" data-v-7604eded><div class="flex flex-col gap-8" data-v-7604eded><div data-v-7604eded><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6" data-v-7604eded>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-sparkles",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-7604eded>AI-Powered Automation</span></div><h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6" data-v-7604eded>${ssrInterpolate(_ctx.$t("index.smart_messages.title"))} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400" data-v-7604eded>${ssrInterpolate(_ctx.$t("index.smart_messages.subtitle"))}</span></h2><p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed" data-v-7604eded>${ssrInterpolate(_ctx.$t("index.smart_messages.description"))}</p></div><div class="grid gap-6" data-v-7604eded><!--[-->`);
      ssrRenderList(unref(smartMessagesWithKeys), (card, index) => {
        _push(`<div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300" data-v-7604eded><div class="shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400" data-v-7604eded>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><div data-v-7604eded><h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1" data-v-7604eded>${ssrInterpolate(_ctx.$t(`index.smart_messages.cards.${card.key}.title`))}</h4><p class="text-sm text-gray-600 dark:text-gray-400" data-v-7604eded>${ssrInterpolate(_ctx.$t(`index.smart_messages.cards.${card.key}.description`))}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="relative" data-v-7604eded><div class="relative bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden aspect-[4/5] sm:aspect-square flex flex-col" data-v-7604eded><div class="p-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur flex items-center gap-4" data-v-7604eded><div class="relative" data-v-7604eded><div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white font-bold" data-v-7604eded> AI </div><div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" data-v-7604eded></div></div><div data-v-7604eded><div class="font-semibold text-white" data-v-7604eded> BeOn Assistant </div><div class="text-xs text-gray-400 flex items-center gap-1" data-v-7604eded><span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" data-v-7604eded></span> Online </div></div></div><div class="flex-1 p-6 space-y-6 overflow-hidden relative" data-v-7604eded><div class="flex gap-4 items-end" data-v-7604eded><div class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-300" data-v-7604eded> U </div><div class="bg-gray-800 text-gray-200 p-4 rounded-2xl rounded-bl-none max-w-[80%]" data-v-7604eded> Hi, I&#39;m looking for a way to automate my customer support. Can you help? </div></div>`);
      if (unref(isTyping)) {
        _push(`<div class="flex gap-2 items-center text-xs text-primary-400 ml-12 animate-pulse" data-v-7604eded>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-cpu-chip",
          class: "w-4 h-4"
        }, null, _parent));
        _push(` Analyzing intent... </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-4 items-end flex-row-reverse" data-v-7604eded><div class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs text-white" data-v-7604eded> AI </div><div class="bg-primary-600 text-white p-4 rounded-2xl rounded-br-none max-w-[90%] shadow-lg shadow-primary-900/20" data-v-7604eded><p class="leading-relaxed" data-v-7604eded>${ssrInterpolate(unref(typedText))}<span class="animate-pulse" data-v-7604eded>|</span></p></div></div></div><div class="p-4 border-t border-gray-800 bg-gray-900/50" data-v-7604eded><div class="h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center px-4 justify-between opacity-50" data-v-7604eded><div class="h-2 w-32 bg-gray-700 rounded-full" data-v-7604eded></div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-paper-airplane",
        class: "w-5 h-5 text-gray-600"
      }, null, _parent));
      _push(`</div></div></div><div class="absolute -right-8 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce-slow" data-v-7604eded><div class="flex items-center gap-3" data-v-7604eded><div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400" data-v-7604eded>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-bolt",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div data-v-7604eded><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-7604eded> Instant Reply </div><div class="text-xs text-gray-500" data-v-7604eded> 0.2s response time </div></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SmartMessages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-7604eded"]]), { __name: "HomeSmartMessages" });
const whyBeOn = [
  {
    title: "Competitive prices",
    description: "We are distinguished by our competitive prices for all the services we provide, transparent pricing with no hidden fees, and a variety of packages to suit all business sizes.",
    icon: "i-heroicons-currency-dollar"
  },
  {
    title: "Ease of control and use",
    description: "The BeOn development team always works on building a system and dashboard that is easy to use and easy to integrate via API with any software system.",
    icon: "i-heroicons-cog-6-tooth"
  },
  {
    title: "Customer service that protects BeOn's reputation",
    description: "We provide outstanding and fast support that befits our valued customers and enhances BeOn's position.",
    icon: "i-heroicons-lifebuoy"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WhyBeOn",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const sectionRef = ref(null);
    const isVisible = ref(false);
    const whyBeOnWithKeys = computed(() => {
      const keys = ["competitive_prices", "ease_of_use", "customer_service"];
      return whyBeOn.map((item, index) => ({
        ...item,
        key: keys[index]
      }));
    });
    useIntersectionObserver(
      sectionRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold: 0.1 }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
      }, _attrs))}><div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div><div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out"
      ])}"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">${ssrInterpolate(_ctx.$t("index.why_beon.title"))} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">${ssrInterpolate(_ctx.$t("index.why_beon.brand_name"))}</span></h2><p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">${ssrInterpolate(_ctx.$t("index.why_beon.description"))}</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(whyBeOnWithKeys), (card, index) => {
        _push(`<div class="${ssrRenderClass([[
          unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        ], "group bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 transition-all duration-500 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"])}" style="${ssrRenderStyle({ transitionDelay: `${index * 150}ms` })}"><div class="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: "w-8 h-8"
        }, null, _parent));
        _push(`</div><h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">${ssrInterpolate(_ctx.$t(`index.why_beon.cards.${card.key}.title`))}</h3><p class="text-gray-600 dark:text-gray-400 leading-relaxed">${ssrInterpolate(_ctx.$t(`index.why_beon.cards.${card.key}.description`))}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/WhyBeOn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "HomeWhyBeOn" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("index.meta.title"),
      description: () => t("index.meta.description"),
      ogTitle: () => t("index.meta.title"),
      ogDescription: () => t("index.meta.description"),
      ogImage: "https://beon.chat/og-image.png",
      // Placeholder
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHeroSection = __nuxt_component_0;
      const _component_HomeLogos = __nuxt_component_1;
      const _component_HomeServices = __nuxt_component_2;
      const _component_HomeClientJourney = __nuxt_component_3;
      const _component_HomeSmartMessages = __nuxt_component_4;
      const _component_HomeWhyBeOn = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeLogos, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeServices, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeClientJourney, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSmartMessages, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeWhyBeOn, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CJveBRL8.mjs.map
