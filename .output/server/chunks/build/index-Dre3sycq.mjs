import { a as _export_sfc, f as useSeoMeta, g as _sfc_main$o, I as ImageComponent, j as __nuxt_component_3$2, k as _sfc_main$y, b as _sfc_main$v, _ as _sfc_main$B } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = [
      {
        title: "The Future of Customer Communication",
        description: "Discover how AI and automation are reshaping the way businesses interact with their customers in 2024 and beyond.",
        date: "Dec 12, 2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        author: {
          name: "Sarah Johnson",
          avatar: "https://i.pravatar.cc/150?u=sarah",
          role: "Product Manager"
        },
        category: "Trends",
        slug: "future-of-customer-communication",
        readTime: "5 min read"
      },
      {
        title: "Mastering WhatsApp Business API",
        description: "A comprehensive guide to leveraging the WhatsApp Business API to scale your sales and support operations effectively.",
        date: "Dec 10, 2024",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        author: {
          name: "Michael Chen",
          avatar: "https://i.pravatar.cc/150?u=michael",
          role: "Tech Lead"
        },
        category: "Tutorials",
        slug: "mastering-whatsapp-business-api",
        readTime: "8 min read"
      },
      {
        title: "Why Multi-Channel Support Matters",
        description: "Learn why being present on multiple channels like WhatsApp, SMS, and Email is crucial for modern customer satisfaction.",
        date: "Dec 08, 2024",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        author: {
          name: "Emily Davis",
          avatar: "https://i.pravatar.cc/150?u=emily",
          role: "Customer Success"
        },
        category: "Strategy",
        slug: "why-multi-channel-support-matters",
        readTime: "6 min read"
      },
      {
        title: "Automating Your Sales Funnel",
        description: "Step-by-step strategies to automate your sales process using BeOn flows and increase your conversion rates.",
        date: "Dec 05, 2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        author: {
          name: "David Wilson",
          avatar: "https://i.pravatar.cc/150?u=david",
          role: "Sales Director"
        },
        category: "Automation",
        slug: "automating-your-sales-funnel",
        readTime: "7 min read"
      },
      {
        title: "5 Tips for Better SMS Campaigns",
        description: "Maximize your ROI with these proven tips for crafting high-converting SMS marketing campaigns.",
        date: "Dec 01, 2024",
        image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1974&auto=format&fit=crop",
        author: {
          name: "Lisa Anderson",
          avatar: "https://i.pravatar.cc/150?u=lisa",
          role: "Marketing Specialist"
        },
        category: "Marketing",
        slug: "5-tips-for-better-sms-campaigns",
        readTime: "4 min read"
      },
      {
        title: "Understanding Chatbot Analytics",
        description: "How to read and interpret your chatbot analytics to continuously improve your automated customer interactions.",
        date: "Nov 28, 2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        author: {
          name: "James Taylor",
          avatar: "https://i.pravatar.cc/150?u=james",
          role: "Data Analyst"
        },
        category: "Analytics",
        slug: "understanding-chatbot-analytics",
        readTime: "5 min read"
      }
    ];
    const featuredPost = posts[0];
    const recentPosts = posts.slice(1);
    useSeoMeta({
      title: "Blog - BeOn",
      description: "Latest news, updates, and insights from the BeOn team.",
      ogTitle: "Blog - BeOn",
      ogDescription: "Latest news, updates, and insights from the BeOn team.",
      ogImage: "https://beon.chat/og-image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$o;
      const _component_NuxtImg = ImageComponent;
      const _component_NuxtLink = __nuxt_component_3$2;
      const _component_UAvatar = _sfc_main$y;
      const _component_UButton = _sfc_main$v;
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300" }, _attrs))} data-v-085b0a3a><section class="relative pt-32 pb-20 overflow-hidden" data-v-085b0a3a><div class="absolute inset-0 pointer-events-none" data-v-085b0a3a><div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent" data-v-085b0a3a></div><div class="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] animate-pulse" data-v-085b0a3a></div></div>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-16" data-v-085b0a3a${_scopeId}><h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight" data-v-085b0a3a${_scopeId}> The <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400" data-v-085b0a3a${_scopeId}>BeOn Blog</span></h1><p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-v-085b0a3a${_scopeId}> Insights, strategies, and updates to help you scale your customer communication. </p></div><div class="group relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 hover:shadow-primary-500/10" data-v-085b0a3a${_scopeId}><div class="grid md:grid-cols-2 gap-0" data-v-085b0a3a${_scopeId}><div class="relative h-[400px] md:h-auto overflow-hidden" data-v-085b0a3a${_scopeId}>`);
            if (!unref(featuredPost).image) {
              _push2(`<div class="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" data-v-085b0a3a${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: unref(featuredPost).image,
              alt: unref(featuredPost).title,
              class: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
              loading: "eager"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" data-v-085b0a3a${_scopeId}></div></div><div class="p-8 md:p-12 flex flex-col justify-center relative" data-v-085b0a3a${_scopeId}><div class="flex items-center gap-3 mb-6" data-v-085b0a3a${_scopeId}><span class="px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 uppercase tracking-wider" data-v-085b0a3a${_scopeId}>${ssrInterpolate(unref(featuredPost).category)}</span><span class="text-sm text-gray-500 dark:text-gray-400" data-v-085b0a3a${_scopeId}>${ssrInterpolate(unref(featuredPost).readTime)}</span></div><h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" data-v-085b0a3a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/blog/${unref(featuredPost).slug}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(featuredPost).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(featuredPost).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2><p class="text-lg text-gray-600 dark:text-gray-400 mb-8 line-clamp-3" data-v-085b0a3a${_scopeId}>${ssrInterpolate(unref(featuredPost).description)}</p><div class="flex items-center justify-between mt-auto" data-v-085b0a3a${_scopeId}><div class="flex items-center gap-3" data-v-085b0a3a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: unref(featuredPost).author.avatar,
              alt: unref(featuredPost).author.name,
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-085b0a3a${_scopeId}><div class="text-sm font-medium text-gray-900 dark:text-white" data-v-085b0a3a${_scopeId}>${ssrInterpolate(unref(featuredPost).author.name)}</div><div class="text-xs text-gray-500" data-v-085b0a3a${_scopeId}>${ssrInterpolate(unref(featuredPost).date)}</div></div></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: `/blog/${unref(featuredPost).slug}`,
              variant: "ghost",
              color: "gray",
              class: "group/btn"
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-arrow-right",
                    class: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-arrow-right",
                      class: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Read Article `);
                } else {
                  return [
                    createTextVNode(" Read Article ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center mb-16" }, [
                createVNode("h1", { class: "text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight" }, [
                  createTextVNode(" The "),
                  createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400" }, "BeOn Blog")
                ]),
                createVNode("p", { class: "text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" }, " Insights, strategies, and updates to help you scale your customer communication. ")
              ]),
              createVNode("div", { class: "group relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 hover:shadow-primary-500/10" }, [
                createVNode("div", { class: "grid md:grid-cols-2 gap-0" }, [
                  createVNode("div", { class: "relative h-[400px] md:h-auto overflow-hidden" }, [
                    !unref(featuredPost).image ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
                    })) : createCommentVNode("", true),
                    createVNode(_component_NuxtImg, {
                      src: unref(featuredPost).image,
                      alt: unref(featuredPost).title,
                      class: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                      loading: "eager"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" })
                  ]),
                  createVNode("div", { class: "p-8 md:p-12 flex flex-col justify-center relative" }, [
                    createVNode("div", { class: "flex items-center gap-3 mb-6" }, [
                      createVNode("span", { class: "px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 uppercase tracking-wider" }, toDisplayString(unref(featuredPost).category), 1),
                      createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(featuredPost).readTime), 1)
                    ]),
                    createVNode("h2", { class: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" }, [
                      createVNode(_component_NuxtLink, {
                        to: `/blog/${unref(featuredPost).slug}`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(featuredPost).title), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    createVNode("p", { class: "text-lg text-gray-600 dark:text-gray-400 mb-8 line-clamp-3" }, toDisplayString(unref(featuredPost).description), 1),
                    createVNode("div", { class: "flex items-center justify-between mt-auto" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_UAvatar, {
                          src: unref(featuredPost).author.avatar,
                          alt: unref(featuredPost).author.name,
                          size: "sm"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(unref(featuredPost).author.name), 1),
                          createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(unref(featuredPost).date), 1)
                        ])
                      ]),
                      createVNode(_component_UButton, {
                        to: `/blog/${unref(featuredPost).slug}`,
                        variant: "ghost",
                        color: "gray",
                        class: "group/btn"
                      }, {
                        trailing: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-arrow-right",
                            class: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Read Article ")
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800" data-v-085b0a3a>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between mb-12" data-v-085b0a3a${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white" data-v-085b0a3a${_scopeId}> Recent Articles </h2><div class="flex gap-2" data-v-085b0a3a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "gray",
              icon: "i-heroicons-funnel"
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative" data-v-085b0a3a${_scopeId}><input type="text" placeholder="Search..." class="pl-9 pr-4 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 ring-primary-500 outline-none transition-all w-48 focus:w-64" data-v-085b0a3a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-magnifying-glass",
              class: "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-085b0a3a${_scopeId}><!--[-->`);
            ssrRenderList(unref(recentPosts), (post, index2) => {
              _push2(`<div class="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col" style="${ssrRenderStyle({ animationDelay: `${index2 * 100}ms` })}" data-v-085b0a3a${_scopeId}><div class="relative aspect-[16/10] overflow-hidden" data-v-085b0a3a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: post.image,
                alt: post.title,
                class: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                loading: "lazy"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute top-4 left-4" data-v-085b0a3a${_scopeId}><span class="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white shadow-sm" data-v-085b0a3a${_scopeId}>${ssrInterpolate(post.category)}</span></div></div><div class="p-6 flex flex-col flex-1" data-v-085b0a3a${_scopeId}><div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3" data-v-085b0a3a${_scopeId}><time data-v-085b0a3a${_scopeId}>${ssrInterpolate(post.date)}</time><span data-v-085b0a3a${_scopeId}>•</span><span data-v-085b0a3a${_scopeId}>${ssrInterpolate(post.readTime)}</span></div><h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2" data-v-085b0a3a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/blog/${post.slug}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h3><p class="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1" data-v-085b0a3a${_scopeId}>${ssrInterpolate(post.description)}</p><div class="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800" data-v-085b0a3a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: post.author.avatar,
                alt: post.author.name,
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-v-085b0a3a${_scopeId}>${ssrInterpolate(post.author.name)}</span></div></div></div>`);
            });
            _push2(`<!--]--></div><div class="mt-16 flex justify-center" data-v-085b0a3a${_scopeId}><div class="flex gap-2" data-v-085b0a3a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "gray",
              icon: "i-heroicons-arrow-left",
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "solid",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`1`);
                } else {
                  return [
                    createTextVNode("1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "gray"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`2`);
                } else {
                  return [
                    createTextVNode("2")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "gray"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`3`);
                } else {
                  return [
                    createTextVNode("3")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "gray",
              icon: "i-heroicons-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between mb-12" }, [
                createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, " Recent Articles "),
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "gray",
                    icon: "i-heroicons-funnel"
                  }),
                  createVNode("div", { class: "relative" }, [
                    createVNode("input", {
                      type: "text",
                      placeholder: "Search...",
                      class: "pl-9 pr-4 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 ring-primary-500 outline-none transition-all w-48 focus:w-64"
                    }),
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-magnifying-glass",
                      class: "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(recentPosts), (post, index2) => {
                  return openBlock(), createBlock("div", {
                    key: post.slug,
                    class: "group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col",
                    style: { animationDelay: `${index2 * 100}ms` }
                  }, [
                    createVNode("div", { class: "relative aspect-[16/10] overflow-hidden" }, [
                      createVNode(_component_NuxtImg, {
                        src: post.image,
                        alt: post.title,
                        class: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "absolute top-4 left-4" }, [
                        createVNode("span", { class: "px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white shadow-sm" }, toDisplayString(post.category), 1)
                      ])
                    ]),
                    createVNode("div", { class: "p-6 flex flex-col flex-1" }, [
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3" }, [
                        createVNode("time", null, toDisplayString(post.date), 1),
                        createVNode("span", null, "•"),
                        createVNode("span", null, toDisplayString(post.readTime), 1)
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2" }, [
                        createVNode(_component_NuxtLink, {
                          to: `/blog/${post.slug}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(post.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      createVNode("p", { class: "text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1" }, toDisplayString(post.description), 1),
                      createVNode("div", { class: "flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800" }, [
                        createVNode(_component_UAvatar, {
                          src: post.author.avatar,
                          alt: post.author.name,
                          size: "xs"
                        }, null, 8, ["src", "alt"]),
                        createVNode("span", { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(post.author.name), 1)
                      ])
                    ])
                  ], 4);
                }), 128))
              ]),
              createVNode("div", { class: "mt-16 flex justify-center" }, [
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_UButton, {
                    variant: "outline",
                    color: "gray",
                    icon: "i-heroicons-arrow-left",
                    disabled: ""
                  }),
                  createVNode(_component_UButton, {
                    variant: "solid",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("1")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "gray"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("2")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "gray"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("3")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    variant: "outline",
                    color: "gray",
                    icon: "i-heroicons-arrow-right"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-085b0a3a"]]);

export { index as default };
//# sourceMappingURL=index-Dre3sycq.mjs.map
