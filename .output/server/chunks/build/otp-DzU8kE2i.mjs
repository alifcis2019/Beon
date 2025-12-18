import { e as useSeoMeta, n as _sfc_main$i, _ as _sfc_main$B, a as _sfc_main$v, I as ImageComponent, d as useIntersectionObserver } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold: 0.3 }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      const _component_NuxtImg = ImageComponent;
      _push(`<section${ssrRenderAttrs(mergeProps({
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
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Subscribe now `);
          } else {
            return [
              createTextVNode(" Subscribe now ")
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
            if (__props.type === "sms") {
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
              _push2(`<div class="flex-1 text-center"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}> BeOn OTP </div></div><div class="w-6"${_scopeId}></div></div><div class="flex-1 p-4 bg-gray-50"${_scopeId}><div class="text-center text-[10px] text-gray-400 mb-4"${_scopeId}> Today 11:40 PM </div><div class="bg-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[85%] mb-2"${_scopeId}><p class="text-sm text-gray-900"${_scopeId}> Your one time passcode is <span class="font-bold"${_scopeId}>505050</span></p></div></div></div>`);
            } else {
              _push2(`<div class="bg-[#EFE7DE] h-full flex flex-col bg-opacity-50" style="${ssrRenderStyle({ "background-image": 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' })}"${_scopeId}><div class="h-12 flex justify-between items-center px-6 pt-2"${_scopeId}><span class="text-xs font-semibold"${_scopeId}>9:41</span><div class="flex gap-1.5"${_scopeId}>`);
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
              _push2(`</div></div><div class="px-4 py-2 flex items-center gap-2 bg-[#F6F6F6] border-b border-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-chevron-left",
                class: "w-6 h-6 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`<div class="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: "/logo.svg",
                class: "w-5 h-5 object-contain",
                loading: "lazy",
                alt: "BeOn Logo"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex-1"${_scopeId}><div class="text-sm font-semibold"${_scopeId}> BeOn </div><div class="text-[10px] text-gray-500"${_scopeId}> tap here for contact info </div></div><div class="flex gap-3 text-blue-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-video-camera",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-phone",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex-1 p-4"${_scopeId}><div class="flex justify-center mb-4"${_scopeId}><span class="bg-[#DDDEDD] text-gray-600 text-[10px] px-2 py-1 rounded-lg shadow-sm"${_scopeId}>Today</span></div><div class="bg-white rounded-lg p-3 max-w-[85%] shadow-sm ml-0 relative"${_scopeId}><div class="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"${_scopeId}></div><p class="text-sm text-gray-900"${_scopeId}> Your one time passcode is <span class="font-bold"${_scopeId}>505050</span></p><div class="text-[10px] text-gray-400 text-right mt-1"${_scopeId}> 11:40 </div></div></div></div>`);
            }
          } else {
            return [
              __props.type === "sms" ? (openBlock(), createBlock("div", {
                key: 0,
                class: "bg-white h-full flex flex-col"
              }, [
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
                    createVNode("div", { class: "text-xs text-gray-500" }, " BeOn OTP ")
                  ]),
                  createVNode("div", { class: "w-6" })
                ]),
                createVNode("div", { class: "flex-1 p-4 bg-gray-50" }, [
                  createVNode("div", { class: "text-center text-[10px] text-gray-400 mb-4" }, " Today 11:40 PM "),
                  createVNode("div", { class: "bg-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[85%] mb-2" }, [
                    createVNode("p", { class: "text-sm text-gray-900" }, [
                      createTextVNode(" Your one time passcode is "),
                      createVNode("span", { class: "font-bold" }, "505050")
                    ])
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "bg-[#EFE7DE] h-full flex flex-col bg-opacity-50",
                style: { "background-image": 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }
              }, [
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
                createVNode("div", { class: "px-4 py-2 flex items-center gap-2 bg-[#F6F6F6] border-b border-gray-200" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-chevron-left",
                    class: "w-6 h-6 text-blue-500"
                  }),
                  createVNode("div", { class: "w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200" }, [
                    createVNode(_component_NuxtImg, {
                      src: "/logo.svg",
                      class: "w-5 h-5 object-contain",
                      loading: "lazy",
                      alt: "BeOn Logo"
                    })
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "text-sm font-semibold" }, " BeOn "),
                    createVNode("div", { class: "text-[10px] text-gray-500" }, " tap here for contact info ")
                  ]),
                  createVNode("div", { class: "flex gap-3 text-blue-500" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-video-camera",
                      class: "w-6 h-6"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-phone",
                      class: "w-6 h-6"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex-1 p-4" }, [
                  createVNode("div", { class: "flex justify-center mb-4" }, [
                    createVNode("span", { class: "bg-[#DDDEDD] text-gray-600 text-[10px] px-2 py-1 rounded-lg shadow-sm" }, "Today")
                  ]),
                  createVNode("div", { class: "bg-white rounded-lg p-3 max-w-[85%] shadow-sm ml-0 relative" }, [
                    createVNode("div", { class: "absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent" }),
                    createVNode("p", { class: "text-sm text-gray-900" }, [
                      createTextVNode(" Your one time passcode is "),
                      createVNode("span", { class: "font-bold" }, "505050")
                    ]),
                    createVNode("div", { class: "text-[10px] text-gray-400 text-right mt-1" }, " 11:40 ")
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"><div class="${ssrRenderClass([
        "p-3 rounded-2xl shadow-lg",
        __props.type === "sms" ? "bg-[#4CA6F8]" : "bg-[#25D366]"
      ])}">`);
      if (__props.type === "sms") {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-chat-bubble-left-right-solid",
          class: "w-8 h-8 text-white"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-simple-icons-whatsapp",
          class: "w-8 h-8 text-white"
        }, null, _parent));
      }
      _push(`</div><span class="font-semibold text-gray-900 dark:text-white">${ssrInterpolate(__props.type === "sms" ? "SMS OTP" : "WhatsApp OTP")}</span></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp/OtpFeature.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "OtpFeature" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OtpIntegration",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      { id: 1, name: "Create an account and copy your token." },
      { id: 2, name: "Add the token to your system's integration." },
      { id: 3, name: "You're now ready to send OTP instantly." }
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
      ])}"> Be On offers you the best solution </h2><p class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl transition-all duration-700 delay-100 ease-out"
      ])}"> — to integrate with your system. </p></div><div class="mx-auto max-w-2xl lg:max-w-none"><dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div style="${ssrRenderStyle({ transitionDelay: `${index * 200 + 200}ms` })}" class="${ssrRenderClass([
          unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          "flex flex-col items-center text-center transition-all duration-700 ease-out"
        ])}"><div class="mb-6 h-48 w-full flex items-center justify-center"><div class="relative w-48 h-48">`);
        if (step.id === 1) {
          _push(`<svg viewBox="0 0 200 200" class="w-full h-full text-blue-500" fill="currentColor"><rect x="60" y="40" width="80" height="140" rx="10" fill="#EBF5FF" stroke="#3B82F6" stroke-width="2"></rect><rect x="70" y="60" width="60" height="60" rx="4" fill="white" stroke="#93C5FD" stroke-width="2"></rect><circle cx="100" cy="160" r="5" fill="#3B82F6"></circle></svg>`);
        } else if (step.id === 2) {
          _push(`<svg viewBox="0 0 200 200" class="w-full h-full text-blue-500" fill="currentColor"><rect x="40" y="50" width="120" height="100" rx="4" fill="#EBF5FF" stroke="#3B82F6" stroke-width="2"></rect><path d="M60 90 L90 90" stroke="#3B82F6" stroke-width="4" stroke-linecap="round"></path><path d="M60 110 L110 110" stroke="#3B82F6" stroke-width="4" stroke-linecap="round"></path><circle cx="140" cy="130" r="20" fill="white" stroke="#3B82F6" stroke-width="2"></circle><path d="M130 130 L150 130 M140 120 L140 140" stroke="#3B82F6" stroke-width="2"></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 200 200" class="w-full h-full text-blue-500" fill="currentColor"><rect x="60" y="40" width="80" height="140" rx="10" fill="#EBF5FF" stroke="#3B82F6" stroke-width="2"></rect><path d="M80 100 L95 115 L120 85" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="130" cy="60" r="15" fill="#10B981" opacity="0.2"></circle></svg>`);
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
      _push(`<span class="text-gray-600 dark:text-gray-300">Excellent technical support to help solve any issues.</span></li><li class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
        "flex gap-x-3 transition-all duration-700 delay-800 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-circle",
        class: "mt-1 h-5 w-5 flex-none text-blue-500"
      }, null, _parent));
      _push(`<span class="text-gray-600 dark:text-gray-300">Easy-to-use dashboard with statistical reports to support your decisions.</span></li><li class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
        "flex gap-x-3 transition-all duration-700 delay-900 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-circle",
        class: "mt-1 h-5 w-5 flex-none text-blue-500"
      }, null, _parent));
      _push(`<span class="text-gray-600 dark:text-gray-300">Smooth API integration compatible with any software system.</span></li></ul></div></div></div></div>`);
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
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$i;
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      const _component_NuxtImg = ImageComponent;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-24 sm:py-32 bg-gray-50 dark:bg-gray-900" }, _attrs))}><div class="${ssrRenderClass([unref(isVisible) ? "opacity-100 scale-100" : "opacity-0 scale-90", "absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl transition-all duration-1000 ease-out"])}"></div><div class="${ssrRenderClass([unref(isVisible) ? "opacity-100 scale-100" : "opacity-0 scale-90", "absolute top-0 -right-48 w-[800px] h-[800px] bg-indigo-50/40 dark:bg-indigo-900/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ease-out"])}"></div><div class="mx-auto max-w-7xl px-6 lg:px-8 relative"><div class="mx-auto max-w-2xl text-center mb-16"><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "flex justify-center mb-6 transition-all duration-700 delay-100 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UBadge, {
        variant: "subtle",
        size: "md",
        class: "rounded-full px-4 py-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-simple-icons-meta",
              class: "w-4 h-4 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(` Meta Provider &amp; SMS Integration <a href="https://api.whatsapp.com/send/?phone=201155888086&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" class="text-primary-500 font-medium cursor-pointer hover:underline"${_scopeId}>Try now →</a></span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-2" }, [
                createVNode(_component_UIcon, {
                  name: "i-simple-icons-meta",
                  class: "w-4 h-4 text-blue-500"
                }),
                createTextVNode(" Meta Provider & SMS Integration "),
                createVNode("a", {
                  href: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
                  target: "_blank",
                  class: "text-primary-500 font-medium cursor-pointer hover:underline"
                }, "Try now →")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6 transition-all duration-700 delay-200 ease-out"
      ])}"> OTP message reaches your customers instantly </h1><p class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10 transition-all duration-700 delay-300 ease-out"
      ])}"> With BeOn, connect your system with the easiest API integration and start activating your customers immediately. </p><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "flex items-center justify-center gap-x-6 transition-all duration-700 delay-400 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        size: "xl",
        color: "neutral",
        variant: "solid",
        class: "px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Subscribe now `);
          } else {
            return [
              createTextVNode(" Subscribe now ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Try Free Trial `);
          } else {
            return [
              createTextVNode(" Try Free Trial ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-16 flow-root sm:mt-24"><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        "relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 transition-all duration-1000 delay-500 ease-out"
      ])}"><div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 py-8"><div class="relative">`);
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
            _push2(`<div class="flex-1 text-center"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}> BeOn OTP </div></div><div class="w-6"${_scopeId}></div></div><div class="flex-1 p-4 bg-gray-50"${_scopeId}><div class="text-center text-[10px] text-gray-400 mb-4"${_scopeId}> Today 11:40 PM </div><div class="bg-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[85%] mb-2"${_scopeId}><p class="text-sm text-gray-900"${_scopeId}> Your one time passcode is <span class="font-bold"${_scopeId}>505050</span></p></div></div></div>`);
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
                    createVNode("div", { class: "text-xs text-gray-500" }, " BeOn OTP ")
                  ]),
                  createVNode("div", { class: "w-6" })
                ]),
                createVNode("div", { class: "flex-1 p-4 bg-gray-50" }, [
                  createVNode("div", { class: "text-center text-[10px] text-gray-400 mb-4" }, " Today 11:40 PM "),
                  createVNode("div", { class: "bg-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[85%] mb-2" }, [
                    createVNode("p", { class: "text-sm text-gray-900" }, [
                      createTextVNode(" Your one time passcode is "),
                      createVNode("span", { class: "font-bold" }, "505050")
                    ])
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
      _push(`</div><span class="font-semibold text-gray-900 dark:text-white">SMS OTP</span></div></div><div class="relative">`);
      _push(ssrRenderComponent(OtpPhoneMockup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-[#EFE7DE] h-full flex flex-col bg-opacity-50" style="${ssrRenderStyle({ "background-image": 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' })}"${_scopeId}><div class="h-12 flex justify-between items-center px-6 pt-2"${_scopeId}><span class="text-xs font-semibold"${_scopeId}>9:41</span><div class="flex gap-1.5"${_scopeId}>`);
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
            _push2(`</div></div><div class="px-4 py-2 flex items-center gap-2 bg-[#F6F6F6] border-b border-gray-200"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chevron-left",
              class: "w-6 h-6 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/logo.svg",
              class: "w-5 h-5 object-contain",
              loading: "lazy",
              alt: "BeOn Logo"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1"${_scopeId}><div class="text-sm font-semibold"${_scopeId}> BeOn </div><div class="text-[10px] text-gray-500"${_scopeId}> tap here for contact info </div></div><div class="flex gap-3 text-blue-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-video-camera",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-phone",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex-1 p-4"${_scopeId}><div class="flex justify-center mb-4"${_scopeId}><span class="bg-[#DDDEDD] text-gray-600 text-[10px] px-2 py-1 rounded-lg shadow-sm"${_scopeId}>Today</span></div><div class="bg-white rounded-lg p-3 max-w-[85%] shadow-sm ml-0 relative"${_scopeId}><div class="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"${_scopeId}></div><p class="text-sm text-gray-900"${_scopeId}> Your one time passcode is <span class="font-bold"${_scopeId}>505050</span></p><div class="text-[10px] text-gray-400 text-right mt-1"${_scopeId}> 11:40 </div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "bg-[#EFE7DE] h-full flex flex-col bg-opacity-50",
                style: { "background-image": 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }
              }, [
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
                createVNode("div", { class: "px-4 py-2 flex items-center gap-2 bg-[#F6F6F6] border-b border-gray-200" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-chevron-left",
                    class: "w-6 h-6 text-blue-500"
                  }),
                  createVNode("div", { class: "w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200" }, [
                    createVNode(_component_NuxtImg, {
                      src: "/logo.svg",
                      class: "w-5 h-5 object-contain",
                      loading: "lazy",
                      alt: "BeOn Logo"
                    })
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "text-sm font-semibold" }, " BeOn "),
                    createVNode("div", { class: "text-[10px] text-gray-500" }, " tap here for contact info ")
                  ]),
                  createVNode("div", { class: "flex gap-3 text-blue-500" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-video-camera",
                      class: "w-6 h-6"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-phone",
                      class: "w-6 h-6"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex-1 p-4" }, [
                  createVNode("div", { class: "flex justify-center mb-4" }, [
                    createVNode("span", { class: "bg-[#DDDEDD] text-gray-600 text-[10px] px-2 py-1 rounded-lg shadow-sm" }, "Today")
                  ]),
                  createVNode("div", { class: "bg-white rounded-lg p-3 max-w-[85%] shadow-sm ml-0 relative" }, [
                    createVNode("div", { class: "absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent" }),
                    createVNode("p", { class: "text-sm text-gray-900" }, [
                      createTextVNode(" Your one time passcode is "),
                      createVNode("span", { class: "font-bold" }, "505050")
                    ]),
                    createVNode("div", { class: "text-[10px] text-gray-400 text-right mt-1" }, " 11:40 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"><div class="bg-[#25D366] p-3 rounded-2xl shadow-lg">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-whatsapp",
        class: "w-8 h-8 text-white"
      }, null, _parent));
      _push(`</div><span class="font-semibold text-gray-900 dark:text-white">WhatsApp OTP</span></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/otp/OtpHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OtpHero = Object.assign(_sfc_main$1, { __name: "OtpHero" });
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
//# sourceMappingURL=otp-DzU8kE2i.mjs.map
