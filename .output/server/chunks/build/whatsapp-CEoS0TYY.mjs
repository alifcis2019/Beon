import { defineComponent, mergeProps, ref, computed, unref, withCtx, createTextVNode, createVNode, withAsyncContext, toDisplayString, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { e as useSeoMeta, h as _export_sfc, o as useMouse, q as useWindowSize, p as useElementBounding, _ as _sfc_main$B, a as _sfc_main$v, I as ImageComponent, u as useI18n, r as useMouseInElement } from './server.mjs';
import { u as useFetch, _ as _sfc_main$5 } from './Carousel-BTHeUzIA.mjs';
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
import 'embla-carousel-vue';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "WhatsappHero",
  __ssrInlineRender: true,
  setup(__props) {
    const heroRef = ref(null);
    const { x, y } = useMouse();
    const { width, height } = useWindowSize();
    const { x: elementX, y: elementY } = useElementBounding(heroRef);
    const parallaxStyle = computed(() => {
      const moveX = (x.value - width.value / 2) / 50;
      const moveY = (y.value - height.value / 2) / 50;
      return {
        transform: `rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(50px)`,
        transformStyle: "preserve-3d"
      };
    });
    const displayedText = ref("");
    ref(0);
    ref(false);
    ref(100);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      const _component_NuxtImg = ImageComponent;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "heroRef",
        ref: heroRef,
        class: "relative overflow-hidden min-h-dvh flex items-center bg-white dark:bg-gray-900"
      }, _attrs))} data-v-2c7156fa><div class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300" style="${ssrRenderStyle({
        background: `radial-gradient(600px circle at ${unref(elementX)}px ${unref(elementY)}px, rgba(37, 211, 102, 0.15), transparent 40%)`
      })}" data-v-2c7156fa></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-2c7156fa><div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" data-v-2c7156fa></div><div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse delay-1000" data-v-2c7156fa></div><div class="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[100px]" data-v-2c7156fa></div></div><div class="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10" data-v-2c7156fa><div class="grid lg:grid-cols-2 gap-12 items-center" data-v-2c7156fa><div class="max-w-2xl" data-v-2c7156fa><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/5 dark:bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium mb-8 backdrop-blur-sm" data-v-2c7156fa>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-whatsapp",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-2c7156fa>Official WhatsApp Business Partner</span></div><h1 class="text-4xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight min-h-[160px] sm:min-h-[120px]" data-v-2c7156fa> Unlock the Power of <br data-v-2c7156fa><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-emerald-400" data-v-2c7156fa>${ssrInterpolate(unref(displayedText))} <span class="animate-blink text-gray-900 dark:text-white" data-v-2c7156fa>|</span></span></h1><p class="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg" data-v-2c7156fa> Transform customer communication with the world&#39;s most popular messaging app. Automate, engage, and sell directly on WhatsApp. </p><div class="flex flex-wrap gap-4" data-v-2c7156fa>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "primary",
        variant: "solid"
      }, {
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
        size: "xl",
        color: "gray",
        variant: "ghost",
        class: "px-8 py-4 text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book Demo `);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-right",
              class: "ml-2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Book Demo "),
              createVNode(_component_UIcon, {
                name: "i-heroicons-arrow-right",
                class: "ml-2"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative lg:h-[800px] flex items-center justify-center" data-v-2c7156fa><div class="relative w-[320px] h-[650px] transition-transform duration-100 ease-out" style="${ssrRenderStyle(unref(parallaxStyle))}" data-v-2c7156fa><div class="absolute inset-0 bg-gray-950 rounded-[3rem] border-[8px] border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden" data-v-2c7156fa><div class="w-full h-full bg-[#0b141a] relative flex flex-col" data-v-2c7156fa><div class="bg-[#202c33] px-4 py-3 flex items-center gap-3 shadow-md z-10" data-v-2c7156fa>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chevron-left",
        class: "text-[#00a884] w-6 h-6"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1" data-v-2c7156fa>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/logoDark.svg",
        alt: "BeOn Logo",
        class: "w-full h-full object-contain",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="flex-1" data-v-2c7156fa><div class="text-gray-100 font-medium flex items-center gap-1" data-v-2c7156fa> BeOn `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-badge-solid",
        class: "text-[#25D366] w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="text-xs text-gray-400" data-v-2c7156fa> Official Business Account </div></div></div><div class="flex-1 p-4 overflow-hidden relative" style="${ssrRenderStyle({ "background-image": 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', "opacity": "0.9" })}" data-v-2c7156fa><div class="space-y-4 mt-4" data-v-2c7156fa><div class="bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm animate-fade-in-up" data-v-2c7156fa><p class="text-gray-100 text-sm" data-v-2c7156fa> Hello! 👋 Welcome to BeOn. How can we help you today? </p><div class="text-[10px] text-gray-400 text-right mt-1" data-v-2c7156fa> 10:00 AM </div></div><div class="bg-[#202c33] p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm animate-fade-in-up delay-300" data-v-2c7156fa><div class="h-32 bg-gray-700 rounded-md mb-2 overflow-hidden relative group" data-v-2c7156fa>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/logo.svg",
        alt: "Video Thumbnail",
        class: "w-full h-full object-cover",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/20 flex items-center justify-center" data-v-2c7156fa></div></div><p class="text-gray-100 text-sm px-1" data-v-2c7156fa> Check out our latest features video! 🚀 </p><div class="text-[10px] text-gray-400 text-right mt-1" data-v-2c7156fa> 10:01 AM </div></div><div class="bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm animate-fade-in-up delay-500" data-v-2c7156fa><p class="text-gray-100 text-sm mb-3" data-v-2c7156fa> Choose an option: </p><div class="space-y-2" data-v-2c7156fa><button class="w-full py-2 px-4 bg-[#2a3942] hover:bg-[#354550] text-[#00a884] text-sm font-medium rounded transition-colors" data-v-2c7156fa> View Pricing </button><button class="w-full py-2 px-4 bg-[#2a3942] hover:bg-[#354550] text-[#00a884] text-sm font-medium rounded transition-colors" data-v-2c7156fa> Talk to Sales </button></div><div class="text-[10px] text-gray-400 text-right mt-1" data-v-2c7156fa> 10:01 AM </div></div></div></div></div></div><div class="absolute -right-12 top-20 bg-[#25D366] p-4 rounded-2xl shadow-xl animate-bounce-slow z-20 hover:scale-110 transition-transform duration-300" data-v-2c7156fa>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chat-bubble-left-ellipsis-solid",
        class: "w-8 h-8 text-white"
      }, null, _parent));
      _push(`</div><div class="absolute -left-8 bottom-32 bg-white p-3 rounded-xl shadow-xl animate-bounce-slow delay-700 z-20 hover:scale-110 transition-transform duration-300" data-v-2c7156fa><div class="flex items-center gap-2" data-v-2c7156fa><div class="w-2 h-2 rounded-full bg-green-500 animate-pulse" data-v-2c7156fa></div><span class="text-xs font-bold text-gray-900" data-v-2c7156fa>Online 24/7</span></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsapp/WhatsappHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WhatsappHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-2c7156fa"]]), { __name: "WhatsappHero" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WhatsappDemo",
  __ssrInlineRender: true,
  setup(__props) {
    const scenarios = [
      {
        title: "E-commerce Support",
        description: "Handle order tracking and returns automatically.",
        icon: "i-heroicons-shopping-bag",
        initialMessage: "Hi! Welcome to BeOn Store. How can I help you today?",
        options: [
          {
            label: "Track Order 📦",
            response: "I'd like to track my order #12345.",
            reply: "Checking... 🔍\nYour order #12345 is out for delivery! It should arrive by 5 PM today.",
            celebrate: true
          },
          {
            label: "Return Policy ↩️",
            response: "What is your return policy?",
            reply: "You can return any item within 30 days for a full refund. Would you like to start a return?"
          }
        ]
      },
      {
        title: "Appointment Booking",
        description: "Schedule meetings without human intervention.",
        icon: "i-heroicons-calendar",
        initialMessage: "Hello! I'm the BeOn Assistant. Would you like to book a demo?",
        options: [
          {
            label: "Book Demo 📅",
            response: "Yes, I'd like to book a demo.",
            reply: "Great! Please select a time slot:\n1. Tomorrow 10 AM\n2. Tomorrow 2 PM",
            celebrate: true
          },
          {
            label: "Talk to Human 👤",
            response: "Can I speak to a representative?",
            reply: "Sure. I'm connecting you with an agent now. Wait time is approx 2 mins."
          }
        ]
      }
    ];
    const activeScenario = ref(0);
    const currentMessages = ref([]);
    const isTyping = ref(false);
    const showOptions = ref(true);
    const chatContainer = ref(null);
    const currentOptions = computed(() => scenarios[activeScenario.value].options);
    watch(
      activeScenario,
      () => {
        currentMessages.value = [];
        showOptions.value = false;
        isTyping.value = true;
        setTimeout(() => {
          isTyping.value = false;
          addMessage(scenarios[activeScenario.value].initialMessage, false);
          showOptions.value = true;
        }, 1e3);
      },
      { immediate: true }
    );
    const addMessage = (text, isUser) => {
      const now = /* @__PURE__ */ new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      currentMessages.value.push({ text, isUser, time });
      scrollToBottom();
    };
    const scrollToBottom = () => {
      nextTick(() => {
        if (chatContainer.value) {
          chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_NuxtImg = ImageComponent;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden" }, _attrs))} data-v-255b566b><div class="max-w-7xl mx-auto px-6 lg:px-8" data-v-255b566b><div class="text-center mb-16" data-v-255b566b><h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" data-v-255b566b> Experience Automated Conversations </h2><p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" data-v-255b566b> Try our interactive demo below. See how BeOn&#39;s chatbots handle customer queries instantly, 24/7. </p></div><div class="grid lg:grid-cols-2 gap-16 items-center" data-v-255b566b><div class="space-y-8" data-v-255b566b><!--[-->`);
      ssrRenderList(scenarios, (scenario, index) => {
        _push(`<div class="${ssrRenderClass([{ "ring-2 ring-[#25D366]": unref(activeScenario) === index }, "p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group"])}" data-v-255b566b><div class="flex items-start gap-4" data-v-255b566b><div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-[#25D366] transition-colors" data-v-255b566b>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: scenario.icon,
          class: "w-6 h-6 text-gray-900 dark:text-white"
        }, null, _parent));
        _push(`</div><div data-v-255b566b><h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2" data-v-255b566b>${ssrInterpolate(scenario.title)}</h3><p class="text-gray-600 dark:text-gray-400 text-sm" data-v-255b566b>${ssrInterpolate(scenario.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="relative flex justify-center" data-v-255b566b><div class="w-[350px] h-[700px] bg-gray-950 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden relative" data-v-255b566b><div class="bg-[#202c33] px-4 py-3 flex items-center gap-3 shadow-md z-10 absolute top-0 w-full" data-v-255b566b>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chevron-left",
        class: "text-[#00a884] w-6 h-6"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1" data-v-255b566b>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/logo.svg",
        alt: "BeOn Logo",
        class: "w-full h-full object-contain",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="flex-1" data-v-255b566b><div class="text-gray-100 font-medium" data-v-255b566b> BeOn Support </div><div class="text-xs text-gray-400" data-v-255b566b>${ssrInterpolate(unref(isTyping) ? "typing..." : "Online")}</div></div></div><div class="h-full pt-20 pb-20 px-4 overflow-y-auto bg-[#0b141a] scrollbar-hide" style="${ssrRenderStyle({ "background-image": 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', "background-opacity": "0.05" })}" data-v-255b566b><div class="space-y-4" data-v-255b566b><!--[-->`);
      ssrRenderList(unref(currentMessages), (msg, i) => {
        _push(`<div class="${ssrRenderClass([msg.isUser ? "items-end" : "items-start", "flex flex-col"])}" data-v-255b566b><div class="${ssrRenderClass([[
          msg.isUser ? "bg-[#005c4b] text-white rounded-tr-none" : "bg-[#202c33] text-gray-100 rounded-tl-none"
        ], "max-w-[85%] p-3 rounded-lg shadow-sm text-sm relative"])}" data-v-255b566b><p class="whitespace-pre-line" data-v-255b566b>${ssrInterpolate(msg.text)}</p><div class="text-[10px] text-right mt-1 opacity-70 flex items-center justify-end gap-1" data-v-255b566b>${ssrInterpolate(msg.time)} `);
        if (msg.isUser) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-check-badge",
            class: "w-3 h-3 text-[#53bdeb]"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(isTyping)) {
        _push(`<div class="flex items-start" data-v-255b566b><div class="bg-[#202c33] p-3 rounded-lg rounded-tl-none shadow-sm" data-v-255b566b><div class="flex gap-1" data-v-255b566b><div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" data-v-255b566b></div><div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" data-v-255b566b></div><div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" data-v-255b566b></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="absolute bottom-0 w-full bg-[#202c33] p-3 flex items-center gap-2" data-v-255b566b>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-plus",
        class: "text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`<div class="flex-1 bg-[#2a3942] rounded-lg h-10 px-4 flex items-center text-gray-400 text-sm" data-v-255b566b> Type a message... </div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-microphone",
        class: "text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`</div>`);
      if (unref(showOptions) && !unref(isTyping)) {
        _push(`<div class="absolute bottom-20 left-0 w-full px-4 pb-4" data-v-255b566b><div class="flex flex-col gap-2" data-v-255b566b><!--[-->`);
        ssrRenderList(unref(currentOptions), (option) => {
          _push(`<button class="bg-white/90 backdrop-blur text-[#00a884] font-semibold py-2 rounded-lg shadow-lg hover:bg-white transition-colors transform hover:scale-105 active:scale-95" data-v-255b566b>${ssrInterpolate(option.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsapp/WhatsappDemo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WhatsappDemo = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-255b566b"]]), { __name: "WhatsappDemo" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WhatsappBento",
  __ssrInlineRender: true,
  setup(__props) {
    const containerRef = ref(null);
    const { elementX, elementY } = useMouseInElement(containerRef);
    const activeCard = ref(null);
    const spotlightStyle = computed(() => {
      return {
        background: `radial-gradient(600px circle at ${elementX.value}px ${elementY.value}px, rgba(37, 211, 102, 0.1), transparent 40%)`,
        border: "1px solid rgba(37, 211, 102, 0.3)"
      };
    });
    const cardStyle = (index) => {
      if (activeCard.value !== index) return {};
      return {
        transform: "scale(1.02)",
        zIndex: 10
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_NuxtImg = ImageComponent;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
      }, _attrs))}><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none"></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"><div class="text-center mb-16"><h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"> Everything you need to scale </h2><p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"> Powerful features designed to help you reach, engage, and convert more customers on WhatsApp. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"><div class="md:col-span-2 row-span-1 bg-gray-50 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10" style="${ssrRenderStyle(cardStyle(0))}"><div class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="${ssrRenderStyle(spotlightStyle.value)}"></div><div class="relative z-10"><div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-photo",
        class: "w-6 h-6 text-blue-400"
      }, null, _parent));
      _push(`</div><h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2"> Rich Media Support </h3><p class="text-gray-600 dark:text-gray-400 max-w-sm"> Send images, videos, PDFs, and documents directly in the chat. Increase engagement with visual content. </p></div><div class="absolute right-[-20px] bottom-[-20px] w-64 h-48 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 transform rotate-[-5deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-lg">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
        class: "w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",
        loading: "lazy",
        alt: "Rich Media"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div></div></div><div class="md:col-span-1 md:row-span-2 bg-gray-50 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10 flex flex-col items-center text-center" style="${ssrRenderStyle(cardStyle(1))}"><div class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="${ssrRenderStyle(spotlightStyle.value)}"></div><div class="w-24 h-24 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative"><div class="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping opacity-0 group-hover:opacity-100"></div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-badge-solid",
        class: "w-16 h-16 text-[#25D366] relative z-10"
      }, null, _parent));
      _push(`</div><h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> Get Verified <br><span class="text-[#25D366]">Green Tick</span></h3><p class="text-gray-600 dark:text-gray-400 mb-8"> Build trust with the official WhatsApp Business verification badge. We help you get verified faster. </p><div class="mt-auto w-full bg-white dark:bg-[#202c33] p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-left group-hover:border-[#25D366]/30 transition-colors duration-300"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-white p-1">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/logo.svg",
        class: "w-full h-full object-contain",
        alt: "BeOn Logo",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div><div class="text-gray-900 dark:text-white font-medium flex items-center gap-1"> BeOn `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-badge-solid",
        class: "w-4 h-4 text-[#25D366]"
      }, null, _parent));
      _push(`</div><div class="text-xs text-gray-400"> Official Business </div></div></div></div></div><div class="md:col-span-1 row-span-1 bg-gray-50 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10" style="${ssrRenderStyle(cardStyle(2))}"><div class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="${ssrRenderStyle(spotlightStyle.value)}"></div><div class="relative z-10"><div class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-megaphone",
        class: "w-6 h-6 text-purple-400"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2"> Unlimited Broadcasts </h3><p class="text-gray-600 dark:text-gray-400 text-sm"> Reach thousands of opted-in users instantly without the risk of getting blocked. </p></div><div class="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-paper-airplane",
        class: "w-32 h-32 text-purple-500 transform rotate-45"
      }, null, _parent));
      _push(`</div></div><div class="md:col-span-1 row-span-1 bg-gray-50 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10" style="${ssrRenderStyle(cardStyle(3))}"><div class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="${ssrRenderStyle(spotlightStyle.value)}"></div><div class="relative z-10"><div class="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chart-bar",
        class: "w-6 h-6 text-orange-400"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2"> Real-time Analytics </h3><p class="text-gray-600 dark:text-gray-400 text-sm"> Track delivery rates, open rates, and response times in real-time. </p></div><div class="absolute bottom-0 left-0 w-full h-16 flex items-end gap-1 px-8 pb-8 opacity-50 group-hover:opacity-80 transition-opacity duration-300"><div class="w-1/5 bg-orange-500/50 h-[40%] rounded-t-sm transition-all duration-500 group-hover:h-[60%]"></div><div class="w-1/5 bg-orange-500/50 h-[70%] rounded-t-sm transition-all duration-500 group-hover:h-[90%] delay-75"></div><div class="w-1/5 bg-orange-500/50 h-[50%] rounded-t-sm transition-all duration-500 group-hover:h-[70%] delay-150"></div><div class="w-1/5 bg-orange-500/50 h-[90%] rounded-t-sm transition-all duration-500 group-hover:h-[100%] delay-200"></div><div class="w-1/5 bg-orange-500/50 h-[60%] rounded-t-sm transition-all duration-500 group-hover:h-[80%] delay-300"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsapp/WhatsappBento.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const WhatsappBento = Object.assign(_sfc_main$2, { __name: "WhatsappBento" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WhatsappTrust",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const carouselRef = ref();
    const { data: response } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://v3.admin.beon.chat/api/logos", "$yIt1IPNzMq")), __temp = await __temp, __restore(), __temp);
    const brands = computed(() => response.value?.data || []);
    const uiBrands = computed(() => {
      if (locale.value === "ar") {
        return [...brands.value].reverse();
      }
      return brands.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 sm:py-16 bg-white dark:bg-gray-900 overflow-hidden border-y border-gray-100 dark:border-gray-800" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-10"><h2 class="text-lg sm:text-xl font-semibold leading-8 text-gray-600 dark:text-gray-300">${ssrInterpolate(_ctx.$t("index.logos.trusted_by"))} <span class="text-primary-600 dark:text-primary-400 font-bold">${ssrInterpolate(_ctx.$t("index.logos.brand_count"))}</span></h2></div><div class="relative group px-6"><div class="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div><div class="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>`);
      if (unref(uiBrands).length > 0) {
        _push(ssrRenderComponent(_component_UCarousel, {
          ref_key: "carouselRef",
          ref: carouselRef,
          items: unref(uiBrands),
          ui: {
            item: "basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 snap-start"
          },
          class: "overflow-hidden",
          arrows: "",
          loop: "",
          dir: "ltr",
          "auto-scroll": { speed: 1 }
        }, {
          default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center gap-3 group/item relative mx-4"${_scopeId}><div class="relative overflow-hidden rounded-lg shadow-sm transition-transform duration-300 group-hover/item:scale-105 group-hover/item:shadow-md"${_scopeId}><img${ssrRenderAttr("src", item.logo)}${ssrRenderAttr("alt", item.name)} class="h-24 sm:h-24 w-auto object-cover"${_scopeId}></div><span class="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors"${_scopeId}>${ssrInterpolate(item.name)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center gap-3 group/item relative mx-4" }, [
                  createVNode("div", { class: "relative overflow-hidden rounded-lg shadow-sm transition-transform duration-300 group-hover/item:scale-105 group-hover/item:shadow-md" }, [
                    createVNode("img", {
                      src: item.logo,
                      alt: item.name,
                      class: "h-24 sm:h-24 w-auto object-cover"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("span", { class: "text-sm font-medium text-gray-500 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors" }, toDisplayString(item.name), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsapp/WhatsappTrust.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WhatsappTrust = Object.assign(_sfc_main$1, { __name: "WhatsappTrust" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "whatsapp",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WhatsApp Business API - BeOn",
      description: "Automate customer communication with the official WhatsApp Business API.",
      ogTitle: "WhatsApp Business API - BeOn",
      ogDescription: "Automate customer communication with the official WhatsApp Business API.",
      ogImage: "https://beon.chat/og-image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-900 min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(WhatsappHero, null, null, _parent));
      _push(ssrRenderComponent(WhatsappTrust, null, null, _parent));
      _push(ssrRenderComponent(WhatsappBento, null, null, _parent));
      _push(ssrRenderComponent(WhatsappDemo, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solutions/whatsapp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=whatsapp-CEoS0TYY.mjs.map
