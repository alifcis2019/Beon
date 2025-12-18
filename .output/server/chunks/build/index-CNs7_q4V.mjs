import { h as _export_sfc, e as useSeoMeta, l as useHead, f as _sfc_main$o, j as __nuxt_component_2$2, I as ImageComponent, k as _sfc_main$y } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogPost",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$2;
      const _component_NuxtImg = ImageComponent;
      const _component_UAvatar = _sfc_main$y;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/blog/${__props.post.slug}`,
        class: "group flex flex-col gap-4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: __props.post.image,
              alt: __props.post.title,
              class: "absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
              loading: "lazy",
              format: "webp",
              width: "600",
              height: "338"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"${_scopeId}></div></div><div class="flex flex-col gap-2"${_scopeId}><div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400"${_scopeId}><span class="font-medium text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(__props.post.category)}</span><span${_scopeId}>•</span><time${_scopeId}>${ssrInterpolate(__props.post.date)}</time></div><h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(__props.post.title)}</h3><p class="text-gray-600 dark:text-gray-400 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.post.description)}</p><div class="mt-2 flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: __props.post.author.avatar,
              alt: __props.post.author.name,
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-sm"${_scopeId}><p class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(__props.post.author.name)}</p><p class="text-gray-500 dark:text-gray-400 text-xs"${_scopeId}>${ssrInterpolate(__props.post.author.role)}</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800" }, [
                createVNode(_component_NuxtImg, {
                  src: __props.post.image,
                  alt: __props.post.title,
                  class: "absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
                  loading: "lazy",
                  format: "webp",
                  width: "600",
                  height: "338"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" })
              ]),
              createVNode("div", { class: "flex flex-col gap-2" }, [
                createVNode("div", { class: "flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400" }, [
                  createVNode("span", { class: "font-medium text-blue-600 dark:text-blue-400" }, toDisplayString(__props.post.category), 1),
                  createVNode("span", null, "•"),
                  createVNode("time", null, toDisplayString(__props.post.date), 1)
                ]),
                createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(__props.post.title), 1),
                createVNode("p", { class: "text-gray-600 dark:text-gray-400 line-clamp-2" }, toDisplayString(__props.post.description), 1),
                createVNode("div", { class: "mt-2 flex items-center gap-3" }, [
                  createVNode(_component_UAvatar, {
                    src: __props.post.author.avatar,
                    alt: __props.post.author.name,
                    size: "xs"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "text-sm" }, [
                    createVNode("p", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(__props.post.author.name), 1),
                    createVNode("p", { class: "text-gray-500 dark:text-gray-400 text-xs" }, toDisplayString(__props.post.author.role), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/BlogPost.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "BlogPost" });
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
        slug: "future-of-customer-communication"
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
        slug: "mastering-whatsapp-business-api"
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
        slug: "why-multi-channel-support-matters"
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
        slug: "automating-your-sales-funnel"
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
        slug: "5-tips-for-better-sms-campaigns"
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
        slug: "understanding-chatbot-analytics"
      }
    ];
    useSeoMeta({
      title: "Blog - BeOn",
      description: "Latest news, updates, and insights from the BeOn team.",
      ogTitle: "Blog - BeOn",
      ogDescription: "Latest news, updates, and insights from the BeOn team.",
      ogImage: "https://beon.chat/og-image.png",
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "BeOn Blog",
            "description": "Latest news, updates, and insights from the BeOn team.",
            "url": "https://beon.chat/blog",
            "publisher": {
              "@type": "Organization",
              "name": "BeOn",
              "logo": {
                "@type": "ImageObject",
                "url": "https://beon.chat/logo.png"
              }
            },
            "blogPost": posts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "url": `https://beon.chat/blog/${post.slug}`,
              "image": post.image
            }))
          })
        }
      ]
    });
    useSeoMeta({
      title: "Blog - BeOn",
      description: "Latest news, updates, and insights from the BeOn team.",
      ogTitle: "Blog - BeOn",
      ogDescription: "Latest news, updates, and insights from the BeOn team.",
      ogImage: "https://beon.chat/og-image.png",
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "BeOn Blog",
            "description": "Latest news, updates, and insights from the BeOn team.",
            "url": "https://beon.chat/blog",
            "publisher": {
              "@type": "Organization",
              "name": "BeOn",
              "logo": {
                "@type": "ImageObject",
                "url": "https://beon.chat/logo.png"
              }
            },
            "blogPost": posts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "url": `https://beon.chat/blog/${post.slug}`,
              "image": post.image
            }))
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$o;
      const _component_BlogPost = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-950 min-h-screen py-16 lg:py-24" }, _attrs))} data-v-3b4df25d>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-2xl mx-auto text-center mb-16 animate-fade-in-up" data-v-3b4df25d${_scopeId}><h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4" data-v-3b4df25d${_scopeId}> Our Blog </h1><p class="text-lg text-gray-600 dark:text-gray-400" data-v-3b4df25d${_scopeId}> Insights, updates, and guides to help you master customer communication and grow your business with BeOn. </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-3b4df25d${_scopeId}><!--[-->`);
            ssrRenderList(posts, (post, index2) => {
              _push2(ssrRenderComponent(_component_BlogPost, {
                key: post.slug,
                post,
                class: "animate-fade-in-up",
                style: { animationDelay: `${index2 * 100}ms` }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-2xl mx-auto text-center mb-16 animate-fade-in-up" }, [
                createVNode("h1", { class: "text-4xl font-bold text-gray-900 dark:text-white mb-4" }, " Our Blog "),
                createVNode("p", { class: "text-lg text-gray-600 dark:text-gray-400" }, " Insights, updates, and guides to help you master customer communication and grow your business with BeOn. ")
              ]),
              createVNode("div", { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(posts, (post, index2) => {
                  return createVNode(_component_BlogPost, {
                    key: post.slug,
                    post,
                    class: "animate-fade-in-up",
                    style: { animationDelay: `${index2 * 100}ms` }
                  }, null, 8, ["post", "style"]);
                }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b4df25d"]]);

export { index as default };
//# sourceMappingURL=index-CNs7_q4V.mjs.map
