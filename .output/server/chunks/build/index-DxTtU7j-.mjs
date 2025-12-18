import { u as useI18n, e as useSeoMeta, _ as _sfc_main$B, a as _sfc_main$v, b as __nuxt_component_2$1, d as useIntersectionObserver } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, withAsyncContext, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useFetch, _ as _sfc_main$7 } from './Carousel-BTHeUzIA.mjs';
import { _ as _sfc_main$8 } from './Tabs-4Ju9eD1M.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    computed(() => [
      {
        title: t("index.hero.features.communication_tools"),
        icon: "i-heroicons-chat-bubble-left-right",
        position: "top"
      },
      {
        title: t("index.hero.features.crm"),
        icon: "i-heroicons-users",
        position: "bottom-left"
      },
      {
        title: t("index.hero.features.team_management"),
        icon: "i-heroicons-user-group",
        position: "bottom-right"
      }
    ]);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      const _component_AppLogo = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-24" }, _attrs))}><div class="${ssrRenderClass([unref(isVisible) ? "opacity-100 scale-100" : "opacity-0 scale-90", "absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl transition-all duration-1000 ease-out"])}"></div><div class="${ssrRenderClass([unref(isVisible) ? "opacity-100 scale-100" : "opacity-0 scale-90", "absolute top-0 -right-48 w-[800px] h-[800px] bg-indigo-50/40 dark:bg-indigo-900/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ease-out"])}"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "mb-6 flex justify-center transition-all duration-700 delay-100 ease-out"
      ])}"><div class="rounded-full p-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 text-sm font-medium text-gray-600 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-meta",
        class: "text-blue-500 w-5 h-5"
      }, null, _parent));
      _push(`<span class="text-xs sm:text-sm">${ssrInterpolate(_ctx.$t("index.hero.meta_provider"))}</span>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        color: "primary",
        variant: "solid",
        size: "xs",
        class: "px-3 py-1.5 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("index.hero.try_now"))} `);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-right",
              class: "w-3 h-3"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("index.hero.try_now")) + " ", 1),
              createVNode(_component_UIcon, {
                name: "i-heroicons-arrow-right",
                class: "w-3 h-3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><h1 class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8 transition-all duration-700 delay-200 ease-out"
      ])}">${ssrInterpolate(_ctx.$t("index.hero.headline_1"))}<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">${ssrInterpolate(_ctx.$t("index.hero.headline_2"))}</span></h1><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ease-out"
      ])}">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0",
        target: "_blank",
        label: _ctx.$t("index.hero.subscribe_now"),
        color: "neutral",
        variant: "solid",
        size: "xl",
        class: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 w-full sm:w-auto transform transition-transform hover:scale-105 active:scale-95"
      }, null, _parent));
      _push(`<span class="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-4">${ssrInterpolate(_ctx.$t("index.hero.description"))}</span>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: _ctx.$t("index.hero.try_free_trial"),
        color: "primary",
        size: "xl",
        class: "shadow-lg shadow-blue-500/20 w-full sm:w-auto transform transition-transform hover:scale-105 active:scale-95"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        "relative h-[350px] sm:h-[450px] w-full max-w-3xl mx-auto mt-8 transition-all duration-1000 delay-500 ease-out"
      ])}"><div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"><div class="w-20 h-20 sm:w-28 sm:h-28 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl shadow-blue-900/5 dark:shadow-black/20 ring-1 ring-gray-100 dark:ring-gray-700"><div class="scale-75">`);
      _push(ssrRenderComponent(_component_AppLogo, null, null, _parent));
      _push(`</div></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="${ssrRenderClass([unref(isVisible) ? "opacity-100 scale-100" : "opacity-0 scale-50", "w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-gray-200/60 dark:border-gray-700/60 transition-all duration-1000 delay-700"])}"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="${ssrRenderClass([unref(isVisible) ? "opacity-100 scale-100" : "opacity-0 scale-50", "w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full border border-gray-200/60 dark:border-gray-700/60 transition-all duration-1000 delay-600"])}"></div></div><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8",
        "absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group transition-all duration-700 delay-700"
      ])}"><div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center border border-blue-100 dark:border-gray-700 backdrop-blur-sm shadow-lg shadow-blue-900/5 dark:shadow-black/20 transition-transform hover:scale-105 duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chat-bubble-left-right",
        class: "w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`</div><span class="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 max-w-[100px] sm:max-w-[120px] bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center">${ssrInterpolate(_ctx.$t("index.hero.features.communication_tools"))}</span></div><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 translate-x-8",
        "absolute bottom-12 left-8 sm:bottom-16 sm:left-24 flex flex-col items-center gap-2 group transition-all duration-700 delay-800"
      ])}"><div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center border border-blue-100 dark:border-gray-700 backdrop-blur-sm shadow-lg shadow-blue-900/5 dark:shadow-black/20 transition-transform hover:scale-105 duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-users",
        class: "w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`</div><span class="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 max-w-[100px] sm:max-w-[120px] bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center">${ssrInterpolate(_ctx.$t("index.hero.features.crm"))}</span></div><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 -translate-x-8",
        "absolute bottom-12 right-8 sm:bottom-16 sm:right-24 flex flex-col items-center gap-2 group transition-all duration-700 delay-900"
      ])}"><div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center border border-blue-100 dark:border-gray-700 backdrop-blur-sm shadow-lg shadow-blue-900/5 dark:shadow-black/20 transition-transform hover:scale-105 duration-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-user-group",
        class: "w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`</div><span class="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 max-w-[100px] sm:max-w-[120px] bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center">${ssrInterpolate(_ctx.$t("index.hero.features.team_management"))}</span></div><div class="absolute top-[28%] left-[28%] w-2.5 h-2.5 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div><div class="absolute top-[28%] right-[28%] w-2.5 h-2.5 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-75"></div><div class="absolute bottom-[25%] left-[50%] w-2.5 h-2.5 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-150"></div></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "HomeHeroSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Logos",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const carouselRef = ref();
    const { data: response } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://v3.admin.beon.chat/api/logos", "$2ggGcBb8_r")), __temp = await __temp, __restore(), __temp);
    const brands = computed(() => response.value?.data || []);
    const uiBrands = computed(() => {
      if (locale.value === "ar") {
        return [...brands.value].reverse();
      }
      return brands.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$7;
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Logos.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "HomeLogos" });
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
    const servicesWithKeys = computed(() => {
      const keys = ["whatsapp", "sms", "otp", "live_chat", "crm"];
      return services.map((service, index) => ({
        ...service,
        key: keys[index],
        slot: "item"
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = _sfc_main$8;
      const _component_UIcon = _sfc_main$B;
      const _component_UButton = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24 bg-gray-50 dark:bg-gray-900" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="text-center mb-12"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">${ssrInterpolate(_ctx.$t("index.services.title"))}</h2></div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        items: unref(servicesWithKeys),
        class: "w-full"
      }, {
        default: withCtx(({ item, index, selected }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 relative truncate"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t(`index.services.items.${item.key}.label`))}</span>`);
            if (selected) {
              _push2(`<span class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 hidden sm:block"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 relative truncate" }, [
                createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t(`index.services.items.${item.key}.label`)), 1),
                selected ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "absolute -right-4 w-2 h-2 rounded-full bg-primary-500 hidden sm:block"
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"${_scopeId}><div class="flex flex-col gap-8"${_scopeId}><h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t(`index.services.items.${item.key}.title`))}</h3><ul class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(3, (feature, index) => {
              _push2(`<li class="flex gap-3 items-start"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-check-circle-20-solid",
                class: "w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t(
                `index.services.items.${item.key}.features.${index + 1}`
              ))}</span></li>`);
            });
            _push2(`<!--]--></ul><div class="mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xl",
              color: "primary",
              variant: "solid",
              label: _ctx.$t("index.services.learn_more"),
              to: item.link
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="relative h-full rounded-xl overflow-hidden group rounded-lg"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", _ctx.$t(`index.services.items.${item.key}.label`))} class="absolute inset-0 w-full h-full rounded-lg object-cover aspect-square transition-transform duration-500 group-hover:scale-105"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700" }, [
                createVNode("div", { class: "flex flex-col gap-8" }, [
                  createVNode("h3", { class: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight" }, toDisplayString(_ctx.$t(`index.services.items.${item.key}.title`)), 1),
                  createVNode("ul", { class: "space-y-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (feature, index) => {
                      return createVNode("li", {
                        key: index,
                        class: "flex gap-3 items-start"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-check-circle-20-solid",
                          class: "w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                        }),
                        createVNode("span", { class: "text-gray-600 dark:text-gray-300 text-lg leading-relaxed" }, toDisplayString(_ctx.$t(
                          `index.services.items.${item.key}.features.${index + 1}`
                        )), 1)
                      ]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode(_component_UButton, {
                      size: "xl",
                      color: "primary",
                      variant: "solid",
                      label: _ctx.$t("index.services.learn_more"),
                      to: item.link
                    }, null, 8, ["label", "to"])
                  ])
                ]),
                createVNode("div", { class: "relative h-full rounded-xl overflow-hidden group rounded-lg" }, [
                  createVNode("img", {
                    src: item.image,
                    alt: _ctx.$t(`index.services.items.${item.key}.label`),
                    class: "absolute inset-0 w-full h-full rounded-lg object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                  }, null, 8, ["src", "alt"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24 bg-gray-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300" }, _attrs))}><div class="absolute inset-0 bg-[url(&#39;https://placehold.co/1920x1080/1e293b/1e293b.png&#39;)] opacity-5 dark:opacity-10 bg-cover bg-center mix-blend-overlay"></div><div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 dark:via-slate-900/50 dark:to-slate-900 pointer-events-none"></div><div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"><div class="mb-12"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-left">${ssrInterpolate(_ctx.$t("index.client_journey.title"))}</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(unref(clientJourneyWithKeys), (item) => {
        _push(`<div class="relative group"><div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100"></div><div class="relative h-full bg-white dark:bg-slate-800/40 backdrop-blur-sm border border-gray-200 dark:border-slate-700/50 rounded-2xl p-8 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-colors duration-300 shadow-sm dark:shadow-none"><div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-primary-900/20">${ssrInterpolate(item.step)}</div><h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">${ssrInterpolate(_ctx.$t(`index.client_journey.steps.${item.key}.title`))}</h3><ul class="space-y-2"><!--[-->`);
        ssrRenderList(3, (line, index) => {
          _push(`<li class="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">${ssrInterpolate(_ctx.$t(
            `index.client_journey.steps.${item.key}.description.${index + 1}`
          ))}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24 bg-white dark:bg-gray-900 transition-colors duration-300" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"><div class="flex flex-col gap-6"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">${ssrInterpolate(_ctx.$t("index.smart_messages.title"))} <span class="text-primary-600 dark:text-primary-400">${ssrInterpolate(_ctx.$t("index.smart_messages.subtitle"))}</span></h2><h3 class="text-xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("index.smart_messages.new_team_member"))}</h3><p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">${ssrInterpolate(_ctx.$t("index.smart_messages.description"))}</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6"><!--[-->`);
      ssrRenderList(unref(smartMessagesWithKeys), (card, index) => {
        _push(`<div class="${ssrRenderClass([{ "sm:mt-8": index === 1, "sm:mt-16": index === 2 }, "relative group"])}"><div class="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100"></div><div class="relative h-full bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary-500/50 transition-all duration-300 shadow-sm hover:shadow-md"><div class="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 shadow-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: "w-7 h-7"
        }, null, _parent));
        _push(`</div><h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">${ssrInterpolate(_ctx.$t(`index.smart_messages.cards.${card.key}.title`))}</h4><p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">${ssrInterpolate(_ctx.$t(`index.smart_messages.cards.${card.key}.description`))}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SmartMessages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$2, { __name: "HomeSmartMessages" });
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
        class: "py-16 sm:py-24 bg-sky-50 dark:bg-slate-900 transition-colors duration-300"
      }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="${ssrRenderClass([
        unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out"
      ])}"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">${ssrInterpolate(_ctx.$t("index.why_beon.title"))} <span class="text-primary-600 dark:text-primary-400">${ssrInterpolate(_ctx.$t("index.why_beon.brand_name"))}</span></h2><p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">${ssrInterpolate(_ctx.$t("index.why_beon.description"))}</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(whyBeOnWithKeys), (card, index) => {
        _push(`<div class="${ssrRenderClass([[
          unref(isVisible) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          `delay-${(index + 1) * 200}`
        ], "bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 dark:border-slate-700 group"])}" style="${ssrRenderStyle({ transitionDelay: `${(index + 1) * 150}ms` })}"><div class="w-12 h-12 rounded-xl bg-sky-50 dark:bg-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: "w-7 h-7"
        }, null, _parent));
        _push(`</div><h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">${ssrInterpolate(_ctx.$t(`index.why_beon.cards.${card.key}.title`))}</h3><p class="text-gray-600 dark:text-gray-300 leading-relaxed">${ssrInterpolate(_ctx.$t(`index.why_beon.cards.${card.key}.description`))}</p></div>`);
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
//# sourceMappingURL=index-DxTtU7j-.mjs.map
