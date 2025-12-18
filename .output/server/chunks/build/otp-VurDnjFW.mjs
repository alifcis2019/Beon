import { f as useSeoMeta, a as _export_sfc, u as useMouseInElement, b as _sfc_main$v, _ as _sfc_main$B, e as useIntersectionObserver } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "OtpFeature",
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
      }, _attrs))} data-v-c2a74666><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-c2a74666><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-c2a74666><div class="${ssrRenderClass([
        __props.imageSide === "right" ? "lg:order-1" : "lg:order-2",
        "transition-all duration-1000 ease-out",
        unref(isVisible) ? "opacity-100 translate-x-0" : __props.imageSide === "right" ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
      ])}" data-v-c2a74666><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-blue-900/20 border border-gray-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-sm" data-v-c2a74666>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.type === "sms" ? "i-heroicons-chat-bubble-left-right" : "i-simple-icons-whatsapp",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-c2a74666>${ssrInterpolate(__props.type === "sms" ? "SMS Gateway" : "WhatsApp Business API")}</span></div><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8" data-v-c2a74666>${ssrInterpolate(__props.title)}</h2><div class="space-y-6" data-v-c2a74666><!--[-->`);
      ssrRenderList(__props.features, (feature, index) => {
        _push(`<div style="${ssrRenderStyle({ transitionDelay: `${index * 100}ms` })}" class="${ssrRenderClass([
          unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "flex gap-4 p-4 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-primary-100 dark:hover:border-primary-900/50 shadow-sm hover:shadow-md"
        ])}" data-v-c2a74666><div class="shrink-0 w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400" data-v-c2a74666>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-check",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-v-c2a74666>${ssrInterpolate(feature)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([
        __props.imageSide === "right" ? "lg:order-2" : "lg:order-1",
        "relative perspective-1000"
      ])}" data-v-c2a74666><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 rotate-y-0 scale-100" : "opacity-0 rotate-y-12 scale-95",
        "relative aspect-square rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700 shadow-2xl transition-all duration-1000 delay-300"
      ])}" data-v-c2a74666><div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 flex flex-col" data-v-c2a74666><div class="flex items-center justify-between mb-8" data-v-c2a74666><div class="flex gap-2" data-v-c2a74666><div class="w-3 h-3 rounded-full bg-red-400" data-v-c2a74666></div><div class="w-3 h-3 rounded-full bg-yellow-400" data-v-c2a74666></div><div class="w-3 h-3 rounded-full bg-green-400" data-v-c2a74666></div></div><div class="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded-full" data-v-c2a74666></div></div><div class="flex-1 space-y-4" data-v-c2a74666><div class="flex gap-3" data-v-c2a74666><div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0" data-v-c2a74666></div><div class="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-600 max-w-[80%]" data-v-c2a74666><div class="h-2 w-32 bg-gray-100 dark:bg-gray-600 rounded-full mb-2" data-v-c2a74666></div><div class="h-2 w-24 bg-gray-100 dark:bg-gray-600 rounded-full" data-v-c2a74666></div></div></div><div class="flex gap-3 flex-row-reverse" data-v-c2a74666><div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 shrink-0 flex items-center justify-center" data-v-c2a74666>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-user",
        class: "w-4 h-4 text-primary-600 dark:text-primary-400"
      }, null, _parent));
      _push(`</div><div class="bg-primary-500 text-white p-3 rounded-2xl rounded-tr-none shadow-md max-w-[80%]" data-v-c2a74666><p class="text-sm font-medium" data-v-c2a74666> Your verification code is: 5921 </p></div></div><div class="absolute bottom-8 right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce-slow" data-v-c2a74666><div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400" data-v-c2a74666>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-badge",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div data-v-c2a74666><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-c2a74666> Delivered </div><div class="text-xs text-gray-500 dark:text-gray-400" data-v-c2a74666> 0.8s latency </div></div></div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp/OtpFeature.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-c2a74666"]]), { __name: "OtpFeature" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OtpIntegration",
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
        title: "Get your API Key",
        description: "Sign up and generate your secure access token instantly.",
        icon: "i-heroicons-key"
      },
      {
        id: 2,
        title: "Install SDK",
        description: "Use our lightweight SDKs for Node, Python, PHP, and more.",
        icon: "i-heroicons-command-line"
      },
      {
        id: 3,
        title: "Send OTP",
        description: "One line of code to send verifications globally.",
        icon: "i-heroicons-paper-airplane"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div><div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="order-2 lg:order-1"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12"> Integration so simple,<br><span class="text-primary-600">it feels like magic.</span></h2><div class="space-y-8"><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="flex gap-6 relative group">`);
        if (index !== steps.length - 1) {
          _push(`<div class="absolute left-6 top-12 bottom-[-32px] w-px bg-gray-200 dark:bg-gray-800 group-hover:bg-primary-500/50 transition-colors duration-300"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative"><div class="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: step.icon,
          class: "w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-500"
        }, null, _parent));
        _push(`</div></div><div class="pb-8"><h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">${ssrInterpolate(step.title)}</h3><p class="text-gray-600 dark:text-gray-400 leading-relaxed">${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="order-1 lg:order-2"><div class="${ssrRenderClass([
        unref(isVisible) ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
        "relative rounded-xl bg-[#1e1e1e] shadow-2xl border border-gray-800 overflow-hidden transform transition-all duration-1000"
      ])}"><div class="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#333]"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div><div class="ml-4 text-xs text-gray-500 font-mono"> send-otp.js </div></div><div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto"><div class="text-gray-400"> // Initialize BeOn Client </div><div class="flex"><span class="text-[#569cd6]">const</span><span class="text-[#9cdcfe] ml-2">beon</span><span class="text-[#d4d4d4] mx-2">=</span><span class="text-[#569cd6]">require</span><span class="text-[#d4d4d4]">(</span><span class="text-[#ce9178]">&#39;beon-sdk&#39;</span><span class="text-[#d4d4d4]">);</span></div><br><div class="text-gray-400"> // Send OTP via WhatsApp </div><div class="flex"><span class="text-[#c586c0]">await</span><span class="text-[#9cdcfe] ml-2">beon</span><span class="text-[#d4d4d4]">.</span><span class="text-[#dcdcaa]">sendOtp</span><span class="text-[#d4d4d4]">({</span></div><div class="pl-4 flex"><span class="text-[#9cdcfe]">channel</span><span class="text-[#d4d4d4]">:</span><span class="text-[#ce9178] ml-2">&#39;whatsapp&#39;</span><span class="text-[#d4d4d4]">,</span></div><div class="pl-4 flex"><span class="text-[#9cdcfe]">phone</span><span class="text-[#d4d4d4]">:</span><span class="text-[#ce9178] ml-2">&#39;+201234567890&#39;</span><span class="text-[#d4d4d4]">,</span></div><div class="pl-4 flex"><span class="text-[#9cdcfe]">code</span><span class="text-[#d4d4d4]">:</span><span class="text-[#b5cea8] ml-2">5921</span></div><div class="text-[#d4d4d4]"> }); </div><br><div class="flex items-center gap-2 text-[#6a9955]"><span>// Response: { success: true, id: &quot;msg_123&quot; }</span><span class="w-2 h-4 bg-white animate-pulse"></span></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp/OtpIntegration.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "OtpIntegration" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OtpVideo",
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
      ])}"><div class="relative overflow-hidden rounded-lg shadow-2xl"><div class="aspect-[16/9] bg-gray-900 relative flex items-center justify-center group cursor-pointer"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2426&amp;q=80" alt="Dashboard Preview" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"><div class="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-play-solid",
        class: "w-10 h-10 text-blue-600 ml-1"
      }, null, _parent));
      _push(`</div><div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp/OtpVideo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "OtpVideo" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OtpHero",
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
      const _component_UButton = _sfc_main$v;
      const _component_UIcon = _sfc_main$B;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-gray-900 min-h-[90vh] flex items-center transition-colors duration-300"
      }, _attrs))} data-v-1ab686f5><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-1ab686f5><div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-[120px] animate-pulse" data-v-1ab686f5></div><div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" data-v-1ab686f5></div><div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" data-v-1ab686f5></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full" data-v-1ab686f5><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-1ab686f5><div class="max-w-2xl" data-v-1ab686f5><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-500/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8 transition-all duration-700"
      ])}" data-v-1ab686f5><span class="relative flex h-2 w-2" data-v-1ab686f5><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" data-v-1ab686f5></span><span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500" data-v-1ab686f5></span></span> Meta Official Partner </div><h1 class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight transition-all duration-700 delay-100"
      ])}" data-v-1ab686f5> Secure OTP,<br data-v-1ab686f5><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400" data-v-1ab686f5>Instantly Delivered.</span></h1><p class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200"
      ])}" data-v-1ab686f5> Guarantee delivery with our multi-channel OTP infrastructure. SMS, WhatsApp, and Voice failover ensures your users are verified in seconds, every time. </p><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "flex flex-wrap gap-4 transition-all duration-700 delay-300"
      ])}" data-v-1ab686f5>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "px-8 py-4 rounded-full shadow-lg shadow-primary-500/25 hover:scale-105 transition-transform font-bold"
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
        to: "#features",
        size: "xl",
        color: "gray",
        variant: "ghost",
        class: "px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn More `);
          } else {
            return [
              createTextVNode(" Learn More ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative perspective-1000" style="${ssrRenderStyle({ transform: unref(cardTransform) })}" data-v-1ab686f5><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0 rotate-y-[-12deg]" : "opacity-0 translate-y-20",
        "relative mx-auto w-[300px] h-[600px] bg-gray-100 dark:bg-gray-900 rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl transition-all duration-1000 delay-500 transform-style-3d"
      ])}" data-v-1ab686f5><div class="absolute inset-0 bg-white dark:bg-gray-950 rounded-[2.5rem] overflow-hidden flex flex-col" data-v-1ab686f5><div class="h-14 flex justify-between items-center px-6 text-gray-900 dark:text-white" data-v-1ab686f5><span class="text-sm font-medium" data-v-1ab686f5>9:41</span><div class="flex gap-2" data-v-1ab686f5>`);
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
      _push(`</div></div><div class="mt-8 px-4" data-v-1ab686f5><div class="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-gray-200 dark:border-white/10 shadow-lg animate-slide-in-down" data-v-1ab686f5><div class="flex items-start gap-3" data-v-1ab686f5><div class="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shrink-0" data-v-1ab686f5>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-whatsapp",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><div class="flex-1 min-w-0" data-v-1ab686f5><div class="flex justify-between items-start" data-v-1ab686f5><h4 class="text-sm font-semibold text-gray-900 dark:text-white" data-v-1ab686f5> BeOn Security </h4><span class="text-xs text-gray-500 dark:text-gray-400" data-v-1ab686f5>Now</span></div><p class="text-sm text-gray-600 dark:text-gray-300 mt-1" data-v-1ab686f5> Your verification code is: <span class="text-gray-900 dark:text-white font-bold text-lg tracking-wider" data-v-1ab686f5>8492</span></p></div></div></div></div><div class="mt-auto mb-12 flex flex-col items-center text-gray-400 dark:text-white/50" data-v-1ab686f5>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-lock-closed",
        class: "w-6 h-6 mb-2"
      }, null, _parent));
      _push(`<span class="text-xs" data-v-1ab686f5>Swipe up to unlock</span></div></div><div class="absolute -right-12 top-1/4 bg-white/80 dark:bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl transform translate-z-20 animate-float" data-v-1ab686f5>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-shield-check",
        class: "w-8 h-8 text-green-500 dark:text-green-400"
      }, null, _parent));
      _push(`</div><div class="absolute -left-8 bottom-1/3 bg-white/80 dark:bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl transform translate-z-30 animate-float-delayed" data-v-1ab686f5>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-bolt",
        class: "w-8 h-8 text-yellow-500 dark:text-yellow-400"
      }, null, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp/OtpHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OtpHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-1ab686f5"]]), { __name: "OtpHero" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "otp",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "OTP Solutions - BeOn",
      description: "Secure and instant OTP delivery via SMS and WhatsApp.",
      ogTitle: "OTP Solutions - BeOn",
      ogDescription: "Secure and instant OTP delivery via SMS and WhatsApp.",
      ogImage: "https://beon.chat/og-image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OtpFeature = __nuxt_component_0;
      const _component_OtpIntegration = __nuxt_component_1;
      const _component_OtpVideo = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(OtpHero, null, null, _parent));
      _push(ssrRenderComponent(_component_OtpFeature, {
        title: "Features of the SMS activation message",
        features: [
          "The most economical option to send OTP within Egypt without additional costs to the message price.",
          "Send OTP in your company name if you have a commercial register and tax card.",
          "Or use public sender as an alternative to obtaining official documents."
        ],
        "image-side": "right",
        type: "sms"
      }, null, _parent));
      _push(ssrRenderComponent(_component_OtpFeature, {
        title: "Features of the WhatsApp activation message",
        features: [
          "The best option to send international and local OTP messages.",
          "Activate the service officially via Meta to ensure your number is never blocked.",
          "Send OTP under your business name without the need for official documents through BeOn engineers using cloud WhatsApp activation."
        ],
        "image-side": "left",
        type: "whatsapp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_OtpIntegration, null, null, _parent));
      _push(ssrRenderComponent(_component_OtpVideo, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solutions/otp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=otp-VurDnjFW.mjs.map
