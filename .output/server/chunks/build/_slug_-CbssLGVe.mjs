import { h as _export_sfc, m as useRoute, e as useSeoMeta, l as useHead, f as _sfc_main$o, j as __nuxt_component_2$2, _ as _sfc_main$B, k as _sfc_main$y, I as ImageComponent, a as _sfc_main$v } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
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
        content: `
      <p>The landscape of customer communication is undergoing a seismic shift. As we move further into 2024, the integration of Artificial Intelligence (AI) and automation tools is no longer a luxury but a necessity for businesses aiming to stay competitive.</p>

      <h2>The Rise of AI-Powered Interactions</h2>
      <p>Gone are the days of static FAQs and long wait times. AI-driven chatbots and virtual assistants are now capable of handling complex queries with human-like nuance. This not only improves customer satisfaction but also frees up human agents to tackle more critical issues.</p>

      <h2>Personalization at Scale</h2>
      <p>One of the most significant advantages of modern communication tools is the ability to personalize interactions at scale. By analyzing customer data, businesses can tailor messages, offers, and support solutions to individual needs, fostering a deeper sense of loyalty.</p>

      <h2>Omnichannel is the New Standard</h2>
      <p>Customers expect to reach you wherever they are—be it WhatsApp, Instagram, SMS, or Email. A unified platform that consolidates these channels into a single dashboard is essential for maintaining context and providing a seamless experience.</p>

      <h2>Conclusion</h2>
      <p>Embracing these technologies is key to building lasting relationships with your customers. The future is automated, personalized, and omnipresent.</p>
    `
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
        content: `
      <p>WhatsApp is the world's most popular messaging app, and for businesses, it represents a massive opportunity. The WhatsApp Business API unlocks features that go far beyond the standard app, allowing for automation, integration, and scale.</p>

      <h2>Why Use the API?</h2>
      <p>Unlike the standard business app, the API allows you to connect WhatsApp to your CRM, automate responses with bots, and send bulk notifications (templates) to thousands of opted-in customers instantly.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Automated Messages:</strong> Set up welcome messages, away messages, and quick replies.</li>
        <li><strong>Interactive Buttons:</strong> Use list messages and reply buttons to guide customers through flows.</li>
        <li><strong>Green Tick Verification:</strong> Build trust with an official business account badge.</li>
      </ul>

      <h2>Getting Started</h2>
      <p>To get started, you'll need a Business Solution Provider (BSP) or direct access through Meta. Once verified, you can start building templates and designing your conversational flows.</p>
    `
      },
      // Fallback for other slugs to avoid 404 in this demo
      {
        title: "Sample Blog Post",
        description: "This is a generic placeholder for any other blog post slug you might click on.",
        date: "Dec 01, 2024",
        image: "https://images.unsplash.com/photo-1499750310159-52f8fdebafd3?q=80&w=1978&auto=format&fit=crop",
        author: {
          name: "BeOn Team",
          avatar: "https://beon.chat/favicon.ico",
          role: "Editor"
        },
        category: "General",
        slug: "sample",
        content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
      }
    ];
    const post = computed(() => {
      return posts.find((p) => p.slug === slug) || posts[posts.length - 1];
    });
    useSeoMeta({
      title: () => `${post.value?.title} - BeOn Blog`,
      description: () => post.value?.description,
      ogTitle: () => `${post.value?.title} - BeOn Blog`,
      ogDescription: () => post.value?.description,
      ogImage: () => post.value?.image,
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: computed(() => {
            if (!post.value) return "";
            return JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.value.title,
              "description": post.value.description,
              "image": post.value.image,
              "datePublished": post.value.date,
              "author": {
                "@type": "Person",
                "name": post.value.author.name
              },
              "publisher": {
                "@type": "Organization",
                "name": "BeOn",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://beon.chat/logo.png"
                }
              }
            });
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_2$2;
      const _component_UIcon = _sfc_main$B;
      const _component_UAvatar = _sfc_main$y;
      const _component_NuxtImg = ImageComponent;
      const _component_UButton = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-950 min-h-screen py-12 lg:py-24" }, _attrs))} data-v-d0b64ce3>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/blog",
              class: "inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-arrow-left",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` Back to Blog `);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-arrow-left",
                      class: "w-4 h-4"
                    }),
                    createTextVNode(" Back to Blog ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(post)) {
              _push2(`<div data-v-d0b64ce3${_scopeId}><div class="space-y-6 text-center mb-12 animate-fade-in-up" data-v-d0b64ce3${_scopeId}><div class="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400" data-v-d0b64ce3${_scopeId}><span class="font-medium text-blue-600 dark:text-blue-400" data-v-d0b64ce3${_scopeId}>${ssrInterpolate(unref(post).category)}</span><span data-v-d0b64ce3${_scopeId}>•</span><time data-v-d0b64ce3${_scopeId}>${ssrInterpolate(unref(post).date)}</time></div><h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight" data-v-d0b64ce3${_scopeId}>${ssrInterpolate(unref(post).title)}</h1><p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-v-d0b64ce3${_scopeId}>${ssrInterpolate(unref(post).description)}</p><div class="flex items-center justify-center gap-3 pt-4" data-v-d0b64ce3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: unref(post).author.avatar,
                alt: unref(post).author.name,
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-left" data-v-d0b64ce3${_scopeId}><p class="font-medium text-gray-900 dark:text-white" data-v-d0b64ce3${_scopeId}>${ssrInterpolate(unref(post).author.name)}</p><p class="text-gray-500 dark:text-gray-400 text-xs" data-v-d0b64ce3${_scopeId}>${ssrInterpolate(unref(post).author.role)}</p></div></div></div><div class="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-xl animate-fade-in-up delay-100" data-v-d0b64ce3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: unref(post).image,
                alt: unref(post).title,
                class: "absolute inset-0 w-full h-full object-cover",
                loading: "eager",
                format: "webp",
                width: "1200",
                height: "675"
              }, null, _parent2, _scopeId));
              _push2(`</div><article class="prose prose-lg dark:prose-invert max-w-none mx-auto animate-fade-in-up delay-200" data-v-d0b64ce3${_scopeId}>${unref(post).content ?? ""}</article><div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center" data-v-d0b64ce3${_scopeId}><p class="text-gray-500 dark:text-gray-400 font-medium" data-v-d0b64ce3${_scopeId}> Share this article </p><div class="flex gap-4" data-v-d0b64ce3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "i-simple-icons-twitter",
                to: "#",
                target: "_blank"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "i-simple-icons-linkedin",
                to: "#",
                target: "_blank"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "i-simple-icons-facebook",
                to: "#",
                target: "_blank"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/blog",
                class: "inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-arrow-left",
                    class: "w-4 h-4"
                  }),
                  createTextVNode(" Back to Blog ")
                ]),
                _: 1
              }),
              unref(post) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "space-y-6 text-center mb-12 animate-fade-in-up" }, [
                  createVNode("div", { class: "flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400" }, [
                    createVNode("span", { class: "font-medium text-blue-600 dark:text-blue-400" }, toDisplayString(unref(post).category), 1),
                    createVNode("span", null, "•"),
                    createVNode("time", null, toDisplayString(unref(post).date), 1)
                  ]),
                  createVNode("h1", { class: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight" }, toDisplayString(unref(post).title), 1),
                  createVNode("p", { class: "text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" }, toDisplayString(unref(post).description), 1),
                  createVNode("div", { class: "flex items-center justify-center gap-3 pt-4" }, [
                    createVNode(_component_UAvatar, {
                      src: unref(post).author.avatar,
                      alt: unref(post).author.name,
                      size: "sm"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "text-left" }, [
                      createVNode("p", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(unref(post).author.name), 1),
                      createVNode("p", { class: "text-gray-500 dark:text-gray-400 text-xs" }, toDisplayString(unref(post).author.role), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-xl animate-fade-in-up delay-100" }, [
                  createVNode(_component_NuxtImg, {
                    src: unref(post).image,
                    alt: unref(post).title,
                    class: "absolute inset-0 w-full h-full object-cover",
                    loading: "eager",
                    format: "webp",
                    width: "1200",
                    height: "675"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("article", {
                  class: "prose prose-lg dark:prose-invert max-w-none mx-auto animate-fade-in-up delay-200",
                  innerHTML: unref(post).content
                }, null, 8, ["innerHTML"]),
                createVNode("div", { class: "mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center" }, [
                  createVNode("p", { class: "text-gray-500 dark:text-gray-400 font-medium" }, " Share this article "),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "i-simple-icons-twitter",
                      to: "#",
                      target: "_blank"
                    }),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "i-simple-icons-linkedin",
                      to: "#",
                      target: "_blank"
                    }),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "i-simple-icons-facebook",
                      to: "#",
                      target: "_blank"
                    })
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0b64ce3"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-CbssLGVe.mjs.map
