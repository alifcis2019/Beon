import { a as _export_sfc, d as useI18n, f as useSeoMeta, g as _sfc_main$o, _ as _sfc_main$B, h as _sfc_main$3, b as _sfc_main$v } from './server.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#0a1014] min-h-screen py-12 lg:py-24 flex items-center justify-center transition-colors duration-300 relative overflow-hidden" }, _attrs))} data-v-3a7c970f><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-3a7c970f><div class="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" data-v-3a7c970f></div><div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" data-v-3a7c970f></div></div>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "w-full relative z-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center" data-v-3a7c970f${_scopeId}><div class="space-y-8" data-v-3a7c970f${_scopeId}><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium animate-fade-in-up" data-v-3a7c970f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-simple-icons-meta",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm" data-v-3a7c970f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.meta_partner"))}</span></div><div class="animate-fade-in-up delay-100" data-v-3a7c970f${_scopeId}><h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6" data-v-3a7c970f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.headline"))} <br data-v-3a7c970f${_scopeId}><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400" data-v-3a7c970f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.subheadline"))}</span></h1><p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg" data-v-3a7c970f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.description"))}</p></div><div class="space-y-6 animate-fade-in-up delay-200" data-v-3a7c970f${_scopeId}><!--[-->`);
            ssrRenderList(unref(features), (feature, index) => {
              _push2(`<div class="flex items-center gap-4 group" data-v-3a7c970f${_scopeId}><div class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-v-3a7c970f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: feature.icon,
                class: "w-5 h-5 text-gray-900 dark:text-white"
              }, null, _parent2, _scopeId));
              _push2(`</div><span class="font-medium text-gray-700 dark:text-gray-300" data-v-3a7c970f${_scopeId}>${ssrInterpolate(feature.text)}</span></div>`);
            });
            _push2(`<!--]--></div></div><div class="bg-white dark:bg-[#111b21] rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-[#2a3942] animate-fade-in-up delay-300 hover:shadow-blue-500/5 transition-all duration-500" data-v-3a7c970f${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8" data-v-3a7c970f${_scopeId}>${ssrInterpolate(_ctx.$t("contact.form.title"))}</h2><form class="space-y-6" data-v-3a7c970f${_scopeId}><div class="grid grid-cols-1 gap-6" data-v-3a7c970f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: _ctx.$t("contact.form.name"),
              name: "name",
              class: "w-full",
              ui: {
                label: {
                  base: "text-gray-700 dark:text-gray-300 font-medium mb-2"
                }
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-3a7c970f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-user",
                    class: "w-4 h-4 text-blue-500 dark:text-blue-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-3a7c970f${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.form.name"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-user",
                        class: "w-4 h-4 text-blue-500 dark:text-blue-400"
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
                    size: "xl",
                    class: "w-full",
                    ui: {
                      base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                      placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      placeholder: _ctx.$t("contact.form.name_placeholder"),
                      size: "xl",
                      class: "w-full",
                      ui: {
                        base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                        placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
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
                  base: "text-gray-700 dark:text-gray-300 font-medium mb-2"
                }
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-3a7c970f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-phone",
                    class: "w-4 h-4 text-blue-500 dark:text-blue-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-3a7c970f${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.form.phone"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-phone",
                        class: "w-4 h-4 text-blue-500 dark:text-blue-400"
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
                    size: "xl",
                    class: "w-full",
                    ui: {
                      base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                      placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).phone,
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                      type: "tel",
                      placeholder: _ctx.$t("contact.form.phone_placeholder"),
                      size: "xl",
                      class: "w-full",
                      ui: {
                        base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                        placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
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
                  base: "text-gray-700 dark:text-gray-300 font-medium mb-2"
                }
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-3a7c970f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-envelope",
                    class: "w-4 h-4 text-blue-500 dark:text-blue-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-3a7c970f${_scopeId2}>${ssrInterpolate(_ctx.$t("contact.form.email"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-envelope",
                        class: "w-4 h-4 text-blue-500 dark:text-blue-400"
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
                    size: "xl",
                    class: "w-full",
                    ui: {
                      base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                      placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      placeholder: _ctx.$t("contact.form.email_placeholder"),
                      size: "xl",
                      class: "w-full",
                      ui: {
                        base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                        placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
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
              class: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-4 rounded-xl mt-4 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
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
                  createVNode("div", { class: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium animate-fade-in-up" }, [
                    createVNode(_component_UIcon, {
                      name: "i-simple-icons-meta",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", { class: "text-sm" }, toDisplayString(_ctx.$t("contact.meta_partner")), 1)
                  ]),
                  createVNode("div", { class: "animate-fade-in-up delay-100" }, [
                    createVNode("h1", { class: "text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6" }, [
                      createTextVNode(toDisplayString(_ctx.$t("contact.headline")) + " ", 1),
                      createVNode("br"),
                      createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400" }, toDisplayString(_ctx.$t("contact.subheadline")), 1)
                    ]),
                    createVNode("p", { class: "text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg" }, toDisplayString(_ctx.$t("contact.description")), 1)
                  ]),
                  createVNode("div", { class: "space-y-6 animate-fade-in-up delay-200" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(features), (feature, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "flex items-center gap-4 group"
                      }, [
                        createVNode("div", { class: "w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" }, [
                          createVNode(_component_UIcon, {
                            name: feature.icon,
                            class: "w-5 h-5 text-gray-900 dark:text-white"
                          }, null, 8, ["name"])
                        ]),
                        createVNode("span", { class: "font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(feature.text), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-[#111b21] rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-[#2a3942] animate-fade-in-up delay-300 hover:shadow-blue-500/5 transition-all duration-500" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-8" }, toDisplayString(_ctx.$t("contact.form.title")), 1),
                  createVNode("form", {
                    class: "space-y-6",
                    onSubmit: withModifiers(onSubmit, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                      createVNode(_component_UFormGroup, {
                        label: _ctx.$t("contact.form.name"),
                        name: "name",
                        class: "w-full",
                        ui: {
                          label: {
                            base: "text-gray-700 dark:text-gray-300 font-medium mb-2"
                          }
                        }
                      }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-user",
                              class: "w-4 h-4 text-blue-500 dark:text-blue-400"
                            }),
                            createVNode("span", null, toDisplayString(_ctx.$t("contact.form.name")), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: _ctx.$t("contact.form.name_placeholder"),
                            size: "xl",
                            class: "w-full",
                            ui: {
                              base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                              placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
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
                            base: "text-gray-700 dark:text-gray-300 font-medium mb-2"
                          }
                        }
                      }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-phone",
                              class: "w-4 h-4 text-blue-500 dark:text-blue-400"
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
                            size: "xl",
                            class: "w-full",
                            ui: {
                              base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                              placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
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
                          base: "text-gray-700 dark:text-gray-300 font-medium mb-2"
                        }
                      }
                    }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-envelope",
                            class: "w-4 h-4 text-blue-500 dark:text-blue-400"
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
                          size: "xl",
                          class: "w-full",
                          ui: {
                            base: "bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200",
                            placeholder: "placeholder-gray-400 dark:placeholder-gray-500"
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
                      class: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-4 rounded-xl mt-4 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
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
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a7c970f"]]);

export { contact as default };
//# sourceMappingURL=contact-CFwHZnb9.mjs.map
