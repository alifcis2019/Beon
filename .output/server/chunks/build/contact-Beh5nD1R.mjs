import { h as _export_sfc, u as useI18n, e as useSeoMeta, f as _sfc_main$o, _ as _sfc_main$B, g as _sfc_main$3, a as _sfc_main$v } from './server.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("contact.meta.title"),
      description: () => t("contact.meta.description"),
      ogTitle: () => t("contact.meta.title"),
      ogDescription: () => t("contact.meta.description"),
      ogImage: "https://beon.chat/og-image.png",
      twitterCard: "summary_large_image"
    });
    const form = ref({
      name: "",
      email: "",
      phone: ""
    });
    const onSubmit = () => {
      console.log("Form submitted:", form.value);
    };
    const features = computed(() => [
      {
        icon: "i-heroicons-chat-bubble-left-right",
        text: t("contact.features.sms")
      },
      {
        icon: "i-heroicons-paper-airplane",
        text: t("contact.features.campaigns")
      },
      {
        icon: "i-heroicons-users",
        text: t("contact.features.channels")
      },
      {
        icon: "i-heroicons-chart-bar",
        text: t("contact.features.analytics")
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$o;
      const _component_UIcon = _sfc_main$B;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = _sfc_main$3;
      const _component_UButton = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 dark:bg-[#0B1120] min-h-screen py-12 lg:py-24 flex items-center justify-center transition-colors duration-300" }, _attrs))} data-v-fdd0805f>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center" data-v-fdd0805f${_scopeId}><div class="space-y-8" data-v-fdd0805f${_scopeId}><div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold animate-fade-in-up" data-v-fdd0805f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-simple-icons-meta",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-fdd0805f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.meta_partner"))}</span></div><div class="animate-fade-in-up delay-100" data-v-fdd0805f${_scopeId}><h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6" data-v-fdd0805f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.headline"))} <br data-v-fdd0805f${_scopeId}><span class="text-blue-600 dark:text-blue-500" data-v-fdd0805f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.subheadline"))}</span></h1><p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed" data-v-fdd0805f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.description"))}</p></div><div class="space-y-5 animate-fade-in-up delay-200" data-v-fdd0805f${_scopeId}><!--[-->`);
            ssrRenderList(unref(features), (feature, index) => {
              _push2(`<div class="flex items-center gap-3 text-gray-700 dark:text-gray-300" data-v-fdd0805f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: feature.icon,
                class: "w-5 h-5 text-blue-500 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-medium" data-v-fdd0805f${_scopeId}>${ssrInterpolate(feature.text)}</span></div>`);
            });
            _push2(`<!--]--></div></div><div class="bg-white dark:bg-[#111827] rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 animate-fade-in-up delay-300 hover:shadow-2xl transition-shadow duration-300" data-v-fdd0805f${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-v-fdd0805f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.form.title"))}</h2><form class="space-y-5" data-v-fdd0805f${_scopeId}><div class="grid grid-cols-1 gap-5" data-v-fdd0805f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: _ctx.$t("contact.form.name"),
              name: "name",
              class: "w-full",
              ui: {
                label: {
                  base: "text-gray-700 dark:text-gray-300 font-medium mb-1.5"
                }
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-fdd0805f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-user",
                    class: "w-4 h-4 text-blue-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-fdd0805f${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.form.name"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-user",
                        class: "w-4 h-4 text-blue-500"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("contact.form.name")), 1)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    placeholder: _ctx.$t("contact.form.name_placeholder"),
                    size: "lg",
                    class: "dark:bg-gray-900/50 w-full",
                    ui: {
                      base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      placeholder: _ctx.$t("contact.form.name_placeholder"),
                      size: "lg",
                      class: "dark:bg-gray-900/50 w-full",
                      ui: {
                        base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: _ctx.$t("contact.form.phone"),
              name: "phone",
              ui: {
                label: {
                  base: "text-gray-700 dark:text-gray-300 font-medium mb-1.5"
                }
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-fdd0805f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-phone",
                    class: "w-4 h-4 text-blue-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-fdd0805f${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.form.phone"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-phone",
                        class: "w-4 h-4 text-blue-500"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("contact.form.phone")), 1)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                    type: "tel",
                    placeholder: _ctx.$t("contact.form.phone_placeholder"),
                    size: "lg",
                    class: "dark:bg-gray-900/50 w-full",
                    ui: {
                      base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).phone,
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                      type: "tel",
                      placeholder: _ctx.$t("contact.form.phone_placeholder"),
                      size: "lg",
                      class: "dark:bg-gray-900/50 w-full",
                      ui: {
                        base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: _ctx.$t("contact.form.email"),
              name: "email",
              ui: {
                label: {
                  base: "text-gray-700 dark:text-gray-300 font-medium mb-1.5"
                }
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-fdd0805f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-envelope",
                    class: "w-4 h-4 text-blue-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-fdd0805f${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.form.email"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-envelope",
                        class: "w-4 h-4 text-blue-500"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("contact.form.email")), 1)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    placeholder: _ctx.$t("contact.form.email_placeholder"),
                    size: "lg",
                    class: "dark:bg-gray-900/50 w-full",
                    ui: {
                      base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      placeholder: _ctx.$t("contact.form.email_placeholder"),
                      size: "lg",
                      class: "dark:bg-gray-900/50 w-full",
                      ui: {
                        base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              block: "",
              size: "xl",
              color: "primary",
              class: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 mt-2 transition-transform duration-200 hover:scale-[1.02]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("contact.form.submit"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("contact.form.submit")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid lg:grid-cols-2 gap-12 lg:gap-24 items-center" }, [
                createVNode("div", { class: "space-y-8" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold animate-fade-in-up" }, [
                    createVNode(_component_UIcon, {
                      name: "i-simple-icons-meta",
                      class: "w-6 h-6"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("contact.meta_partner")), 1)
                  ]),
                  createVNode("div", { class: "animate-fade-in-up delay-100" }, [
                    createVNode("h1", { class: "text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6" }, [
                      createTextVNode(toDisplayString(_ctx.$t("contact.headline")) + " ", 1),
                      createVNode("br"),
                      createVNode("span", { class: "text-blue-600 dark:text-blue-500" }, toDisplayString(_ctx.$t("contact.subheadline")), 1)
                    ]),
                    createVNode("p", { class: "text-gray-600 dark:text-gray-400 text-lg leading-relaxed" }, toDisplayString(_ctx.$t("contact.description")), 1)
                  ]),
                  createVNode("div", { class: "space-y-5 animate-fade-in-up delay-200" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(features), (feature, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      }, [
                        createVNode(_component_UIcon, {
                          name: feature.icon,
                          class: "w-5 h-5 text-blue-500 flex-shrink-0"
                        }, null, 8, ["name"]),
                        createVNode("span", { class: "font-medium" }, toDisplayString(feature.text), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-[#111827] rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 animate-fade-in-up delay-300 hover:shadow-2xl transition-shadow duration-300" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-8" }, toDisplayString(_ctx.$t("contact.form.title")), 1),
                  createVNode("form", {
                    class: "space-y-5",
                    onSubmit: withModifiers(onSubmit, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-5" }, [
                      createVNode(_component_UFormGroup, {
                        label: _ctx.$t("contact.form.name"),
                        name: "name",
                        class: "w-full",
                        ui: {
                          label: {
                            base: "text-gray-700 dark:text-gray-300 font-medium mb-1.5"
                          }
                        }
                      }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-user",
                              class: "w-4 h-4 text-blue-500"
                            }),
                            createVNode("span", null, toDisplayString(_ctx.$t("contact.form.name")), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: _ctx.$t("contact.form.name_placeholder"),
                            size: "lg",
                            class: "dark:bg-gray-900/50 w-full",
                            ui: {
                              base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                            }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_component_UFormGroup, {
                        label: _ctx.$t("contact.form.phone"),
                        name: "phone",
                        ui: {
                          label: {
                            base: "text-gray-700 dark:text-gray-300 font-medium mb-1.5"
                          }
                        }
                      }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-phone",
                              class: "w-4 h-4 text-blue-500"
                            }),
                            createVNode("span", null, toDisplayString(_ctx.$t("contact.form.phone")), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).phone,
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            type: "tel",
                            placeholder: _ctx.$t("contact.form.phone_placeholder"),
                            size: "lg",
                            class: "dark:bg-gray-900/50 w-full",
                            ui: {
                              base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                            }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    createVNode(_component_UFormGroup, {
                      label: _ctx.$t("contact.form.email"),
                      name: "email",
                      ui: {
                        label: {
                          base: "text-gray-700 dark:text-gray-300 font-medium mb-1.5"
                        }
                      }
                    }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-envelope",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, toDisplayString(_ctx.$t("contact.form.email")), 1)
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          placeholder: _ctx.$t("contact.form.email_placeholder"),
                          size: "lg",
                          class: "dark:bg-gray-900/50 w-full",
                          ui: {
                            base: "bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200"
                          }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UButton, {
                      type: "submit",
                      block: "",
                      size: "xl",
                      color: "primary",
                      class: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 mt-2 transition-transform duration-200 hover:scale-[1.02]"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("contact.form.submit")), 1)
                      ]),
                      _: 1
                    })
                  ], 32)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fdd0805f"]]);

export { contact as default };
//# sourceMappingURL=contact-Beh5nD1R.mjs.map
