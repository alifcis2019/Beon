import { defineComponent, mergeProps, ref, computed, unref, withCtx, createTextVNode, createVNode, withAsyncContext, toDisplayString, watch, nextTick, createBlock, createCommentVNode, openBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { f as useSeoMeta, a as _export_sfc, u as useMouseInElement, _ as _sfc_main$B, b as _sfc_main$v, I as ImageComponent, d as useI18n, q as useLocale, r as useAppConfig, s as reactivePick, t as tv } from './server.mjs';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive } from 'reka-ui';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import 'minimark/hast';
import '@vue/shared';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WhatsappHero",
  __ssrInlineRender: true,
  setup(__props) {
    const target = ref(null);
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);
    const cardTransform = computed(() => {
      if (isOutside.value) return "";
      const MAX_ROTATION = 20;
      const rX = (MAX_ROTATION / 2 - elementY.value / elementHeight.value * MAX_ROTATION).toFixed(2);
      const rY = (elementX.value / elementWidth.value * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);
      return `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      const _component_NuxtImg = ImageComponent;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-[#0a1014] min-h-[95vh] flex items-center transition-colors duration-300"
      }, _attrs))} data-v-dfbb47a4><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-dfbb47a4><div class="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-green-200/40 dark:bg-[#25D366]/10 rounded-full blur-[120px] animate-pulse" data-v-dfbb47a4></div><div class="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-200/40 dark:bg-emerald-600/10 rounded-full blur-[120px] animate-pulse delay-1000" data-v-dfbb47a4></div><div class="absolute inset-0 bg-[url(&#39;https://www.transparenttextures.com/patterns/hexellence.png&#39;)] opacity-[0.03] dark:opacity-[0.03] invert dark:invert-0" data-v-dfbb47a4></div><div class="absolute inset-0" data-v-dfbb47a4><!--[-->`);
      ssrRenderList(20, (n) => {
        _push(`<div class="absolute w-1 h-1 bg-green-500 dark:bg-[#25D366] rounded-full animate-float-random opacity-20" style="${ssrRenderStyle({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        })}" data-v-dfbb47a4></div>`);
      });
      _push(`<!--]--></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full" data-v-dfbb47a4><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-dfbb47a4><div class="max-w-2xl" data-v-dfbb47a4><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-[#25D366]/10 border border-green-100 dark:border-[#25D366]/20 text-green-600 dark:text-[#25D366] text-sm font-medium mb-8 transition-all duration-700 backdrop-blur-md"
      ])}" data-v-dfbb47a4>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-whatsapp",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Official Business Solution Provider </div><h1 class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight transition-all duration-700 delay-100"
      ])}" data-v-dfbb47a4> Automate.<br data-v-dfbb47a4> Engage.<br data-v-dfbb47a4><span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-[#25D366] dark:to-emerald-400" data-v-dfbb47a4>Scale on WhatsApp.</span></h1><p class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200"
      ])}" data-v-dfbb47a4> Transform your customer communication with the world&#39;s most popular messaging app. Build chatbots, send broadcasts, and drive sales—all on autopilot. </p><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "flex flex-wrap gap-4 transition-all duration-700 delay-300"
      ])}" data-v-dfbb47a4>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "primary",
        variant: "solid",
        class: "px-8 py-4 rounded-full shadow-lg shadow-green-500/20 dark:shadow-[#25D366]/20 hover:scale-105 transition-transform font-bold bg-green-600 dark:bg-[#25D366] hover:bg-green-500 dark:hover:bg-[#1ebc57] text-white border-none"
      }, {
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-rocket-launch",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-heroicons-rocket-launch",
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
        size: "xl",
        color: "neutral",
        variant: "ghost",
        class: "px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book Demo `);
          } else {
            return [
              createTextVNode(" Book Demo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative perspective-1000" style="${ssrRenderStyle({ transform: unref(cardTransform) })}" data-v-dfbb47a4><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0 rotate-y-[-12deg]" : "opacity-0 translate-y-20",
        "relative mx-auto w-[340px] h-[680px] bg-gray-100 dark:bg-[#111b21] rounded-[3.5rem] border-[10px] border-white dark:border-[#2a3942] shadow-2xl transition-all duration-1000 delay-500 transform-style-3d"
      ])}" data-v-dfbb47a4><div class="absolute inset-0 bg-[#e5ddd5] dark:bg-[#0b141a] rounded-[3rem] overflow-hidden flex flex-col" data-v-dfbb47a4><div class="h-14 flex justify-between items-center px-6 text-gray-800 dark:text-gray-400 bg-[#f0f2f5] dark:bg-[#202c33]" data-v-dfbb47a4><span class="text-sm font-medium" data-v-dfbb47a4>9:41</span><div class="flex gap-2" data-v-dfbb47a4>`);
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
      _push(`</div></div><div class="px-4 py-3 bg-[#f0f2f5] dark:bg-[#202c33] flex items-center gap-3 shadow-md z-10" data-v-dfbb47a4>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chevron-left",
        class: "text-gray-600 dark:text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center" data-v-dfbb47a4>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/logoDark.svg",
        alt: "Logo",
        class: "w-full h-full object-contain"
      }, null, _parent));
      _push(`</div><div class="flex-1" data-v-dfbb47a4><div class="text-gray-900 dark:text-white font-medium flex items-center gap-1" data-v-dfbb47a4> BeOn `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-badge-solid",
        class: "text-green-500 dark:text-[#25D366] w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="text-xs text-gray-500 dark:text-gray-400" data-v-dfbb47a4> Official Business Account </div></div></div><div class="flex-1 p-4 overflow-hidden relative bg-[url(&#39;https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png&#39;)] bg-opacity-50 dark:bg-opacity-5" data-v-dfbb47a4><div class="space-y-4 mt-4" data-v-dfbb47a4><div class="flex flex-col gap-1 animate-slide-in-left" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-dfbb47a4><div class="self-start bg-white dark:bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm" data-v-dfbb47a4><p class="text-gray-900 dark:text-gray-100 text-sm" data-v-dfbb47a4> Hello! 👋 Welcome to BeOn. How can we help you scale your business today? </p><div class="text-[10px] text-gray-500 dark:text-gray-400 text-right mt-1" data-v-dfbb47a4> 10:00 AM </div></div></div><div class="flex flex-col gap-1 items-end animate-slide-in-right" style="${ssrRenderStyle({ "animation-delay": "2.5s" })}" data-v-dfbb47a4><div class="bg-[#d9fdd3] dark:bg-[#005c4b] p-3 rounded-lg rounded-tr-none max-w-[85%] shadow-sm" data-v-dfbb47a4><p class="text-gray-900 dark:text-white text-sm" data-v-dfbb47a4> I want to automate my customer support. 🤖 </p><div class="text-[10px] text-gray-500 dark:text-white/70 text-right mt-1 flex items-center justify-end gap-1" data-v-dfbb47a4> 10:01 AM `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-check-badge",
        class: "w-3 h-3 text-[#53bdeb]"
      }, null, _parent));
      _push(`</div></div></div><div class="flex flex-col gap-1 animate-slide-in-left" style="${ssrRenderStyle({ "animation-delay": "4s" })}" data-v-dfbb47a4><div class="self-start bg-white dark:bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm" data-v-dfbb47a4><p class="text-gray-900 dark:text-gray-100 text-sm mb-3" data-v-dfbb47a4> Great choice! Our AI chatbots can handle 80% of queries instantly. Would you like a demo? </p><div class="space-y-2" data-v-dfbb47a4><button class="w-full py-2 px-4 bg-gray-50 dark:bg-[#2a3942] hover:bg-gray-100 dark:hover:bg-[#354550] text-blue-500 dark:text-[#00a884] text-sm font-medium rounded transition-colors" data-v-dfbb47a4> Yes, show me! 🚀 </button><button class="w-full py-2 px-4 bg-gray-50 dark:bg-[#2a3942] hover:bg-gray-100 dark:hover:bg-[#354550] text-blue-500 dark:text-[#00a884] text-sm font-medium rounded transition-colors" data-v-dfbb47a4> View Pricing </button></div><div class="text-[10px] text-gray-500 dark:text-gray-400 text-right mt-1" data-v-dfbb47a4> 10:01 AM </div></div></div></div></div><div class="p-3 bg-[#f0f2f5] dark:bg-[#202c33] flex items-center gap-2" data-v-dfbb47a4>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-plus",
        class: "text-gray-500 dark:text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`<div class="flex-1 bg-white dark:bg-[#2a3942] rounded-lg h-10 px-4 flex items-center text-gray-400 text-sm" data-v-dfbb47a4> Type a message... </div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-microphone",
        class: "text-gray-500 dark:text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`</div></div><div class="absolute -right-16 top-1/4 bg-white/90 dark:bg-[#202c33]/90 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-[#2a3942] shadow-xl transform translate-z-40 animate-float" data-v-dfbb47a4><div class="flex items-center gap-3" data-v-dfbb47a4><div class="w-12 h-12 rounded-full bg-green-100 dark:bg-[#25D366]/20 flex items-center justify-center text-green-600 dark:text-[#25D366]" data-v-dfbb47a4>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chat-bubble-left-right",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div data-v-dfbb47a4><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-dfbb47a4> 24/7 </div><div class="text-xs text-gray-500 dark:text-gray-400" data-v-dfbb47a4> Automated Support </div></div></div></div><div class="absolute -left-12 bottom-1/3 bg-white/90 dark:bg-[#202c33]/90 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-[#2a3942] shadow-xl transform translate-z-60 animate-float-delayed" data-v-dfbb47a4><div class="flex items-center gap-3" data-v-dfbb47a4><div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400" data-v-dfbb47a4>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-bolt",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div data-v-dfbb47a4><div class="text-sm font-bold text-gray-900 dark:text-white" data-v-dfbb47a4> Instant </div><div class="text-xs text-gray-500 dark:text-gray-400" data-v-dfbb47a4> Response Time </div></div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsapp/WhatsappHero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WhatsappHero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-dfbb47a4"]]), { __name: "WhatsappHero" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300" }, _attrs))} data-v-8922628b><div class="max-w-7xl mx-auto px-6 lg:px-8" data-v-8922628b><div class="text-center mb-16" data-v-8922628b><h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" data-v-8922628b> Experience Automated Conversations </h2><p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" data-v-8922628b> Try our interactive demo below. See how BeOn&#39;s chatbots handle customer queries instantly, 24/7. </p></div><div class="grid lg:grid-cols-2 gap-16 items-center" data-v-8922628b><div class="space-y-6" data-v-8922628b><!--[-->`);
      ssrRenderList(scenarios, (scenario, index) => {
        _push(`<div class="${ssrRenderClass([[
          activeScenario.value === index ? "bg-white dark:bg-gray-800 border-[#25D366] shadow-lg shadow-[#25D366]/10 ring-1 ring-[#25D366]" : "bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
        ], "p-6 rounded-2xl border transition-all duration-300 cursor-pointer group"])}" data-v-8922628b><div class="flex items-start gap-4" data-v-8922628b><div class="${ssrRenderClass([
          activeScenario.value === index ? "bg-[#25D366] text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700",
          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
        ])}" data-v-8922628b>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: scenario.icon,
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><div data-v-8922628b><h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-1" data-v-8922628b>${ssrInterpolate(scenario.title)}</h3><p class="text-gray-600 dark:text-gray-400 text-sm" data-v-8922628b>${ssrInterpolate(scenario.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="relative flex justify-center perspective-1000" data-v-8922628b><div class="w-[360px] h-[720px] bg-gray-100 dark:bg-[#111b21] rounded-[3.5rem] border-[12px] border-white dark:border-[#2a3942] shadow-2xl overflow-hidden relative transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500" data-v-8922628b><div class="bg-[#f0f2f5] dark:bg-[#202c33] px-4 py-4 flex items-center gap-3 shadow-md z-10 absolute top-0 w-full" data-v-8922628b>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chevron-left",
        class: "text-blue-500 dark:text-[#00a884] w-6 h-6"
      }, null, _parent));
      _push(`<div class="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1" data-v-8922628b>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/logoDark.svg",
        alt: "Logo",
        class: "w-full h-full object-contain"
      }, null, _parent));
      _push(`</div><div class="flex-1" data-v-8922628b><div class="text-gray-900 dark:text-white font-medium" data-v-8922628b> BeOn Support </div><div class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1" data-v-8922628b>`);
      if (isTyping.value) {
        _push(`<span class="text-green-600 dark:text-[#25D366]" data-v-8922628b>typing...</span>`);
      } else {
        _push(`<span data-v-8922628b>Online</span>`);
      }
      _push(`</div></div></div><div class="h-full pt-24 pb-24 px-4 overflow-y-auto bg-[#e5ddd5] dark:bg-[#0b141a] scrollbar-hide" style="${ssrRenderStyle({ "background-image": 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', "background-opacity": "0.05" })}" data-v-8922628b><div class="space-y-4" data-v-8922628b><!--[-->`);
      ssrRenderList(currentMessages.value, (msg, i) => {
        _push(`<div class="${ssrRenderClass([msg.isUser ? "items-end" : "items-start", "flex flex-col"])}" data-v-8922628b><div class="${ssrRenderClass([[
          msg.isUser ? "bg-[#d9fdd3] dark:bg-[#005c4b] text-gray-900 dark:text-white rounded-tr-none" : "bg-white dark:bg-[#202c33] text-gray-900 dark:text-gray-100 rounded-tl-none"
        ], "max-w-[85%] p-3 rounded-xl shadow-sm text-sm relative"])}" data-v-8922628b><p class="whitespace-pre-line leading-relaxed" data-v-8922628b>${ssrInterpolate(msg.text)}</p><div class="text-[10px] text-right mt-1 opacity-70 flex items-center justify-end gap-1" data-v-8922628b>${ssrInterpolate(msg.time)} `);
        if (msg.isUser) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-check-badge",
            class: "w-3 h-3 text-blue-500 dark:text-[#53bdeb]"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]-->`);
      if (isTyping.value) {
        _push(`<div class="flex items-start" data-v-8922628b><div class="bg-white dark:bg-[#202c33] p-4 rounded-xl rounded-tl-none shadow-sm" data-v-8922628b><div class="flex gap-1.5" data-v-8922628b><div class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" data-v-8922628b></div><div class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100" data-v-8922628b></div><div class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200" data-v-8922628b></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="absolute bottom-0 w-full bg-[#f0f2f5] dark:bg-[#202c33] p-3 flex items-center gap-2 z-10" data-v-8922628b>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-plus",
        class: "text-gray-500 dark:text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`<div class="flex-1 bg-white dark:bg-[#2a3942] rounded-lg h-10 px-4 flex items-center text-gray-400 text-sm" data-v-8922628b> Type a message... </div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-microphone",
        class: "text-gray-500 dark:text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`</div>`);
      if (showOptions.value && !isTyping.value) {
        _push(`<div class="absolute bottom-20 left-0 w-full px-4 pb-4 z-20" data-v-8922628b><div class="flex flex-col gap-2" data-v-8922628b><!--[-->`);
        ssrRenderList(currentOptions.value, (option) => {
          _push(`<button class="bg-white/90 dark:bg-[#202c33]/90 backdrop-blur-md text-blue-600 dark:text-[#00a884] font-semibold py-3 rounded-xl shadow-lg border border-gray-200 dark:border-[#2a3942] hover:bg-gray-50 dark:hover:bg-[#2a3942] transition-all transform hover:scale-[1.02] active:scale-95" data-v-8922628b>${ssrInterpolate(option.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsapp/WhatsappDemo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WhatsappDemo = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-8922628b"]]), { __name: "WhatsappDemo" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WhatsappBento",
  __ssrInlineRender: true,
  setup(__props) {
    const containerRef = ref(null);
    const { elementX, elementY } = useMouseInElement(containerRef);
    ref(null);
    const spotlightStyle = computed(() => {
      return {
        background: `radial-gradient(600px circle at ${elementX.value}px ${elementY.value}px, rgba(37, 211, 102, 0.05), transparent 40%)`
      };
    });
    const cards = [
      {
        title: "Rich Media Support",
        description: "Send images, videos, PDFs, and documents directly in the chat. Increase engagement with visual content.",
        icon: "i-heroicons-photo",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        colSpan: "md:col-span-2",
        rowSpan: "row-span-1",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Green Tick Verification",
        description: "Build trust with the official WhatsApp Business verification badge. We help you get verified faster.",
        icon: "i-heroicons-check-badge",
        color: "text-[#25D366]",
        bg: "bg-[#25D366]/10",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2",
        isVertical: true
      },
      {
        title: "Unlimited Broadcasts",
        description: "Reach thousands of opted-in users instantly without the risk of getting blocked.",
        icon: "i-heroicons-megaphone",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        colSpan: "md:col-span-1",
        rowSpan: "row-span-1"
      },
      {
        title: "Real-time Analytics",
        description: "Track delivery rates, open rates, and response times in real-time.",
        icon: "i-heroicons-chart-bar",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        colSpan: "md:col-span-1",
        rowSpan: "row-span-1"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_NuxtImg = ImageComponent;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
      }, _attrs))} data-v-7c9c718b><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none" data-v-7c9c718b></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" data-v-7c9c718b><div class="text-center mb-16" data-v-7c9c718b><h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" data-v-7c9c718b> Everything you need to <span class="text-[#25D366]" data-v-7c9c718b>scale</span></h2><p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" data-v-7c9c718b> Powerful features designed to help you reach, engage, and convert more customers on WhatsApp. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]" data-v-7c9c718b><!--[-->`);
      ssrRenderList(cards, (card, index) => {
        _push(`<div class="${ssrRenderClass([
          card.colSpan,
          card.rowSpan,
          "relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/10 group"
        ])}" data-v-7c9c718b><div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="${ssrRenderStyle(unref(spotlightStyle))}" data-v-7c9c718b></div><div class="relative z-10 p-8 h-full flex flex-col" data-v-7c9c718b><div class="${ssrRenderClass([card.bg, "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"])}" data-v-7c9c718b>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: ["w-6 h-6", card.color]
        }, null, _parent));
        _push(`</div><h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#25D366] transition-colors" data-v-7c9c718b>${ssrInterpolate(card.title)}</h3><p class="text-gray-600 dark:text-gray-400 leading-relaxed" data-v-7c9c718b>${ssrInterpolate(card.description)}</p>`);
        if (card.image) {
          _push(`<div class="absolute right-0 bottom-0 w-1/2 h-full mask-image-gradient" data-v-7c9c718b>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: card.image,
            class: "w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (card.isVertical) {
          _push(`<div class="mt-auto flex justify-center pt-8" data-v-7c9c718b><div class="relative" data-v-7c9c718b><div class="absolute inset-0 bg-[#25D366] blur-xl opacity-20 animate-pulse" data-v-7c9c718b></div>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-check-badge-solid",
            class: "w-24 h-24 text-[#25D366] relative z-10 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (card.title === "Unlimited Broadcasts") {
          _push(`<div class="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500" data-v-7c9c718b>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-paper-airplane",
            class: "w-40 h-40 text-purple-500 transform rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (card.title === "Real-time Analytics") {
          _push(`<div class="absolute bottom-0 left-0 w-full h-24 flex items-end gap-1 px-8 pb-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500" data-v-7c9c718b><div class="w-1/5 bg-orange-500 h-[40%] rounded-t-sm transition-all duration-500 group-hover:h-[60%]" data-v-7c9c718b></div><div class="w-1/5 bg-orange-500 h-[70%] rounded-t-sm transition-all duration-500 group-hover:h-[90%] delay-75" data-v-7c9c718b></div><div class="w-1/5 bg-orange-500 h-[50%] rounded-t-sm transition-all duration-500 group-hover:h-[70%] delay-150" data-v-7c9c718b></div><div class="w-1/5 bg-orange-500 h-[90%] rounded-t-sm transition-all duration-500 group-hover:h-[100%] delay-200" data-v-7c9c718b></div><div class="w-1/5 bg-orange-500 h-[60%] rounded-t-sm transition-all duration-500 group-hover:h-[80%] delay-300" data-v-7c9c718b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsapp/WhatsappBento.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WhatsappBento = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-7c9c718b"]]), { __name: "WhatsappBento" });
const theme = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$2 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: null, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: null, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const stopAutoplayOnInteraction = computed(() => {
      if (typeof props.autoplay === "boolean") {
        return true;
      }
      return props.autoplay.stopOnInteraction ?? true;
    });
    const stopAutoScrollOnInteraction = computed(() => {
      if (typeof props.autoScroll === "boolean") {
        return true;
      }
      return props.autoScroll.stopOnInteraction ?? true;
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], async () => {
      await loadPlugins();
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function stopOnInteraction() {
      if (stopAutoplayOnInteraction.value) {
        emblaApi.value?.plugins().autoplay?.stop();
      }
      if (stopAutoScrollOnInteraction.value) {
        emblaApi.value?.plugins().autoScroll?.stop();
      }
    }
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
      stopOnInteraction();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
      stopOnInteraction();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": __props.orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: props.ui?.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: props.ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$v, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: props.ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$v, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: props.ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: props.ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                "data-slot": "viewport",
                class: ui.value.viewport({ class: props.ui?.viewport })
              }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              __props.arrows || __props.dots ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "controls",
                class: ui.value.controls({ class: props.ui?.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: props.ui?.arrows })
                }, [
                  createVNode(_sfc_main$v, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: props.ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$v, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: props.ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: props.ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
      const _component_UCarousel = _sfc_main$2;
      const _component_NuxtImg = ImageComponent;
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
              _push2(`<div class="flex flex-col items-center gap-3 group/item relative mx-4"${_scopeId}><div class="relative overflow-hidden rounded-lg shadow-sm transition-transform duration-300 group-hover/item:scale-105 group-hover/item:shadow-md"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: item.logo,
                alt: item.name,
                class: "h-24 sm:h-24 w-auto object-cover"
              }, null, _parent2, _scopeId));
              _push2(`</div><span class="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors"${_scopeId}>${ssrInterpolate(item.name)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center gap-3 group/item relative mx-4" }, [
                  createVNode("div", { class: "relative overflow-hidden rounded-lg shadow-sm transition-transform duration-300 group-hover/item:scale-105 group-hover/item:shadow-md" }, [
                    createVNode(_component_NuxtImg, {
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
//# sourceMappingURL=whatsapp-Cnt1VALx.mjs.map
