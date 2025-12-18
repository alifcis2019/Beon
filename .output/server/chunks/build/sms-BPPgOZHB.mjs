import { defineComponent, mergeProps, ref, unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { e as useSeoMeta, _ as _sfc_main$B, a as _sfc_main$v, d as useIntersectionObserver } from './server.mjs';
import { O as OtpPhoneMockup } from './PhoneMockup-CwLRxRgm.mjs';
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
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-white dark:bg-gray-900 min-h-[90vh] flex items-center" }, _attrs))}><div class="absolute inset-0 pointer-events-none"><div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]"></div><div class="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px]"></div></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full"><div class="grid lg:grid-cols-2 gap-12 items-center"><div class="max-w-2xl"><div class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible) }, "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 opacity-0 animate-fade-in"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chat-bubble-left-right",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>Reliable SMS Marketing</span></div><h1 class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible) }, "text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight opacity-0 translate-y-8 transition-all duration-700 delay-100"])}"> Connect with customers via <span class="text-blue-500">reliable SMS campaigns</span></h1><p class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible) }, "text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg opacity-0 translate-y-8 transition-all duration-700 delay-200"])}"> Reach your audience instantly with high-delivery SMS. Perfect for marketing offers, alerts, and transactional messages. </p><div class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible) }, "flex flex-wrap gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-300"])}">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "px-8 py-4 text-lg bg-blue-600 hover:bg-blue-500 text-white"
      }, {
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
        class: "px-8 py-4 text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Pricing `);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-right",
              class: "ml-2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" View Pricing "),
              createVNode(_component_UIcon, {
                name: "i-heroicons-arrow-right",
                class: "ml-2"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="${ssrRenderClass([{ "opacity-100 scale-100": unref(isVisible) }, "relative lg:h-[800px] flex items-center justify-center opacity-0 scale-95 transition-all duration-1000 delay-500"])}">`);
      _push(ssrRenderComponent(OtpPhoneMockup, { class: "relative z-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white h-full flex flex-col"${_scopeId}><div class="bg-gray-100 px-4 py-3 border-b flex items-center gap-3"${_scopeId}><div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs"${_scopeId}> B </div><div class="flex-1"${_scopeId}><div class="text-gray-900 font-semibold text-sm"${_scopeId}> BeOn </div><div class="text-xs text-gray-500"${_scopeId}> Text Message </div></div></div><div class="flex-1 p-4 space-y-4 bg-gray-50"${_scopeId}><div class="flex flex-col items-start max-w-[85%]"${_scopeId}><div class="bg-gray-200 rounded-2xl rounded-tl-none p-3"${_scopeId}><p class="text-gray-800 text-sm"${_scopeId}> 🔥 Flash Sale! Get 50% OFF on all plans for the next 24 hours. Use code: FLASH50 </p></div><span class="text-[10px] text-gray-400 mt-1 ml-1"${_scopeId}>10:30 AM</span></div><div class="flex flex-col items-start max-w-[85%]"${_scopeId}><div class="bg-gray-200 rounded-2xl rounded-tl-none p-3"${_scopeId}><p class="text-gray-800 text-sm"${_scopeId}> Your order #12345 has been shipped! Track it here: beon.chat/track/12345 </p></div><span class="text-[10px] text-gray-400 mt-1 ml-1"${_scopeId}>2:15 PM</span></div></div><div class="p-3 border-t bg-white"${_scopeId}><div class="h-10 border rounded-full flex items-center px-4 text-gray-400 text-sm"${_scopeId}> Text message </div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white h-full flex flex-col" }, [
                createVNode("div", { class: "bg-gray-100 px-4 py-3 border-b flex items-center gap-3" }, [
                  createVNode("div", { class: "w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs" }, " B "),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "text-gray-900 font-semibold text-sm" }, " BeOn "),
                    createVNode("div", { class: "text-xs text-gray-500" }, " Text Message ")
                  ])
                ]),
                createVNode("div", { class: "flex-1 p-4 space-y-4 bg-gray-50" }, [
                  createVNode("div", { class: "flex flex-col items-start max-w-[85%]" }, [
                    createVNode("div", { class: "bg-gray-200 rounded-2xl rounded-tl-none p-3" }, [
                      createVNode("p", { class: "text-gray-800 text-sm" }, " 🔥 Flash Sale! Get 50% OFF on all plans for the next 24 hours. Use code: FLASH50 ")
                    ]),
                    createVNode("span", { class: "text-[10px] text-gray-400 mt-1 ml-1" }, "10:30 AM")
                  ]),
                  createVNode("div", { class: "flex flex-col items-start max-w-[85%]" }, [
                    createVNode("div", { class: "bg-gray-200 rounded-2xl rounded-tl-none p-3" }, [
                      createVNode("p", { class: "text-gray-800 text-sm" }, " Your order #12345 has been shipped! Track it here: beon.chat/track/12345 ")
                    ]),
                    createVNode("span", { class: "text-[10px] text-gray-400 mt-1 ml-1" }, "2:15 PM")
                  ])
                ]),
                createVNode("div", { class: "p-3 border-t bg-white" }, [
                  createVNode("div", { class: "h-10 border rounded-full flex items-center px-4 text-gray-400 text-sm" }, " Text message ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute -right-4 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl animate-bounce z-20" style="${ssrRenderStyle({ "animation-duration": "3s" })}"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-circle",
        class: "w-6 h-6 text-green-600"
      }, null, _parent));
      _push(`</div><div><div class="text-sm font-bold text-gray-900 dark:text-white"> 98% Open Rate </div><div class="text-xs text-gray-500"> Last Campaign </div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sms/SmsHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SmsHero = Object.assign(_sfc_main$4, { __name: "SmsHero" });
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
        if (isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold: 0.3 }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "py-24 sm:py-32 overflow-hidden"
      }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center"><div class="${ssrRenderClass([
        __props.imageSide === "right" ? "lg:order-1" : "lg:order-2",
        "lg:pr-8",
        "lg:pt-4",
        "transition-all duration-1000 ease-out",
        unref(isVisible) ? "opacity-100 translate-x-0" : __props.imageSide === "right" ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
      ])}"><div class="lg:max-w-lg"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-10">${ssrInterpolate(__props.title)}</h2><dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300"><!--[-->`);
      ssrRenderList(__props.features, (feature, index) => {
        _push(`<div style="${ssrRenderStyle({ transitionDelay: `${index * 100 + 300}ms` })}" class="${ssrRenderClass([
          unref(isVisible) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
          "relative pl-9 transition-all duration-700 ease-out"
        ])}"><dt class="inline font-semibold text-gray-900 dark:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-check-circle",
          class: "absolute left-1 top-1 h-5 w-5 text-blue-500"
        }, null, _parent));
        _push(`</dt><dd class="inline">${ssrInterpolate(feature)}</dd></div>`);
      });
      _push(`<!--]--></dl><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "mt-10 transition-all duration-700 delay-500 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "px-8"
      }, {
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
      _push(`</div></div></div><div class="${ssrRenderClass([
        __props.imageSide === "right" ? "lg:order-2" : "lg:order-1",
        "flex justify-center",
        "transition-all duration-1000 delay-300 ease-out",
        unref(isVisible) ? "opacity-100 translate-x-0" : __props.imageSide === "right" ? "opacity-0 translate-x-12" : "opacity-0 -translate-x-12"
      ])}"><div class="relative"><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 scale-100" : "opacity-0 scale-50",
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-100 dark:bg-gray-800 rounded-full -z-10 transition-all duration-1000 delay-500"
      ])}"></div>`);
      _push(ssrRenderComponent(OtpPhoneMockup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white h-full flex flex-col"${_scopeId}><div class="h-12 flex justify-between items-center px-6 pt-2"${_scopeId}><span class="text-xs font-semibold"${_scopeId}>9:41</span><div class="flex gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-signal",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-wifi",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-battery-50",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="px-4 py-2 flex items-center gap-2 border-b border-gray-100"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chevron-left",
              class: "w-6 h-6 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1 text-center"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}> BeOn Store </div></div><div class="w-6"${_scopeId}></div></div><div class="flex-1 p-4 bg-gray-50"${_scopeId}><div class="text-center text-[10px] text-gray-400 mb-4"${_scopeId}> Today 12:30 PM </div><div class="bg-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[90%] mb-2"${_scopeId}>`);
            if (__props.type === "marketing") {
              _push2(`<p class="text-sm text-gray-900"${_scopeId}><span class="font-bold"${_scopeId}>New Collection Alert! 👗</span><br${_scopeId}> Check out our latest summer arrivals. Free shipping on orders over $50. </p>`);
            } else {
              _push2(`<p class="text-sm text-gray-900"${_scopeId}><span class="font-bold"${_scopeId}>Order Update 📦</span><br${_scopeId}> Your package #12345 has been shipped and will arrive tomorrow. Track here: <span class="text-blue-600 underline"${_scopeId}>beon.chat/track</span></p>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white h-full flex flex-col" }, [
                createVNode("div", { class: "h-12 flex justify-between items-center px-6 pt-2" }, [
                  createVNode("span", { class: "text-xs font-semibold" }, "9:41"),
                  createVNode("div", { class: "flex gap-1.5" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-signal",
                      class: "w-4 h-4"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-wifi",
                      class: "w-4 h-4"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-battery-50",
                      class: "w-4 h-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "px-4 py-2 flex items-center gap-2 border-b border-gray-100" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-chevron-left",
                    class: "w-6 h-6 text-blue-500"
                  }),
                  createVNode("div", { class: "flex-1 text-center" }, [
                    createVNode("div", { class: "text-xs text-gray-500" }, " BeOn Store ")
                  ]),
                  createVNode("div", { class: "w-6" })
                ]),
                createVNode("div", { class: "flex-1 p-4 bg-gray-50" }, [
                  createVNode("div", { class: "text-center text-[10px] text-gray-400 mb-4" }, " Today 12:30 PM "),
                  createVNode("div", { class: "bg-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[90%] mb-2" }, [
                    __props.type === "marketing" ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm text-gray-900"
                    }, [
                      createVNode("span", { class: "font-bold" }, "New Collection Alert! 👗"),
                      createVNode("br"),
                      createTextVNode(" Check out our latest summer arrivals. Free shipping on orders over $50. ")
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-sm text-gray-900"
                    }, [
                      createVNode("span", { class: "font-bold" }, "Order Update 📦"),
                      createVNode("br"),
                      createTextVNode(" Your package #12345 has been shipped and will arrive tomorrow. Track here: "),
                      createVNode("span", { class: "text-blue-600 underline" }, "beon.chat/track")
                    ]))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"><div class="bg-[#4CA6F8] p-3 rounded-2xl shadow-lg">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chat-bubble-left-right-solid",
        class: "w-8 h-8 text-white"
      }, null, _parent));
      _push(`</div><span class="font-semibold text-gray-900 dark:text-white">${ssrInterpolate(__props.type === "marketing" ? "Marketing SMS" : "Transactional SMS")}</span></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sms/SmsFeature.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SmsFeature = Object.assign(_sfc_main$3, { __name: "SmsFeature" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SmsIntegration",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      { id: 1, name: "Sign up and get your API key." },
      { id: 2, name: "Connect via REST API or SMPP." },
      { id: 3, name: "Start sending bulk campaigns instantly." }
    ];
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
        class: "py-24 sm:py-32 bg-white dark:bg-gray-900"
      }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl text-center mb-16"><h2 class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4 transition-all duration-700 ease-out"
      ])}"> Seamless Integration </h2><p class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl transition-all duration-700 delay-100 ease-out"
      ])}"> — with your existing stack. </p></div><div class="mx-auto max-w-2xl lg:max-w-none"><dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div style="${ssrRenderStyle({ transitionDelay: `${index * 200 + 200}ms` })}" class="${ssrRenderClass([
          unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          "flex flex-col items-center text-center transition-all duration-700 ease-out"
        ])}"><div class="mb-6 h-48 w-full flex items-center justify-center"><div class="relative w-48 h-48">`);
        if (step.id === 1) {
          _push(`<svg viewBox="0 0 200 200" class="w-full h-full text-blue-500" fill="currentColor"><rect x="60" y="50" width="80" height="100" rx="8" fill="#EBF5FF" stroke="#3B82F6" stroke-width="2"></rect><circle cx="100" cy="90" r="15" fill="#3B82F6"></circle><rect x="80" y="115" width="40" height="4" rx="2" fill="#93C5FD"></rect></svg>`);
        } else if (step.id === 2) {
          _push(`<svg viewBox="0 0 200 200" class="w-full h-full text-blue-500" fill="currentColor"><circle cx="60" cy="100" r="20" fill="#EBF5FF" stroke="#3B82F6" stroke-width="2"></circle><circle cx="140" cy="100" r="20" fill="#EBF5FF" stroke="#3B82F6" stroke-width="2"></circle><path d="M80 100 L120 100" stroke="#3B82F6" stroke-width="2" stroke-dasharray="4 4"></path><path d="M100 80 L100 120" stroke="#3B82F6" stroke-width="2"></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 200 200" class="w-full h-full text-blue-500" fill="currentColor"><circle cx="100" cy="100" r="40" fill="#EBF5FF" stroke="#3B82F6" stroke-width="2"></circle><path d="M100 60 L100 40" stroke="#3B82F6" stroke-width="2"></path><path d="M100 140 L100 160" stroke="#3B82F6" stroke-width="2"></path><path d="M140 100 L160 100" stroke="#3B82F6" stroke-width="2"></path><path d="M60 100 L40 100" stroke="#3B82F6" stroke-width="2"></path><circle cx="100" cy="100" r="10" fill="#3B82F6"></circle></svg>`);
        }
        _push(`</div></div><dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white"><span class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">${ssrInterpolate(step.id)}</span> ${ssrInterpolate(step.name)}</dt></div>`);
      });
      _push(`<!--]--></dl><div class="mt-16 max-w-2xl mx-auto"><ul class="space-y-4 text-left"><li class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
        "flex gap-x-3 transition-all duration-700 delay-700 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-circle",
        class: "mt-1 h-5 w-5 flex-none text-blue-500"
      }, null, _parent));
      _push(`<span class="text-gray-600 dark:text-gray-300">High throughput for bulk campaigns.</span></li><li class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
        "flex gap-x-3 transition-all duration-700 delay-800 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-circle",
        class: "mt-1 h-5 w-5 flex-none text-blue-500"
      }, null, _parent));
      _push(`<span class="text-gray-600 dark:text-gray-300">Detailed delivery reports and analytics.</span></li><li class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
        "flex gap-x-3 transition-all duration-700 delay-900 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-circle",
        class: "mt-1 h-5 w-5 flex-none text-blue-500"
      }, null, _parent));
      _push(`<span class="text-gray-600 dark:text-gray-300">Global coverage with direct carrier connections.</span></li></ul></div></div></div></div>`);
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
//# sourceMappingURL=sms-BPPgOZHB.mjs.map
